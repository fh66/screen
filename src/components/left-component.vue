<template>
  <div>
    <div class="left_box">
      <!--标题-->
      <div class="left_top">
        <img src="../../public/images/标题.png" alt="" class="leftImg" />
        <p>支撑总部决策管理</p>
      </div>
      <!--第一块-->
      <div class="left_up">
        <div style="padding-top: 8px;font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;营销2.0系统运营</div>
        <div class="left_up_box">
          <div class="left_up_left">
            <div class="left_up_left_one">
              <div style=" display: flex;justify-content: space-between;" >
                <div class='textOne'>统一软件监测</div>
                <div style="height: 16px;margin-top: 10px;margin-right: 10px">
                  <img style="width: 100%;height: 100%" src="../../public/images/小横线.png" alt="" />
                </div>
              </div>
              <div class="left_line"></div>
              <div style=" display: flex;align-items: center;">
                <div style="width: 33.3%;height: 100px">
                  <div id="Codding" style="height:100%;width: 100%;"></div>
                </div>
                <div style="width: 33.3%;height: 100px">
                  <div id="Base" style="height:100%;width: 100%;"></div>
                </div>
                <div style="width: 33.3%;height: 100px">
                  <div id="Definition" style="height:100%;width: 100%;"></div>
                </div>
              </div>
<!--              <div class="steps">-->
<!--                <div v-for="(item, index) in leftJsonData.stepList" :key="index">-->
<!--                  <div v-if="item.id==activeStep" :style="{ color: getStepColor(index) }" style="height: 30px;padding-left: 20px;width: 100%">{{item.content}}</div>-->
<!--                  <div v-else style="height: 30px;width: 100%"></div>-->
<!--&lt;!&ndash;                  <div class="step-line" :class="{'step-completed': index <= activeStep }"></div>&ndash;&gt;-->
<!--                  <div class="step-line"></div>-->
<!--                  <div class="step"  :style="{ backgroundColor: getStepColor(index) }">-->
<!--                    <div class="step-main" :style="{ color: getStepColor(index) }" >{{item.label}}</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--&lt;!&ndash;                <div class="step-line" style="margin-top: 30px" :class="{'step-completed': activeStep==leftJsonData.stepList.length-1 }"></div>&ndash;&gt;-->
<!--                <div class="step-line" style="margin-top: 30px"></div>-->
<!--              </div>-->
            </div>
            <div class="left_up_left_two">
              <div style=" display: flex;justify-content: space-between;" >
                <div class='textOne' style="width: 28%;">产品优化</div>
                <div style="height: 16px;margin-top: 10px;margin-right: 10px">
                  <img style="width: 100%;height: 100%" src="../../public/images/小横线.png" alt="" />
                </div>
              </div>
              <div class="left_line"></div>
              <div>
                <div style="display: flex;">
                  <div class="container" data-num="" style="width: 45%;height: 115px" >
                    <div class="chart"  id="prod3DEcharts"></div>
                  </div>
                  <div style="width: 55%; display: flex;align-items: center; justify-content: center;">
                    <div style="width: 50%;" class="newImgbox">
                      <div class="leftFontColor" style="margin-top: 20px">产品优化总量</div>
                      <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.prodOptimization}}&nbsp个</div>
                    </div>
                    <div style="width: 50%;" class="newImgbox">
                      <div class="leftFontColor" style="margin-top: 20px">产品优化在途</div>
                      <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.problemElimination}}&nbsp个</div>
                    </div>
                  </div>
                </div>
                <div id="Product" style="height:150px"></div>
              </div>

            </div>
          </div>
          <div class="left_up_right">
            <div class="left_up_right_one">
              <div style=" display: flex;justify-content: space-between;" >
                <div class='textOne' style="width: 28%;">营销2.0应用监测</div>
                <div style="height: 16px;margin-top: 10px;margin-right: 10px">
                  <img style="width: 100%;height: 100%" src="../../public/images/小横线.png" alt="" />
                </div>
              </div>
              <div class="left_line"></div>
              <div style=" display: flex;align-items: center;">
                <div style="width: 50%;height: 100px">
                  <div id="userEcharts" style="height:100%;width: 100%;"></div>
                </div>
                <div style="width: 50%;height: 100px">
                  <div id="menuEcharts" style="height:100%;width: 100%;"></div>
                </div>
<!--                <div style="width: 33.3%;height: 100px">-->
<!--                  <div id="businessEcharts" style="height:100%;width: 100%;"></div>-->
<!--                </div>-->
              </div>
            </div>
            <div class="left_up_right_two">
              <div style=" display: flex;justify-content: space-between;" >
                <div class='textOne' style="width: 28%;">问题消缺</div>
                <div style="height: 16px;margin-top: 10px;margin-right: 10px">
                  <img style="width: 100%;height: 100%" src="../../public/images/小横线.png" alt="" />
                </div>
              </div>
              <div class="left_line"></div>
              <div>
                <div style="display: flex;">
                  <div class="container" data-num="" style="width: 45%;height: 115px" >
                    <div class="chart"  id="3DEcharts"></div>
                  </div>
                  <div style="width: 55%; display: flex;align-items: center; justify-content: center;">
                    <div style="width: 50%;" class="newImgbox">
                      <div class="leftFontColor" style="margin-top: 20px">问题消缺总量</div>
                      <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.dataBased}}&nbsp个</div>
                    </div>
                    <div style="width: 50%;" class="newImgbox">
                      <div class="leftFontColor" style="margin-top: 20px">问题消缺在途</div>
                      <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.practicalEvaluation}}&nbsp个</div>
                    </div>
                  </div>
                </div>
                <div id="serviceEcharts" style="height:150px"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!--第二块-->
      <div class="left_down" style="margin-top: 5px">
        <div style="padding-top: 8px;font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;营销数据价值挖掘</div>
        <div class="left_down_box">
          <div class="left_down_left">
            <div class="left_down_left_one">
              <div style=" display: flex;justify-content: space-between" >
                <div class='textOne'>营销数据质量</div>
                <div style="height: 16px;margin-top: 10px;margin-right: 10px">
                  <img style="width: 100%;height: 100%" src="../../public/images/小横线.png" alt="" />
                </div>
              </div>
            </div>
            <div class="left_line"></div>
            <div style="width:100%;display:flex;margin-top:10px">
              <div style="width:100%;display:flex;margin-left:5%">
                <div style="width:89px;height: 87px">
                  <img src="../../public/images/质量规范.png" style="width:100%">
                </div>
                <div style="width:70%;">
                  <div style="width:100%">
                    <div style="font-size:16px;color:#FFF;margin-left:4%;margin-top:6%">营销数据质量标准</div>
                    <div style="font-size:28px;color:#FFF;margin-left:4%;margin-top:4%;font-weight:550;">{{leftJsonData.quality}} 项</div>
                  </div>
                </div>
              </div>
              <div style="width:100%;display:flex;height:100%">
                <div style="width:89px;height: 87px">
                  <img src="../../public/images/核查营销数据.png" style="width:100%">
                </div>
                <div style="width:70%;">
                  <div style="width:100%">
                    <div style="width:100%;font-size:16px;color:#FFF;margin-left:4%;margin-top:6%">核查营销数据</div>
                    <div style="width:90%;font-size:28px;color:#FFF;margin-left:4%;margin-top:4%;font-weight:550;">{{leftJsonData.checkMarketing}}&nbsp万条</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="width:100%;display:flex;margin-top:10px">
              <div style="width:100%;display:flex;margin-left:5%">
                <div style="width:89px;height: 87px">
                  <img src="../../public/images/数据规模.png" style="width:100%">
                </div>
                <div style="width:70%;">
                  <div style="width:100%">
                    <div style="width:100%;font-size:16px;color:#FFF;margin-left:4%;margin-top:6%">核查营销数据规模</div>
                    <div style="width:90%;font-size:28px;color:#FFF;margin-left:4%;margin-top:4%;font-weight:550;">{{leftJsonData.checkData}}&nbspGB</div>
                  </div>
                </div>
              </div>
              <div style="width:100%;display:flex;height:100%">
                <div style="width:89px;height: 87px">
                  <img src="../../public/images/合格率.png" style="width:100%">
                </div>
                <div style="width:70%;">
                  <div style="width:100%">
                    <div style="width:100%;font-size:16px;color:#FFF;margin-left:4%;margin-top:6%">营销客户基础数据合格率</div>
                    <div style="width:90%;font-size:28px;color:#FFF;margin-left:4%;margin-top:4%;font-weight:550;">{{leftJsonData.marketing}}&nbsp%</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Qualified" style="height:220px"></div>
          </div>
          <div class="left_down_right">
            <div class="left_down_right_one">
              <div style=" display: flex;justify-content: space-between" >
                <div class='textOne'>营销看板</div>
                <div style="height: 16px;margin-top: 10px;margin-right: 10px">
                  <img style="width: 100%;height: 100%" src="../../public/images/小横线.png" alt="" />
                </div>
              </div>
            </div>
            <div class="left_line"></div>
<!--            <div style="width:100%;display:flex;align-items: center;margin-left:8%;margin-top: 10px">-->
<!--              <div style="width: 33.33%;position: relative">-->
<!--                <div style="width:145px;height:90px">-->
<!--                  <img src="../../public/images/u407.png" style="width:100%">-->
<!--                </div>-->
<!--&lt;!&ndash;                <div style="font-size:16px;color:#FFF;position: absolute;top: 8%;left:18%">看板主题</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div style="font-size:18px;color:#30f275;font-weight:550;position: absolute;top: 30%;left: 25%">{{leftJsonData.operating}}&nbsp个</div>&ndash;&gt;-->
<!--              </div>-->
<!--              <div style="width: 33.33%;position: relative">-->
<!--                <div style="width:145px;height:90px">-->
<!--                  <img src="../../public/images/u407.png" style="width:100%">-->
<!--                </div>-->
<!--                <div style="font-size:16px;color:#FFF;position: absolute;top: 8%;left:18%">看板指标</div>-->
<!--                <div style="font-size:18px;color:#30f275;font-weight:550;position: absolute;top: 30%;left: 20%">{{leftJsonData.monthly}}&nbsp个</div>-->
<!--              </div>-->
<!--              <div style="width: 33.33%;position: relative">-->
<!--                <div style="width:145px;height:90px">-->
<!--                  <img src="../../public/images/u407.png" style="width:100%">-->
<!--                </div>-->
<!--                <div style="font-size:16px;color:#FFF;position: absolute;top: 10%;left: 10%">监测分析主题</div>-->
<!--                <div style="font-size:18px;color:#30f275;font-weight:550;position: absolute;top: 30%;left: 20%">{{leftJsonData.subject}}&nbsp个</div>-->
<!--              </div>-->
<!--            </div>-->


            <div style="display: flex;align-items: center; justify-content: center;">
              <div style="width: 33.33%;" class="newTitleBox">
                <div class="leftFontColor" style="margin-top: 10px">监测主题</div>
                <div class="leftFontColor" style="font-size: 20px;">{{leftJsonData.operating}}&nbsp个</div>
              </div>
              <div style="width: 33.33%;" class="newTitleBox">
                <div class="leftFontColor" style="margin-top: 10px">营销指标</div>
                <div class="leftFontColor" style="font-size: 20px;">{{leftJsonData.monthly}}&nbsp个</div>
              </div>
              <div style="width: 33.33%;" class="newTitleBox">
                <div class="leftFontColor" style="margin-top: 10px">关键业务</div>
                <div class="leftFontColor" style="font-size: 20px;">{{leftJsonData.subject}}&nbsp个</div>
              </div>
            </div>


            <div class="left_down_right_two">
              <div style=" display: flex;justify-content: space-between" >
                <div class='textOne'>营销报表</div>
                <div style="height: 16px;margin-top: 10px;margin-right: 10px">
                  <img style="width: 100%;height: 100%" src="../../public/images/小横线.png" alt="" />
                </div>
              </div>
            </div>
            <div class="left_line"></div>
            <div style="display: flex;align-items: center; justify-content: center;">
              <div style="width: 25%;" class="newImgbox">
                <div class="leftFontColor" style="margin-top: 20px">专业主题</div>
                <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.professional}}&nbsp个</div>
              </div>
              <div style="width: 25%;" class="newImgbox">
                <div class="leftFontColor" style="margin-top: 20px">营销报表数</div>
                <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.marketingReport}}&nbsp张</div>
              </div>
              <div style="width: 25%;" class="newImgbox">
                <div class="leftFontColor" style="margin-top: 20px">累计生成期数</div>
                <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.phasesNumber}}&nbsp期</div>
              </div>
              <div style="width: 25%;" class="newImgbox">
                <div class="leftFontColor" style="margin-top: 20px">报表访问次数</div>
                <div class="leftFontColor" style="font-size: 20px">{{leftJsonData.accessReport}}&nbsp次</div>
              </div>

            </div>
            <div id="ReportTimes" style="height:200px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getPie3D,getParametricEquation,getNearMounth,get30Date} from "../../public/data/leftEcharts"
import * as echarts from 'echarts';
import 'echarts-gl'
export default {

  data(){
    return{
      ColorData: [
        {color: '#124e89', percentage: 20},
        {color: '#1c6fb0', percentage: 40},
        {color: '#1dc0e4', percentage: 60},
        {color: '#1ed1e6', percentage: 80},
        {color: '#1edee6', percentage: 100}
      ],
      leftJsonData: leftJsonData,
      // leftEcharts: leftEcharts,
      steps:leftJsonData.stepList.length, // 步骤的总数
      activeStep: 0, // 当前活跃的步骤索引
      intervalId: null, // 定时器ID

      echartsValid:null, //echarts定时器

      title:{
        label:leftJsonData.normalLabel[0],
        value:leftJsonData.normalData[0]
      },
      prodEchartsValid:null, //echarts定时器
      prodTitle:{
        label:leftJsonData.prodNormalLabel[0],
        value:leftJsonData.prodNormalData[0]
      },
    }
  },
  computed:{
  },
  created() {

  },

  mounted() {
    //
    // // 获取当前时间
    // let now = new Date();
    // // 计算七点到现在的毫秒数
    // let sevenAmMilliseconds = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7) - now;
    // // 设置定时器，延迟七点到现在的毫秒数
    // setTimeout(() => {
    //   // 定时器逻辑，比如开始任务或显示提示
    //   console.log('现在是早上七点，可以开始任务了！');
    //   let index=0
    //
    //   let number=this.leftJsonData.portfolio
    //
    //   setInterval(() => {
    //     index++
    //     if(index==1){
    //       number+=5100
    //     }else if(index==2){
    //       number+=4998
    //     }else if(index==3){
    //       number+=5230
    //     }else if(index==4){
    //       number+=4830
    //     }else if(index==5){
    //       number+=5230
    //       index=0
    //     }
    //     number++
    //     this.leftJsonData.portfolio=number
    //   }, 5000);
    // }, sevenAmMilliseconds);
    //
    // // 计算下午五点半到七点的毫秒数
    // let twoAndHalfHoursMilliseconds = 7 * 60 * 60 * 1000 - sevenAmMilliseconds;
    // // 设置定时器，延迟到下午五点半
    // setTimeout(() => {
    //   // 定时器逻辑，比如结束任务或显示提示
    //   console.log('现在是下午五点半，任务应该结束了！');
    //   this.leftJsonData.portfolio=this.leftJsonData.portfolio
    // }, twoAndHalfHoursMilliseconds);



    // this.startAutoProgress(); //进度条定时器

    this._initProduct() //产品优化情况

    this._initQualified() //数据合格率

    this._initServiceEcharts() //服务满意度

    this._initReportTimes() //报表访问次数

    this.startEcahts(); //echarts定时器
    this.startProdEcahts(); //产品echarts定时器
    this._initTest()  //3D图
    this._initProd3D()  //产品3D图
    this._initUserEcharts() //用户活跃度
    this._initMenuEcharts() //菜单活跃度
    this._initBusinessEcharts() //业务活跃度

    this._initCodding() //标准编码一致率
    this._initBase() //数据模型一致率
    this._initDefinition() //流程定义一致率

  },
  beforeDestroy(){
    // this.stopAutoProgress();
    this.stopEcahts();
    this.stopProdEcahts();
  },
  methods:{



    startAutoProgress() {
      this.intervalId = setInterval(() => {
        if (this.activeStep < this.steps - 1) {
          this.activeStep++;
        } else {
          this.activeStep = 0; // 循环到最后一个步骤后重新开始
        }
      }, 1500);


    },
    stopAutoProgress() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
    getStepColor(stepIndex) {
      if (stepIndex == this.activeStep) {
        return '#0084ff'; // 已完成的步骤背景色为绿色
      }  else {
        return '#ffffff'; // 其他未完成的步骤为灰色
      }
    },


    _initCodding(){
      this.$nextTick(()=> {
        const dom = document.getElementById("Codding");
        const myChart = echarts.init(dom);


        const value = leftJsonData.coddingData;
        var option = {
          // backgroundColor: 'rgba(16, 33, 71)', //设置背景颜色
          title: [
            {
              text: "{a|" + value+ ' '+"%" + "}",
              show: true,
              x: "center",
              y: "30%",
              textStyle: {
                rich: {
                  a: {
                    fontSize: 16,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  },
                },
              },
            },
            {
              text: '标准编码一致率',
              x: "center",
              y: "bottom",
              borderColor: "#fff",
              textStyle: {
                fontWeight: "normal",
                fontSize: 16,
                color: "#fff",
              },
            },
          ],
          polar: {
            center: ["50%", "40%"],
            radius: ["60%", "75%"],
          },
          angleAxis: {
            max: 100,
            show: false,
          },
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              data: [value],
              name: "",
              type: "bar",
              roundCap: true,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(19, 84, 146, .4)",
              },
              coordinateSystem: "polar",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#005DCF",
                    },
                    {
                      offset: 1,
                      color: "#0091ff",
                    },
                  ]),
                },
              },
            },
          ],
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },
    _initBase(){
      this.$nextTick(()=> {
        const dom = document.getElementById("Base");
        const myChart = echarts.init(dom);


        const value = leftJsonData.BaseData;
        var option = {
          // backgroundColor: 'rgba(16, 33, 71)', //设置背景颜色
          title: [
            {
              text: "{a|" + value+ ' '+"%" + "}",
              show: true,
              x: "center",
              y: "30%",
              textStyle: {
                rich: {
                  a: {
                    fontSize: 16,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  },
                },
              },
            },
            {
              text: '数据模型一致率',
              x: "center",
              y: "bottom",
              borderColor: "#fff",
              textStyle: {
                fontWeight: "normal",
                fontSize: 16,
                color: "#fff",
              },
            },
          ],
          polar: {
            center: ["50%", "40%"],
            radius: ["60%", "75%"],
          },
          angleAxis: {
            max: 100,
            show: false,
          },
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              data: [value],
              name: "",
              type: "bar",
              roundCap: true,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(19, 84, 146, .4)",
              },
              coordinateSystem: "polar",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#005DCF",
                    },
                    {
                      offset: 1,
                      color: "#0091ff",
                    },
                  ]),
                },
              },
            },
          ],
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },
    _initDefinition(){
      this.$nextTick(()=> {
        const dom = document.getElementById("Definition");
        const myChart = echarts.init(dom);


        const value = leftJsonData.DefinitionData;
        var option = {
          // backgroundColor: 'rgba(16, 33, 71)', //设置背景颜色
          title: [
            {
              text: "{a|" + value+ ' '+"%" + "}",
              show: true,
              x: "center",
              y: "30%",
              textStyle: {
                rich: {
                  a: {
                    fontSize: 16,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  },
                },
              },
            },
            {
              text: '流程定义一致率',
              x: "center",
              y: "bottom",
              borderColor: "#fff",
              textStyle: {
                fontWeight: "normal",
                fontSize: 16,
                color: "#fff",
              },
            },
          ],
          polar: {
            center: ["50%", "40%"],
            radius: ["60%", "75%"],
          },
          angleAxis: {
            max: 100,
            show: false,
          },
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              data: [value],
              name: "",
              type: "bar",
              roundCap: true,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(19, 84, 146, .4)",
              },
              coordinateSystem: "polar",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#005DCF",
                    },
                    {
                      offset: 1,
                      color: "#0091ff",
                    },
                  ]),
                },
              },
            },
          ],
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },


    _initUserEcharts(){
      this.$nextTick(()=> {
        const dom = document.getElementById("userEcharts");
        const myChart = echarts.init(dom);


        const value = leftJsonData.userActive;
        var option = {
          // backgroundColor: 'rgba(16, 33, 71)', //设置背景颜色
          title: [
            {
              text: "{a|" + value+ ' '+"%" + "}",
              show: true,
              x: "center",
              y: "30%",
              textStyle: {
                rich: {
                  a: {
                    fontSize: 16,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  },
                },
              },
            },
            {
              text: '用户活跃度',
              x: "center",
              y: "bottom",
              borderColor: "#fff",
              textStyle: {
                fontWeight: "normal",
                fontSize: 16,
                color: "#fff",
              },
            },
          ],
          polar: {
            center: ["50%", "40%"],
            radius: ["60%", "75%"],
          },
          angleAxis: {
            max: 100,
            show: false,
          },
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              data: [value],
              name: "",
              type: "bar",
              roundCap: true,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(19, 84, 146, .4)",
              },
              coordinateSystem: "polar",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#005DCF",
                    },
                    {
                      offset: 1,
                      color: "#0091ff",
                    },
                  ]),
                },
              },
            },
          ],
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },
    _initMenuEcharts(){
      this.$nextTick(()=> {
        const dom = document.getElementById("menuEcharts");
        const myChart = echarts.init(dom);

        const value = leftJsonData.menuActive;

        var option = {
          // backgroundColor: 'rgba(16, 33, 71)', //设置背景颜色
          title: [
            {
              text: "{a|" + value+ ' '+"%" + "}",
              show: true,
              x: "center",
              y: "30%",
              textStyle: {
                rich: {
                  a: {
                    fontSize: 16,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  },
                },
              },
            },
            {
              text: '菜单活跃度',
              x: "center",
              y: "bottom",
              borderColor: "#fff",
              textStyle: {
                fontWeight: "normal",
                fontSize: 16,
                color: "#fff",
              },
            },
          ],
          polar: {
            center: ["50%", "40%"],
            radius: ["60%", "75%"],
          },
          angleAxis: {
            max: 100,
            show: false,
          },
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              data: [value],
              name: "",
              type: "bar",
              roundCap: true,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(19, 84, 146, .4)",
              },
              coordinateSystem: "polar",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#005DCF",
                    },
                    {
                      offset: 1,
                      color: "#00CCFF",
                    },
                  ]),
                },
              },
            },
          ],
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },
    _initBusinessEcharts(){
      this.$nextTick(()=> {
        const dom = document.getElementById("businessEcharts");
        const myChart = echarts.init(dom);

        const value = leftJsonData.businessActive;
        var option = {
          // backgroundColor: 'rgba(16, 33, 71)', //设置背景颜色
          title: [
            {
              text: "{a|" + value+ ' '+"%" + "}",
              show: true,
              x: "center",
              y: "30%",
              textStyle: {
                rich: {
                  a: {
                    fontSize: 16,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  },
                },
              },
            },
            {
              text: '业务活跃度',
              x: "center",
              y: "bottom",
              borderColor: "#fff",
              textStyle: {
                fontWeight: "normal",
                fontSize: 16,
                color: "#fff",
              },
            },
          ],
          polar: {
            center: ["50%", "40%"],
            radius: ["60%", "75%"],
          },
          angleAxis: {
            max: 100,
            show: false,
          },
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              data: [value],
              name: "",
              type: "bar",
              roundCap: true,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(19, 84, 146, .4)",
              },
              coordinateSystem: "polar",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#005DCF",
                    },
                    {
                      offset: 1,
                      color: "#00CCFF",
                    },
                  ]),
                },
              },
            },
          ],
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },


    startEcahts(){
      var i = 0;
      this.echartsValid = setInterval(() => {
        this.title.label=leftJsonData.normalLabel[i]
        this.title.value= leftJsonData.normalData[i]
        i++
        if(i == leftJsonData.normalData.length){
          i=0
        }
        // this._initTest()  //3D图
      }, 1500);

    },
    stopEcahts(){
      if (this.echartsValid) {
        clearInterval(this.echartsValid);
      }
    },


    startProdEcahts(){
      var i = 0;
      this.prodEchartsValid = setInterval(() => {
        this.prodTitle.label=leftJsonData.prodNormalLabel[i]
        this.prodTitle.value= leftJsonData.prodNormalData[i]
        i++
        if(i == leftJsonData.prodNormalData.length){
          i=0
        }
        // this._initProd3D()  //3D图
      }, 1500);

    },
    stopProdEcahts(){
      if (this.prodEchartsValid) {
        clearInterval(this.prodEchartsValid);
      }
    },





    _initProd3D(){
      let that=this
      const dom = document.getElementById("prod3DEcharts");
      const myChart = echarts.init(dom);

      var option=getPie3D(this.prodTitle,
          [
            {
              name: leftJsonData.prodNormalLabel[0],
              value: leftJsonData.prodNormalData[0],
              itemStyle: {
                color: '#B7EB8F'
              }
            }, {
            name: leftJsonData.prodNormalLabel[1],
            value: leftJsonData.prodNormalData[1],
            itemStyle: {
              color: '#BAE7FF',
            }
          }, {
            name: leftJsonData.prodNormalLabel[2],
            value: leftJsonData.prodNormalData[2],
            itemStyle: {
              color: '#2F54EB'
            }
          },{
            name: leftJsonData.prodNormalLabel[3],
            value: leftJsonData.prodNormalData[3],
            itemStyle: {
              color: '#1EE7E7'
            }
          },{
            name: leftJsonData.prodNormalLabel[4],
            value: leftJsonData.prodNormalData[4],
            itemStyle: {
              color: '#1890FF'
            }
          },], 0.59)
      myChart.setOption(option)


      let hoveredIndex = '';
      //  修正取消高亮失败的 bug
    // 监听 mouseover，近似实现高亮（放大）效果
      option.title.text = option.series[0].name+option.series[0].pieData.value+'%'
      function handleOver(params) {
        // 准备重新渲染扇形所需的参数
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        let i;

        // 如果触发 mouseover 的扇形当前已高亮，则不做操作
        if (hoveredIndex === params.seriesIndex) {
          return;

          // 否则进行高亮及必要的取消高亮操作
        } else {
          // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
          if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
            isSelected = option.series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            startRatio = option.series[hoveredIndex].pieData.startRatio;
            endRatio = option.series[hoveredIndex].pieData.endRatio;
            k = option.series[hoveredIndex].pieStatus.k;
            i = option.series[hoveredIndex].pieData.value;
            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            option.series[hoveredIndex].parametricEquation = getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                i
            );
            option.series[hoveredIndex].pieStatus.hovered = isHovered;

            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = '';
          }

          // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
          if (params.seriesName !== 'mouseoutSeries') {
            option.title.text=' ' +option.series[seriesIndex].name + ' ' + option.series[params.seriesIndex].pieData.value+'%'
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected = option.series[params.seriesIndex].pieStatus.selected;
            isHovered = true;
            startRatio = option.series[params.seriesIndex].pieData.startRatio;
            endRatio = option.series[params.seriesIndex].pieData.endRatio;
            k = option.series[params.seriesIndex].pieStatus.k;

            // 对当前点击的扇形，执行高亮操作（对 option 更新）
            option.series[params.seriesIndex].parametricEquation = getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                option.series[params.seriesIndex].pieData.value + 10
            );
            option.series[params.seriesIndex].pieStatus.hovered = isHovered;

            // 记录上次高亮的扇形对应的系列号 seriesIndex
            hoveredIndex = params.seriesIndex;
          }

          // 使用更新后的 option，渲染图表
          myChart.setOption(option);
        }
      }

      let seriesIndex = 0
      setInterval(() => {
        handleOver({seriesIndex:seriesIndex})
        seriesIndex++
        if (seriesIndex === option.series.length) {
          seriesIndex = 0
        }
      }, 1500)



    },
    _initTest(){
      let that=this
      const dom = document.getElementById("3DEcharts");
      const myChart = echarts.init(dom);

      var option=getPie3D(this.title,
          [
            {
              name: leftJsonData.normalLabel[0],
              value: leftJsonData.normalData[0],
              itemStyle: {
                color: '#B7EB8F'
              }
            }, {
            name: leftJsonData.normalLabel[1],
            value: leftJsonData.normalData[1],
            itemStyle: {
              color: '#BAE7FF',
            }
          }, {
            name: leftJsonData.normalLabel[2],
            value: leftJsonData.normalData[2],
            itemStyle: {
              color: '#2F54EB'
            }
          },{
            name: leftJsonData.normalLabel[3],
            value: leftJsonData.normalData[3],
            itemStyle: {
              color: '#1EE7E7'
            }
          },{
            name: leftJsonData.normalLabel[4],
            value: leftJsonData.normalData[4],
            itemStyle: {
              color: '#1890FF'
            }
          },], 0.59)
      myChart.setOption(option)


      let hoveredIndex = '';
      //  修正取消高亮失败的 bug
// 监听 mouseover，近似实现高亮（放大）效果


      option.title.text = option.series[0].name+option.series[0].pieData.value+'%'
      function handleOver(params) {
        // 准备重新渲染扇形所需的参数
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        let i;

        // 如果触发 mouseover 的扇形当前已高亮，则不做操作
        if (hoveredIndex === params.seriesIndex) {
          return;

          // 否则进行高亮及必要的取消高亮操作
        } else {
          // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
          if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
            isSelected = option.series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            startRatio = option.series[hoveredIndex].pieData.startRatio;
            endRatio = option.series[hoveredIndex].pieData.endRatio;
            k = option.series[hoveredIndex].pieStatus.k;
            // i = option.series[hoveredIndex].pieData.value === option.series[0].pieData.value ? 35 : 10;
            i = option.series[hoveredIndex].pieData.value;
            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            option.series[hoveredIndex].parametricEquation = getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                i
            );
            option.series[hoveredIndex].pieStatus.hovered = isHovered;

            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = '';
          }

          // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
          if (params.seriesName !== 'mouseoutSeries') {
            option.title.text=' ' +option.series[seriesIndex].name + ' ' + option.series[params.seriesIndex].pieData.value+'%'
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected = option.series[params.seriesIndex].pieStatus.selected;
            isHovered = true;
            startRatio = option.series[params.seriesIndex].pieData.startRatio;
            endRatio = option.series[params.seriesIndex].pieData.endRatio;
            k = option.series[params.seriesIndex].pieStatus.k;

            // 对当前点击的扇形，执行高亮操作（对 option 更新）
            option.series[params.seriesIndex].parametricEquation = getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                option.series[params.seriesIndex].pieData.value + 10
            );
            option.series[params.seriesIndex].pieStatus.hovered = isHovered;

            // 记录上次高亮的扇形对应的系列号 seriesIndex
            hoveredIndex = params.seriesIndex;
          }

          // 使用更新后的 option，渲染图表
          myChart.setOption(option);
        }
      }

      let seriesIndex = 0
      setInterval(() => {
        handleOver({seriesIndex:seriesIndex})
        seriesIndex++
        if (seriesIndex === option.series.length) {
          seriesIndex = 0
        }
      }, 1500)
    },




    _initProduct(){
      this.$nextTick(()=> {
        const dom = document.getElementById("Product");
        const myChart = echarts.init(dom);

        // 指定图表的配置项和数据
        var option = {
          title:[
            {
              text:"产品优化情况",
              textStyle: {
                color:"#FFFFFF"
              },
              left: 20,// 距离左边位置
              // top: 8,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            },
            {
              subtext:'个',
              left: 60,// 距离左边位置
              top: 15,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            }
          ],
          grid:{
            top:'50',
            left:'25',
            right:'15',
            bottom:'0',
            containLabel:true
          },
          xAxis: {
            type: 'category',
            data: this.leftJsonData.leftOrgName,
            axisLabel:{
              show:true,
              interval:0,
              fontSize: 10,// 调整字体大小
              color:'#FFFFFF'
            },
            axisTick: {
              show: false
            }
          },
          yAxis: [
            {
              type: 'value',
              // name: "个",
              // nameTextStyle: {
              //   color: "#FFFFFF",
              //   nameLocation: 'start',
              // },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#172037',
                  type:'solid'//虚线
                }
              },
              axisLabel: {
                // 控制标签是否显示
                show: true,
                // 控制标签的旋转角度
                color:"#FFFFFF"
              },
            },
          ],
          series: [
            {
              data: this.leftJsonData.ProductData,
              type: 'bar',
              barMaxWidth:10,
              color:new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                {
                  offset: 0,
                  color: '#0282ff'
                },
                {
                  offset: 1,
                  color: '#01c7ed'
                }
              ])
            }

          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },

    _initServiceEcharts(){
      this.$nextTick(()=> {
        const dom = document.getElementById("serviceEcharts");
        const myChart = echarts.init(dom);

        // 指定图表的配置项和数据
        var option = {
          title:[
            {
              text:"问题消缺情况",
              textStyle: {
                color:"#FFFFFF"
              },
              left: 15,// 距离左边位置
              // top: 8,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            },
            {
              subtext:'个',
              left: 50,// 距离左边位置
              top: 20,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            }
          ],
          grid:{
            top:'48',
            left:'25',
            right:'15',
            bottom:'0',
            containLabel:true
          },
          xAxis: {
            type: 'category',
            data: this.leftJsonData.leftOrgName,
            axisLabel:{
              show:true,
              interval:0,
              fontSize: 10,// 调整字体大小
              color:'#FFFFFF'
            },
            axisTick: {
              show: false
            }
          },
          // yAxis: {
          //   type: 'value',
          //   name: "%",
          //   nameTextStyle: {
          //     color: "#FFFFFF",
          //   },
          //   splitLine: {
          //     show: true,
          //     lineStyle: {
          //       color: '#172037',
          //       type:'dashed'//虚线
          //     }
          //   },
          //   axisLabel: {
          //     // 控制标签是否显示
          //     show: true,
          //     // 控制标签的旋转角度
          //     color:"#FFFFFF"
          //   },
          // },
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#172037',
                  type:'solid'//虚线
                }
              },
              axisLabel: {
                // 控制标签是否显示
                show: true,
                // 控制标签的旋转角度
                color:"#FFFFFF"
              },
            },
          ],
          series: [
            {
              data: this.leftJsonData.serviceData,
              type: 'bar',
              barMaxWidth:10,
              color:new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                {
                  offset: 0,
                  color: '#0282ff'
                },
                {
                  offset: 1,
                  color: '#01c7ed'
                }
              ])
            }

          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },

    //数据合格率
    _initQualified(){
      this.$nextTick(()=> {
        const dom = document.getElementById("Qualified");
        const myChart = echarts.init(dom);
        // 指定图表的配置项和数据
        var option = {
          title:[
            {
              text:"数据合格率",
              textStyle: {
                color:"#FFFFFF"
              },
              left: 15,// 距离左边位置
              // top: 8,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            },
            {
              subtext:'%',
              left: 55,// 距离左边位置
              top: 15,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            }
          ],
          grid:{
            top:'50',
            left:'30',
            right:'30',
            bottom:'20',
            containLabel:true
          },
          xAxis: {
            type: 'category',
            data: this.leftJsonData.leftOrgName,
            axisLabel:{
              show:true,
              interval:0,
              fontSize: 10,// 调整字体大小
              color:'#FFFFFF'
            },
            axisTick: {
              show: false
            }
          },
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#172037',
                  type:'solid'//虚线
                }
              },
              axisLabel: {
                // 控制标签是否显示
                show: true,
                // 控制标签的旋转角度
                color:"#FFFFFF"
              },
            },
          ],
          series: [
            {
              data: this.leftJsonData.QualifiedData,
              type: 'bar',
              barMaxWidth:10,
              color:new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                {
                  offset: 0,
                  color: '#0282ff'
                },
                {
                  offset: 1,
                  color: '#01c7ed'
                }
              ])
            }

          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },

    //报表访问次数
    _initReportTimes(){
      this.$nextTick(()=> {
        const dom = document.getElementById("ReportTimes");
        const myChart = echarts.init(dom);
        // 指定图表的配置项和数据
        var option = {
          title:[
            {
              text:"报表访问次数(近30天)",
              textStyle: {
                color:"#FFFFFF"
              },
              left: 12,// 距离左边位置
              // top: 8,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            },
            {
              subtext:'次',
              left: 45,// 距离左边位置
              top: 10,// 距离上面位置
              subtextStyle:{ // 设置二级标题的样式
                color:"#FFFFFF"
              }
            }
          ],
          // backgroundColor: '#000',
          grid:{
            containLabel: true,
            left:20,
            top:45,
            bottom:30,
            right:20
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            padding:[0,0,0,0],
            axisPointer: {
              lineStyle: {
                width: 1,
                type:'solid',
                color:'#00D1FF'
              }
            },
            backgroundColor: 'transparent',
            borderColor:'transparent',
            shadowColor:'transparent',
            formatter: (val)=> {
              return `<div class="" style="width:150px;height:55px; background:url(https://s1.ax1x.com/2023/06/16/pCMGC9A.png) no-repeat;background-size:contain;padding:5px 10px;">
                              <p style="font-size:12px;color:rgba(214, 243, 255, 0.9);display:flex;align-items: center ;margin-top:0px">
                                  <span style="display:inline-block;width: 4px;height: 4px;border-radius:50%;background:#00FFFF;margin-right:5px;"></span> ${val[0].name}
                              </p>
                              <p style="font-size:12px;color:rgba(214, 243, 255, 0.9);display:flex;align-items: center; margin-top:5px">
                                  数量
                                  <span style="font-family: 'DIN'; font-size:16px;margin-left:5px;">${val[0].data}</span>
                              </p>
                         </div>`
            },
          },

          textStyle:{
            color:'rgba(221,247,255,0.7)',
          },
          xAxis: [{
            type: 'category',
            data:get30Date(),
            axisLabel:{
              show:true,
              interval:'0',
              color:'#FFFFFF'
            },
            // axisLine: {
            //   lineStyle: {
            //     color: '#96A9B7',
            //     type:'dashed'//虚线
            //   }
            // },
            axisTick: {
              show: false
            },

          }],
          yAxis: [
              {
            type: 'value',
            axisTick: {
              show: false
            },
            // axisLine: {
            //   show: true,
            //   lineStyle: {
            //     color: '#96A9B7'
            //   }
            // },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#172037',
                type:'dashed'//虚线
              }
            }
          }],
          series: [{
            type: 'line',
            data: leftJsonData.leftOrgData3,
            smooth: true,
            yAxisIndex: 0,
            symbol: 'circle',
            symbolSize: 6,
            showSymbol:false,
            hoverAnimation:true,
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "#0a3b73"
                },
                  {
                    offset: 1,
                    color: "#011643"
                  }
                ], false),
                shadowColor: '#00113d', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
          }

          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize',()=>{
          myChart.resize()
        })
      })
    },

  }



}
</script>

<style scoped>

.steps {
  position: relative;
  padding: 25px 0 25px 20px;
  color: #ffffff;
  display: flex;
  overflow: hidden;
}

.step, .step-line {
  float: left;
}


.active {
  color: #0084ff;
}

.step {
  display: block;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  line-height: 17px;
  text-align: center;
  font-size: 15px;
  /*border: 2px solid #ffffff;*/
  background-color: #ffffff;
  /*background: #cdcdcd;*/
  font: 16px Helvetica Neue,Helvetica,PingFang SC,微软雅黑,Tahoma,Arial,sans-serif;
}


.step-line {
  width: 95px;
  position: relative;
  top: 9px;
  height: 5px;
  background-color: #ffffff;
}
.step-main {
  font: 14px Helvetica Neue,Helvetica,PingFang SC,微软雅黑,Tahoma,Arial,sans-serif;
  padding: 8px 0;
  display: block;
  width: 85px;
  text-align: center;
  position: relative;
  left: -34px;
  top: 20px;
}

.steps > .step-completed {
  background: #0084ff;
  border-color: #0084ff;
}

.step-completed.step-line {
  background-color: #0084ff;
}


.center_top > p {
  margin: 0;
  text-align: center;
  padding-top: 4px;
  font-size: 20px;
}

.leftImg {
  margin-left: 25%;
  width: 49%;
  height: 12px;
}

.left_box {
  height: 100%;
}
.left_top {
  color: #FFFFFF;
}
.left_top > p {
  text-align: center;
  margin-bottom: 4px;
  font-size: 20px;
  margin-top: -1%;
}

.left_up{
  height: 48%;
  color:#FFFFFF;
  background: url("../../public/images/外边框 .png") no-repeat;
  background-size: 100% 100%;
}
.left_line{
  width: 98%;
  height: 1px;
  margin: 5px;
  background-color: #FFFFFF;
}
.left_up_box{
  display: flex;
}
.left_up_left{
  width: 50%;
  height: 100%;
}
.left_up_right{
  width: 50%;
  height: 100%;
}
.left_up_left_one{
  height: 100%;
}
.left_up_left_two{
  height: 100%;
}
.left_up_right_one{
  height: 100%;
}
.left_up_right_two{
  height: 100%;
}


.left_down_box{
  display: flex;
}
.left_down_left{
  width: 50%;
  height: 100%;
}
.left_down_right{
  width: 50%;
  height: 100%;
}


.left_down{
  height: 48%;
  color:#FFFFFF;
  background: url("../../public/images/外边框 .png");
  background-size: 100% 100%;
}



.container {
  width: 196px;
  height:110px;
  position: relative;
}

.container::after {
  content: "";
  position: absolute;
  width: 196px;
  height: 96px;
  background: url("../../public/images/1.png") no-repeat;
  background-size: 100% 100%;
  left: calc(20% - 15px);
  bottom: 2%;
}

.container::before {
  content: attr(data-num);
  position: absolute;
  font-size: 16px;
  font-family: YouSheBiaoTiHei;
  color: #ffffff;
  line-height: 42px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  left: 50%;
  transform: translate(-50%);
  top: 30%;
}

.chart {
  width: 100%;
  height: 100%;
  position: relative;
  left:-5%;
  z-index: 1;
}

.textOne {
  font-size: 16px;
  color: #FFFFFF;
  width: 33%;
  padding-left: 10px;
  padding-top: 10px;
  /*margin-top: 30px;*/
}

.leftFontColor{
  font-size: 16px;
  color: #FFFFFF;
}
.imgBox{
  width: 142px;
  height: 87px;
  text-align:center
}

.newImgbox{
  width: 142px;
  height: 87px;
  text-align:center;
  background: url("../../public/images/边框.png") no-repeat;
  background-size: 100% 100%;
  margin: 10px;
}
.newTitleBox{
  width: 145px;
  height: 90px;
  text-align:center;
  background: url("../../public/images/u407.png") no-repeat;
  background-size: 100% 100%;
  margin:0px 20px;
}



</style>
