<template>
  <div id="app"
       :style="{ transform: 'translate(-50%,-50%) scale(' + scale + ')' }"
  >
    <box-content/>
  </div>
</template>

<script>
import boxContent from './components/boxContent.vue'
import autofit from 'autofit.js'

export default {
  name: 'App',
  components: {
    boxContent
  },
  data() {
    return {
      scale: 1,
    };
  },
  mounted() {
    // autofit.init({
    //   designHeight: 1095,
    //   designWidth: 4095,
    //   renderDom: "#app",
    //   resize: true
    // })
    var that = this;
    this.setScreen();
    window.onresize = function () {
      that.setScreen();
    };
  },
  methods: {

    setScreen() {
      // 可视区域的尺寸
      let visibleWidth = window.innerWidth;
      let visibleHeight = window.innerHeight;
      // 手动配置的面板尺寸
      let manualWidth = 4095;
      let manualHeight = 1095;
      console.log(window.innerWidth, window.innerHeight);
      // 计算横向和纵向的缩放系数
      var widthPercentage = (1.0 * visibleWidth) / manualWidth;
      var heightPercentage = (1.0 * visibleHeight) / manualHeight;
      // 取得最小缩放系数
      this.scale = Math.min(widthPercentage, heightPercentage);
    },
  }
}
</script>

<style>
#app {
  border-width: 0px;
  position: absolute;
  //left: 0px;
  //top: 0px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //width: 4095px;
  width: 5188px;
  height: 1095px;
  background: inherit;
  background-color: rgba(0, 9, 33, 1);
  background: url("../public/images/new/backgroundImg.png") no-repeat;
  background-size: 100% 100%;
  border: none;
  border-radius: 4px;
  -moz-box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.149019607843137);
  -webkit-box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.149019607843137);
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.149019607843137);
  overflow-y: hidden;
}
</style>
