<template>
  <div class="box">
    <div class="header">
      <p class="header_title">营 销 数 字 化 业 务 运 营</p>
    </div>
        <div class="content">
      <left-component class="left"/>
      <center-component class="center" @openPopups="openPopups"/>
      <right-component class="right"/>
    </div>
    <div v-if="show">
      <div class="overlay" @click="() => {show = false}"></div>
      <div class="dialog_box">
        <div class="dialog_title">
          <div class="title">
            <div class="img" @click="handleSwitch(1)" :class="index === 1 ? 'active' : ''">图片</div>
            <div class="video" @click="handleSwitch(2)" :class="index === 2 ? 'active' : ''">视频</div>
          </div>
          <img class="dialog_closure"  @click="() => {show = false}" src="../../public/images/X.png" width="32" height="32" alt="">
        </div>
        <div class="dialog_content">
          <img v-if="index === 1" src="../../public/images/5.0.jpg" width="1630px" height="800px" alt="">
          <video
              v-if="index === 2" width="1630px" height="800px"
              src="../../public/video/1.mp4" controls autoplay></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerComponent from './center-component.vue';
import leftComponent from './left-component.vue';
import rightComponent from './right-component.vue';

export default {
  name: 'boxContent',
  components: {
    centerComponent,
    leftComponent,
    rightComponent
  },
  data() {
    return {
      show: false,
      index: 1
    }
  },
  methods: {
    openPopups (){
      console.log(123123, '12');
      // this.handleClick()
    },
    handleClick() {
      // console.log('打开弹框');
      this.show = true;
      this.index = 1;
    },
    handleSwitch(val) {
      this.index = val
    }
  },
}
</script>

<style scoped lang="scss">
.box {
  height: 100%;
}

.content {
  display: flex;
  height: calc(100% - 58px);
}

.header {
  background: url("../../public/images/new/header.png") no-repeat;
  background-size: 100% 58px;
  height: 58px;
  text-align: center;
  color: #fff;
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_title {
  margin: 0;
}

.left {
  width: 33%;
  //flex-grow: 4;
}

.right {
  width: 33%;
  //flex-grow: 4;
}

.center {
  width: 34%;
  //width: 33%;
  //max-width: 30%;
  //flex-grow: 2;
}

.btn {
  position: absolute;
  right: 20px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明的黑色 */
  z-index: 90; /* 确保遮罩层在最顶层 */
}

.dialog_box {
  color: rgb(255, 255, 255);
  position: absolute;
  z-index: 91;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //background: #FFFFFF;
  width: 1671px;
  height: 907px;
  border: 1px solid;
  border-radius: 12px;
  .dialog_title {
    width: 100%;
    margin-top: 20px;
    height: 32px;
    .title {
      display: flex;
      justify-content: center;
      height: 32px;
      line-height: 32px;
      font-size: 28px;
      .img {
        margin-right: 40px;
        color: #BBCDE6;
      }
      .video {
        color: #BBCDE6;
      }
      .active {
        color: #fff;
      }
    }
    .dialog_closure {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 100;
    }
  }
  .dialog_content {
    padding: 20px;
    padding-top: 30px;
  }
}
</style>
