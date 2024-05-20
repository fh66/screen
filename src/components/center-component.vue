<template>
  <div>
    <div class="center_content" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <!--      <img class="img_background" src="../../public/images/u1.gif" width="100%" height="100%" alt="">-->
      <div class="center_top" @click="openPopups">
        <!--        <div class="background_top"></div>-->
        <img src="../../public/images/new/center/center-header.png" alt="">
        <p>总体情况</p>
      </div>
      <div class="center_emergencies">
        <div class="center_emergencies_title">
<!--          <div class="center_emergencies_case">突发事件：</div>-->
          <span class="scroll-container">
<!--            <span class="scroll-item" v-for="(item ,i) in emergenciesList" :key="i"-->
<!--                  :class="{ active: i === currentIndex }">{{ item }}</span>-->
            <span class="scroll-item" style="top:0px;">{{ emergenciesList[0] }}</span>
          </span>
        </div>
      </div>
      <div class="carousel">
        <img src="../../public/images/new/center/center-top.png" width="100%" height="100%" alt="">
        <el-carousel indicator-position="none" :initial-index="initialIndex"
                     ref="carousel" :interval="10000"
                     @change="handleCarousel" :autoplay="autoplay" height="820px">
          <el-carousel-item v-for="(item, index) in slides" :key="index">
            <div class="container">
              <div class="item" v-for="(items, i) in item.dataValueMining" :key="i" :class="`container_item${i}`">
                <div :class="`div${i}`">
                  <div class="title" style="
    background: linear-gradient(to bottom, #e2ebff 0%, #6da7ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    text-align: center;">{{ items.title }}
                  </div>
                  <div class="val" style="background: linear-gradient(to bottom, #e2ebff 0%, #6da7ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 20px;">{{ items.val }} <span style="font-size: 18px">{{ items.unit }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="center_bottom">
              <div v-for="(item ,i) in slidesTitle" :key="i" :class="`item${i}`" @click="handleClick(item,i)">
                <div :class="`divitem${i}`" style="">
                  {{ item }}
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emergenciesList: centerJsonData.emergencies,
      slides: centerJsonData.slides,
      DailyProcessingBusiness: centerJsonData.DailyProcessingBusiness,
      DailyProcessingInterval: centerJsonData.DailyProcessingInterval,
      Interface: centerJsonData.Interface,
      InterfaceInterval: centerJsonData.InterfaceInterval,
      slidesTitle: [],
      initialIndex: 0,
      currentIndex: 0, // 当前展示的内容在数组中的索引
      scale: 1,
      autoplay: false,
      timerId: null, // 定时器
      dailyTransactionVolume: null, // 日处理业务量定时器
      capabilityApiCalls: null, // 能力接口调用量定时器
      hasVisited: false,
      currentValue: 0,
      currentValue1: 0
    }
  },
  mounted() {
    this.slidesTitle = [centerJsonData.slidesTitle[2], centerJsonData.slidesTitle[0], centerJsonData.slidesTitle[1]];
    // this.slidesTitle = [centerJsonData.slidesTitle[1], centerJsonData.slidesTitle[0], centerJsonData.slidesTitle[2]];
    // setInterval(this.scrollItems, 5000); // 每隔2秒滚动一次
    if (this.slides[0].dataValueMining[1].isOpen) {
      this.timerId = setInterval(this.updateServiceElectricity, this.slides[0].dataValueMining[1].seconds); // 每隔5秒执行一次
    }
    if (this.slides[0].dataValueMining[2].isOpen) { // 日处理业务量
      // this.dailyTransactionVolume = setInterval(this.dailyTransactionVolumeTimer, this.slides[0].dataValueMining[2].seconds); // 每隔5秒执行一次
      this.startTask(this.slides[0].dataValueMining[2].seconds)
    }
    if (this.slides[2].dataValueMining[2].isOpen) {
      this.capabilityApiCallsTimer(this.slides[2].dataValueMining[2].seconds)
      // this.capabilityApiCalls = setInterval(this.capabilityApiCallsTimer, this.slides[2].dataValueMining[2].seconds); // 每隔5秒执行一次
    }
  },
  methods: {
    // 启动定时任务
    startTask(seconds) {
      // 找到日处理业务量对应的数据对象
      let serviceElectricityIndex = this.slides[0].dataValueMining.findIndex(data => data.title === '日受理工单数');
      console.log(serviceElectricityIndex, this.slides[0].dataValueMining, '12312312312');
      if (serviceElectricityIndex !== -1) {
        // 获取当前时间
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        // 自增服务用电客户数的值
        // let currentValue = parseInt(this.slides[0].dataValueMining[serviceElectricityIndex].val.replace(/,/g, ''), 10);
        // 增加的值数组
        if ((hours > 7 && hours < 17) || (hours === 7 && minutes >= 0) || (hours === 17 && minutes < 30)){
          let minutesSinceSeven = (hours - 7) * 60 + minutes;
          // 计算应该使用数组的哪个索引
          let index = Math.floor(minutesSinceSeven / 30);
          this.currentValue = this.DailyProcessingInterval[index]
          // 格式化为带逗号的字符串
          let formattedValue = this.currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          // 更新数据对象的值
          this.slides[0].dataValueMining[serviceElectricityIndex].val = formattedValue;
          console.log(minutesSinceSeven, this.currentValue);
        }
        const increments = this.DailyProcessingBusiness;
        console.log(increments, 'incrementsincrementsincrementsincrements');
        // 当前数组索引
        let index = 0;
        return
        // 创建定时器
        const intervalId = setInterval(() => {
          // 检查时间是否在早上7点到下午5点半之间
          if ((hours > 7 && hours < 17) || (hours === 7 && minutes >= 0) || (hours === 17 && minutes < 30)) {
            console.log(this.currentValue, 'incrementsincrementsincrementsincrements', this.hasVisited);
            // 增加值
            this.currentValue += increments[index];
            // 格式化为带逗号的字符串
            let formattedValue = this.currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // 更新数据对象的值
            this.slides[0].dataValueMining[serviceElectricityIndex].val = formattedValue;
            // 更新索引，循环使用增加值数组
            index = (index + 1) % increments.length;
          } else {
            console.log('Task ended. Final total:', this.currentValue);
            // 不在指定时间内，停止定时器
            clearInterval(intervalId);
            // 格式化为带逗号的字符串
            let formattedValue = this.currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // 更新数据对象的值
            this.slides[0].dataValueMining[serviceElectricityIndex].val = formattedValue;
          }
          this.hasVisited = true
        }, seconds); // 每5秒执行一次
      }
    },
    updateServiceElectricity() {
      // 找到服务用电客户数对应的数据对象
      let serviceElectricityIndex = this.slides[0].dataValueMining.findIndex(data => data.title === '服务用电客户数');
      if (serviceElectricityIndex !== -1) {
        // 自增服务用电客户数的值
        let currentValue = parseInt(this.slides[0].dataValueMining[serviceElectricityIndex].val.replace(/,/g, ''), 10);
        currentValue += this.slides[0].dataValueMining[1].count;
        // 格式化为带逗号的字符串
        let formattedValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // 更新数据对象的值
        this.slides[0].dataValueMining[serviceElectricityIndex].val = formattedValue;
      }
    },
    capabilityApiCallsTimer(seconds) {
      // 找到服务用电客户数对应的数据对象
      let serviceElectricityIndex = this.slides[2].dataValueMining.findIndex(data => data.title === '日能力接口调用量');
      if (serviceElectricityIndex !== -1) {
        // 获取当前时间
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        // 自增服务用电客户数的值
        // let currentValue = parseInt(this.slides[0].dataValueMining[serviceElectricityIndex].val.replace(/,/g, ''), 10);
        // 增加的值数组
        if ((hours > 7 && hours < 17) || (hours === 7 && minutes >= 0) || (hours === 17 && minutes < 30)){
          let minutesSinceSeven = (hours - 7) * 60 + minutes;
          // 计算应该使用数组的哪个索引
          let index = Math.floor(minutesSinceSeven / 30);
          this.currentValue1 = this.InterfaceInterval[index]
          // 格式化为带逗号的字符串
          let formattedValue = this.currentValue1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          // 更新数据对象的值
          this.slides[2].dataValueMining[serviceElectricityIndex].val = formattedValue;
          console.log(minutesSinceSeven, this.currentValue1);
        }
        const increments = this.Interface;
        // 当前数组索引
        let index = 0;
        return
        // 创建定时器
        const intervalId = setInterval(() => {
          // 检查时间是否在早上7点到下午5点半之间
          if ((hours > 7 && hours < 17) || (hours === 7 && minutes >= 0) || (hours === 17 && minutes < 30)) {
            console.log(this.currentValue1, '12312312312', this.hasVisited);
            // 增加值
            this.currentValue1 += increments[index];
            // 格式化为带逗号的字符串
            let formattedValue = this.currentValue1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // 更新数据对象的值
            this.slides[2].dataValueMining[serviceElectricityIndex].val = formattedValue;
            // 更新索引，循环使用增加值数组
            index = (index + 1) % increments.length;
          } else {
            console.log('Task ended. Final total:', this.currentValue1);
            // 不在指定时间内，停止定时器
            clearInterval(intervalId);
            // 格式化为带逗号的字符串
            let formattedValue = this.currentValue1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // 更新数据对象的值
            this.slides[2].dataValueMining[serviceElectricityIndex].val = formattedValue;
          }
          this.hasVisited = true
        }, seconds); // 每5秒执行一次
      }
    },
    //
    handleMouseEnter() {
      console.log('移入');
      this.autoplay = false
    },
    handleMouseLeave() {
      console.log('移出');
      this.autoplay = true
    },
    scrollItems() {
      this.currentIndex = (this.currentIndex + 1) % this.emergenciesList.length; // 循环获取下一个要展示的内容的索引
    },
    handleClick(item, i) {
      let index = 0
      if (item === '营销2.0运营') {
        index = 0
      } else if (item === '数据价值挖掘') {
        index = 1
      } else if (item === '业务中台运营') {
        index = 2
      }
      this.$refs.carousel.setActiveItem(index)
      this.handleCarousel(index)
    },
    handleCarousel(newIndex) {
      this.slidesTitle = []
      if (newIndex === 1) {
        this.slidesTitle = [centerJsonData.slidesTitle[0], centerJsonData.slidesTitle[1], centerJsonData.slidesTitle[2]]
      } else if (newIndex === 0) {
        this.slidesTitle = [centerJsonData.slidesTitle[1], centerJsonData.slidesTitle[0], centerJsonData.slidesTitle[2]]
      } else if (newIndex === 2) {
        this.slidesTitle = [centerJsonData.slidesTitle[1], centerJsonData.slidesTitle[2], centerJsonData.slidesTitle[0]]
      }
    },
    openPopups() {
      console.log(this);
      this.$emit('openPopups', this)
    }
  },
  beforeDestroy() {
    // 组件销毁前清除定时器
    clearInterval(this.timerId);
    // 组件销毁前清除定时器
    clearInterval(this.dailyTransactionVolume);
    // 组件销毁前清除定时器
    clearInterval(this.capabilityApiCalls);
  }
}
</script>

<style scoped lang="scss">
.center_content {
  position: relative;
  height: 100%;
}

.img_background {
  position: absolute;
}

.el-carousel__item h3 {
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.center_top {
  position: absolute;
  z-index: 10;
  width: 100%;
  color: #fff;
  height: 34px;
  //img{
  //  position: absolute;
  //  margin-left: 331px;
  //  width: 49%;
  //  height: 12px;
  //  top: 14px;
  //}
  .background_top {
    position: absolute;
    z-index: 11;
    width: 100%;
    //height: 34px;
    background: url("../../public/images/new/center/center-header.png") no-repeat;
    margin-left: 14%;
    height: 12px;
    top: 14px;
  }
}

.center_top > img {
  position: absolute;
  margin-left: 331px;
  width: 62%;
  //width: 49%;
  height: 12px;
  top: 14px;
}

.center_top > .background_top {
  position: absolute;
  z-index: 11;
  width: 100%;
  //height: 34px;
  background: url("../../public/images/new/center/center-header.png") no-repeat;
  margin-left: 14%;
  height: 12px;
  top: 14px;
}

.center_top > p {
  margin: 0;
  text-align: center;
  padding-top: 4px;
  font-size: 20px;
}

.center_emergencies {
  //background: url("../../public/images/u370.png") no-repeat;
  //background-size: 100% 173px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 15px;
  position: absolute;
  z-index: 10;
  width: calc(100% - 49px);
  margin-left: 24px;
  color: #fff;
  top: 36px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center_emergencies > p {
  text-align: center;
  font-size: 28px;
}

.center_emergencies > div > span {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
}

.carousel {
  padding-top: 220px;
  position: relative;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 590px;
}

.items_title {
  display: flex;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  color: #FFFFFF;
  text-align: center;
  justify-content: center;
}

.item {
  width: 19%;
  background: url("../../public/images/new/center/3.png") no-repeat;
  background-size: 100%;
  margin-right: 10px;
  perspective: 1000px;
  //.div0{
  //  transform: rotateY(12deg);
  //  margin-top: 70px;
  //}
  //.div1{
  //  transform: rotateY(3deg);
  //  margin-top: 49px;
  //}
  //.div2 {
  //  margin-top: 40px;
  //}
  //.div3{
  //  transform: rotateY(-3deg);
  //  margin-top: 49px;
  //}
  //.div4{
  //  transform: rotateY(-16deg);
  //  margin-top: 70px;
  //}
  //.title {
  //  background: linear-gradient(to bottom, #e2ebff 0%, #6da7ff 100%);
  //  -webkit-background-clip: text;
  //  background-clip: text;
  //  color: transparent;
  //  font-size: 24px;
  //  font-weight: bold;
  //  text-align: center;
  //}
  //.val{
  //  background: linear-gradient(to bottom, #e2ebff 0%, #6da7ff 100%);
  //  -webkit-background-clip: text;
  //  background-clip: text;
  //  color: transparent;
  //  font-size: 24px;
  //  font-weight: bold;
  //  text-align: center;
  //  padding: 20px;
  //}
}

.item > .div0 {
  transform: rotateY(12deg);
  margin-top: 70px;
}

.item > .div1 {
  transform: rotateY(3deg);
  margin-top: 49px;
}

.item > .div2 {
  margin-top: 40px;
}

.item > .div3 {
  transform: rotateY(-3deg);
  margin-top: 49px;
}

.item > .div4 {
  transform: rotateY(-16deg);
  margin-top: 70px;
}

.item > .title {
  background: linear-gradient(to bottom, #e2ebff 0%, #6da7ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.item > .val {
  background: linear-gradient(to bottom, #e2ebff 0%, #6da7ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
}

.item:last-child {
  margin-right: 0;
}

.container_item0 {
  background: url("../../public/images/new/center/1.png") no-repeat;
  background-size: 100%;
}

.container_item1 {
  margin-top: 31px;
  //margin-top: 22px;
  background: url("../../public/images/new/center/2.png") no-repeat;
  background-size: 100%;
}

.container_item2 {
  margin-top: 45px;
  //margin-top: 35px;
  background: url("../../public/images/new/center/3.png") no-repeat;
  background-size: 100%;
}

.container_item3 {
  margin-top: 31px;
  //margin-top: 22px;
  background: url("../../public/images/new/center/4.png") no-repeat;
  background-size: 100%;
}

.container_item4 {
  background: url("../../public/images/new/center/5.png") no-repeat;
  background-size: 100%;
}

.center_bottom {
  position: absolute;
  //top: 400px;
  //width: 100%;
  //height: 189px;
  top: 460px;
  width: 100%;
  height: 237px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item0 {
  width: 18%;
  height: 100%;
  text-align: center;
  position: relative;
  background: url("../../public/images/new/center/bottom-left.png") no-repeat;
  background-size: 100%;
  //div{
  //  width: 100%;
  //  text-align: center;
  //  height: 111px;
  //  opacity: 0.41;
  //  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  //  font-weight: 700;
  //  font-style: normal;
  //  font-size: 26px;
  //  color: #FFFFFF;
  //  text-align: center;
  //  position: absolute;
  //  top: 35%;
  //}
}

.item0 > div {
  width: 100%;
  text-align: center;
  height: 111px;
  opacity: 0.41;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  color: #FFFFFF;
  text-align: center;
  position: absolute;
  top: 35%;
}

.item1 {
  width: 18%;
  height: 100%;
  text-align: center;
  position: relative;
  background: url("../../public/images/new/center/bottom-center.png") no-repeat;
  background-size: 100%;
  margin: 0 20px;
  //div{
  //  width: 100%;
  //  text-align: center;
  //  position: absolute;
  //  top: 35%;
  //  font-size: 26px;
  //  text-align: center;
  //  color: #fff;
  //  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  //  font-weight: 700;
  //  font-style: normal;
  //  color: #FFFFFF;
  //}
}

.item1 > div {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 35%;
  font-size: 26px;
  text-align: center;
  color: #fff;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  color: #FFFFFF;
}

.item2 {
  width: 18%;
  height: 100%;
  text-align: center;
  position: relative;
  background: url("../../public/images/new/center/bottom-right.png") no-repeat;
  background-size: 100%;
  //div{
  //  width: 100%;
  //  text-align: center;
  //  height: 111px;
  //  opacity: 0.41;
  //  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  //  font-weight: 700;
  //  font-style: normal;
  //  color: #FFFFFF;
  //  text-align: center;
  //  position: absolute;
  //  top: 35%;
  //  font-size: 26px;
  //}
}

.item2 > div {
  width: 100%;
  text-align: center;
  height: 111px;
  opacity: 0.41;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  color: #FFFFFF;
  text-align: center;
  position: absolute;
  top: 35%;
  font-size: 26px;
}

.scroll-container {
  width: 100%;
  height: 150px; /* 容器高度 */
  overflow: hidden;
  position: relative;
}

.scroll-item {
  position: absolute;
  left: 0;
  width: 100%;
  //opacity: 0;
  font-size: 28px;
  text-indent: 2em;
  display: inline-block;
  //font-size: 20px;
  opacity: 1;
  //transition: transform 0.5s, opacity 0.5s;
}

//.scroll-item.active {
//  opacity: 1;
//  animation: scroll-up 5s forwards;
//}
//
//@keyframes scroll-up {
//  from {
//    transform: translateY(50px);
//  }
//  to {
//    transform: translateY(0);
//  }
//}

.center_emergencies_title {
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 30px;
  //.scroll-container {
  //  margin-top: 40px;
  //  flex: 1;
  //  margin-left: 40px;
  //}
}

.center_emergencies_title > .scroll-container {
  margin-top: 40px;
  flex: 1;
  margin-right: 30px;
  //margin-left: 40px;
}

.center_emergencies_case {
  font-size: 24px;
  font-width: 600;
}

.divitem1 {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 35%;
  font-size: 26px;
  text-align: center;
  color: #fff;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  color: #FFFFFF;
}

.divitem0 {
  width: 100%;
  text-align: center;
  height: 111px;
  opacity: 0.41;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  color: #FFFFFF;
  text-align: center;
  position: absolute;
  top: 35%;
}

.divitem2 {
  width: 100%;
  text-align: center;
  height: 111px;
  opacity: 0.41;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  color: #FFFFFF;
  text-align: center;
  position: absolute;
  top: 35%;
  font-size: 26px;
}
</style>
