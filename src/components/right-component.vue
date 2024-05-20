<template>
  <div>
    <!-- 标题 -->
    <div class="header-container">
      <img src="../../public/images/未标题-1.png" alt="" class="leftImg" />
      <div class="title-and-dropdown">
        <h1 class="leftTitle">赋能省公司提质增效</h1>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link"> ({{ rightMainTitle }}) </span>
          <el-dropdown-menu slot="dropdown" class="grid-dropdown-menu">
            <el-row class="centered-row">
              <el-col
                :span="4"
                class="custom-col"
                v-for="item in dropdownItems"
                :key="item.name"
              >
                <el-dropdown-item
                  :disabled="item.disabled"
                  :command="item.command"
                  :class="{ active1: item.command === activeItem }"
                  @mouseenter="highlightItem(item.command)"
                  >{{ item.name }}</el-dropdown-item
                >
              </el-col>
            </el-row>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 第一部分 -->
    <div class="content_1">
      <div>
        <h3 class="content1-title">{{ defaultProData.content_1title }}</h3>
      </div>
      <div class="content1-main">
        <div class="content_1-left">
          <!-- 左边上半层2个仪表盘 -->
          <div class="content-left-echarts">
            <div class="left1-echarts" id="main5"></div>
            <div class="left1-echarts" id="main6"></div>
          </div>
          <!-- 左下散点图 -->
          <div class="content-lefttop-echarts" id="main7"></div>
        </div>
        <div class="content_1-right">
          <div class="content_1-right-top">
            <div class="content_1-right-topcon">
              <div style="text-align: center; padding-top: 20px; color: #fff">
                <div style="font-size: 16px">
                  {{ defaultProData.content1Right01.content_1Right1_title }}
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div
                    style="font-size: 20px; margin-top: 10px; color: #a7c3ff"
                  >
                    {{ defaultProData.content1Right01.content_1Right1_num }}
                  </div>
                  <div
                    style="
                      padding-left: 10px;
                      margin-top: 10px;
                      font-size: 20px;
                    "
                  >
                    %
                  </div>
                </div>
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 12px;
                  "
                >
                  <div>
                    {{ defaultProData.content1Right01.content_1Right1_yoy }}
                  </div>
                  <div style="padding-left: 20px">
                    {{ defaultProData.content1Right01.content_1Right1_ratio }}
                  </div>
                </div> -->
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 10px;
                    padding-top: 5px;
                  "
                >
                  <div class="arrow-up">
                    <img
                      v-if="
                        defaultProData.content1Right01.content_1Right1_yoynum >
                        0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px"
                      v-else-if="
                        defaultProData.content1Right01.content_1Right1_yoynum <
                        0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right01.content_1Right1_yoynum >
                        0
                          ? '#2ad86f'
                          : defaultProData.content1Right01
                              .content_1Right1_yoynum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{ defaultProData.content1Right01.content_1Right1_yoynum }}
                    %
                  </div>
                  <div style="padding-left: 20px">
                    <img
                      v-if="
                        defaultProData.content1Right01
                          .content_1Right1_rationum > 0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px; margin-right: 5px"
                      v-else-if="
                        defaultProData.content1Right01
                          .content_1Right1_rationum < 0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right01
                          .content_1Right1_rationum > 0
                          ? '#2ad86f'
                          : defaultProData.content1Right01
                              .content_1Right1_rationum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{
                      defaultProData.content1Right01.content_1Right1_rationum
                    }}
                    %
                  </div>
                </div> -->
              </div>
            </div>
            <div class="content_1-right-topcon">
              <div style="text-align: center; padding-top: 20px; color: #fff">
                <div style="font-size: 16px">
                  {{ defaultProData.content1Right02.content_1Right2_title }}
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div
                    style="font-size: 20px; margin-top: 10px; color: #a7c3ff"
                  >
                    {{ defaultProData.content1Right02.content_1Right2_num }}
                  </div>
                  <div
                    style="
                      padding-left: 10px;
                      margin-top: 10px;
                      font-size: 20px;
                    "
                  >
                    %
                  </div>
                </div>
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 12px;
                  "
                >
                  <div>
                    {{ defaultProData.content1Right02.content_1Right2_yoy }}
                  </div>
                  <div style="padding-left: 20px">
                    {{ defaultProData.content1Right02.content_1Right2_ratio }}
                  </div>
                </div> -->
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 10px;
                    padding-top: 5px;
                  "
                >
                  <div class="arrow-up">
                    <img
                      v-if="
                        defaultProData.content1Right02.content_1Right2_yoynum >
                        0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px"
                      v-else-if="
                        defaultProData.content1Right02.content_1Right2_yoynum <
                        0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right02.content_1Right2_yoynum >
                        0
                          ? '#2ad86f'
                          : defaultProData.content1Right02
                              .content_1Right2_yoynum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{ defaultProData.content1Right02.content_1Right2_yoynum }}
                    %
                  </div>
                  <div style="padding-left: 20px">
                    <img
                      v-if="
                        defaultProData.content1Right02
                          .content_1Right2_rationum > 0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px; margin-right: 5px"
                      v-else-if="
                        defaultProData.content1Right02
                          .content_1Right2_rationum < 0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right02
                          .content_1Right2_rationum > 0
                          ? '#2ad86f'
                          : defaultProData.content1Right02
                              .content_1Right2_rationum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{
                      defaultProData.content1Right02.content_1Right2_rationum
                    }}
                    %
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="content_1-right-bot">
            <div class="content_1-right-topcon">
              <div style="text-align: center; padding-top: 20px; color: #fff">
                <div style="font-size: 16px">
                  {{ defaultProData.content1Right03.content_1Right3_title }}
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div
                    style="font-size: 20px; margin-top: 10px; color: #a7c3ff"
                  >
                    {{ defaultProData.content1Right03.content_1Right3_num }}
                  </div>
                  <!-- 原fs 10p -->
                  <div
                    style="
                      padding-left: 10px;
                      margin-top: 10px;
                      font-size: 20px;
                    "
                  >
                    %
                  </div>
                </div>
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 12px;
                  "
                >
                  <div>
                    {{ defaultProData.content1Right03.content_1Right3_yoy }}
                  </div>
                  <div style="padding-left: 20px">
                    {{ defaultProData.content1Right03.content_1Right3_ratio }}
                  </div>
                </div> -->
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 10px;
                    padding-top: 5px;
                  "
                >
                  <div class="arrow-up">
                    <img
                      v-if="
                        defaultProData.content1Right03.content_1Right3_yoynum >
                        0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px"
                      v-else-if="
                        defaultProData.content1Right03.content_1Right3_yoynum <
                        0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right03.content_1Right3_yoynum >
                        0
                          ? '#2ad86f'
                          : defaultProData.content1Right03
                              .content_1Right3_yoynum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{ defaultProData.content1Right03.content_1Right3_yoynum }}
                    %
                  </div>
                  <div style="padding-left: 20px">
                    <img
                      v-if="
                        defaultProData.content1Right03
                          .content_1Right3_rationum > 0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px; margin-right: 5px"
                      v-else-if="
                        defaultProData.content1Right03
                          .content_1Right3_rationum < 0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right03
                          .content_1Right3_rationum > 0
                          ? '#2ad86f'
                          : defaultProData.content1Right03
                              .content_1Right3_rationum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{
                      defaultProData.content1Right03.content_1Right3_rationum
                    }}
                    %
                  </div>
                </div> -->
              </div>
            </div>
            <div class="content_1-right-topcon">
              <div style="text-align: center; padding-top: 20px; color: #fff">
                <div style="font-size: 16px">
                  {{ defaultProData.content1Right04.content_1Right4_title }}
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div
                    style="font-size: 20px; margin-top: 10px; color: #a7c3ff"
                  >
                    {{ defaultProData.content1Right04.content_1Right4_num }}
                  </div>
                  <div
                    style="
                      padding-left: 10px;
                      margin-top: 10px;
                      font-size: 20px;
                    "
                  >
                    %
                  </div>
                </div>
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 12px;
                  "
                >
                  <div>
                    {{ defaultProData.content1Right04.content_1Right4_yoy }}
                  </div>
                  <div style="padding-left: 20px">
                    {{ defaultProData.content1Right04.content_1Right4_ratio }}
                  </div>
                </div> -->
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 10px;
                    padding-top: 5px;
                  "
                >
                  <div class="arrow-up">
                    <img
                      v-if="
                        defaultProData.content1Right04.content_1Right4_yoynum >
                        0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px"
                      v-else-if="
                        defaultProData.content1Right04.content_1Right4_yoynum <
                        0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right04.content_1Right4_yoynum >
                        0
                          ? '#2ad86f'
                          : defaultProData.content1Right04
                              .content_1Right4_yoynum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{ defaultProData.content1Right04.content_1Right4_yoynum }}
                    %
                  </div>
                  <div style="padding-left: 20px">
                    <img
                      v-if="
                        defaultProData.content1Right04
                          .content_1Right4_rationum > 0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px; margin-right: 5px"
                      v-else-if="
                        defaultProData.content1Right04
                          .content_1Right4_rationum < 0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right04
                          .content_1Right4_rationum > 0
                          ? '#2ad86f'
                          : defaultProData.content1Right04
                              .content_1Right4_rationum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{
                      defaultProData.content1Right04.content_1Right4_rationum
                    }}
                    %
                  </div>
                </div> -->
              </div>
            </div>
            <!-- 业务活跃度 -->
            <div class="content_1-right-topcon">
              <div style="text-align: center; padding-top: 20px; color: #fff">
                <div style="font-size: 16px">
                  {{ defaultProData.content1Right05.content_1Right5_title }}
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div
                    style="font-size: 20px; margin-top: 10px; color: #a7c3ff"
                  >
                    {{ defaultProData.content1Right05.content_1Right5_num }}
                  </div>
                  <div
                    style="
                      padding-left: 10px;
                      margin-top: 10px;
                      font-size: 20px;
                    "
                  >
                    %
                  </div>
                </div>
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 12px;
                  "
                >
                  <div>
                    {{ defaultProData.content1Right05.content_1Right5_yoy }}
                  </div>
                  <div style="padding-left: 20px">
                    {{ defaultProData.content1Right05.content_1Right5_ratio }}
                  </div>
                </div> -->
                <!-- <div
                  style="
                    display: flex;
                    justify-content: center;
                    font-size: 10px;
                    padding-top: 5px;
                  "
                >
                  <div class="arrow-up">
                    <img
                      v-if="
                        defaultProData.content1Right05.content_1Right5_yoynum >
                        0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px"
                      v-else-if="
                        defaultProData.content1Right05.content_1Right5_yoynum <
                        0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right05.content_1Right5_yoynum >
                        0
                          ? '#2ad86f'
                          : defaultProData.content1Right05
                              .content_1Right5_yoynum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{ defaultProData.content1Right05.content_1Right5_yoynum }}
                    %
                  </div>
                  <div style="padding-left: 20px">
                    <img
                      v-if="
                        defaultProData.content1Right05
                          .content_1Right5_rationum > 0
                      "
                      style="height: 16px; margin-right: 5px"
                      src="../../public/images/上升箭头.png"
                      alt=""
                    />
                    <img
                      style="height: 16px; margin-right: 5px"
                      v-else-if="
                        defaultProData.content1Right05
                          .content_1Right5_rationum < 0
                      "
                      src="../../public/images/下降箭头.png"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        width: 12px;
                        padding-bottom: 3px;
                        margin-right: 5px;
                      "
                      src="../../public/images/等于箭头.png"
                      alt=""
                    />
                  </div>
                  <div
                    :style="{
                      color:
                        defaultProData.content1Right05
                          .content_1Right5_rationum > 0
                          ? '#2ad86f'
                          : defaultProData.content1Right05
                              .content_1Right5_rationum < 0
                          ? '#df0319'
                          : '#ffffff',
                    }"
                  >
                    {{
                      defaultProData.content1Right05.content_1Right5_rationum
                    }}
                    %
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="content_2">
      <!-- 标题区域 -->
      <div>
        <h3 class="content_2-tit">{{ defaultProData.content_2title }}</h3>
      </div>
      <!-- 内容区域 -->
      <div class="content_2-main">
        <!-- 滚动数字条区域 -->
        <div class="content2-number-3">
          <div class="content2-number3">
            <div>
              <div style="font-size: 12px; color: #fff; padding-top: 7px">
                {{ defaultProData.serviceUser }}
              </div>
            </div>
            <div class="scoreboard">
              <!-- <div class="digit">{{ defaultProData.serviceuserNum[0] }}</div>
              <div class="digit">{{ defaultProData.serviceuserNum[1] }}</div>
              <div class="digit">{{ defaultProData.serviceuserNum[2] }}</div>
              <div class="digit">{{ defaultProData.serviceuserNum[3] }}</div>
              <div class="digit">{{ defaultProData.serviceuserNum[4] }}</div>
              <div class="digit">{{ defaultProData.serviceuserNum[5] }}</div>
              <div class="digit">{{ defaultProData.serviceuserNum[6] }}</div>
              <div class="digit">{{ defaultProData.serviceuserNum[7] }}</div> -->
              <div
                class="digit"
                v-for="(item, index) in paddedArray1"
                :key="index"
              >
                {{ item }}
              </div>
              <div class="plus">户</div>
            </div>
          </div>
          <div class="content2-number3">
            <div>
              <div style="font-size: 12px; color: #fff; padding-top: 7px">
                {{ defaultProData.acceptingWork }}
              </div>
            </div>
            <div class="scoreboard">
              <!-- <div class="digit">{{ defaultProData.acceptingWorkNum[0] }}</div>
              <div class="digit">{{ defaultProData.acceptingWorkNum[1] }}</div>
              <div class="digit">{{ defaultProData.acceptingWorkNum[2] }}</div>
              <div class="digit">{{ defaultProData.acceptingWorkNum[3] }}</div>
              <div class="digit">{{ defaultProData.acceptingWorkNum[4] }}</div>
              <div class="digit">{{ defaultProData.acceptingWorkNum[5] }}</div>
              <div class="digit">{{ defaultProData.acceptingWorkNum[6] }}</div>
              <div class="digit">{{ defaultProData.acceptingWorkNum[7] }}</div> -->
              <div
                class="digit"
                v-for="(item, index) in paddedArray2"
                :key="index"
              >
                {{ item }}
              </div>
              <div class="plus">单</div>
            </div>
          </div>
          <div class="content2-number3">
            <div>
              <div style="font-size: 12px; color: #fff; padding-top: 7px">
                {{ defaultProData.payment }}
              </div>
            </div>
            <div class="scoreboard">
              <!-- <div class="digit">{{ defaultProData.paymentNum[0] }}</div>
              <div class="digit">{{ defaultProData.paymentNum[1] }}</div>
              <div class="digit">{{ defaultProData.paymentNum[2] }}</div>
              <div class="digit">{{ defaultProData.paymentNum[3] }}</div>
              <div class="digit">{{ defaultProData.paymentNum[4] }}</div>
              <div class="digit">{{ defaultProData.paymentNum[5] }}</div>
              <div class="digit">{{ defaultProData.paymentNum[6] }}</div>
              <div class="digit">{{ defaultProData.paymentNum[7] }}</div> -->
              <div
                class="digit"
                v-for="(item, index) in paddedArray3"
                :key="index"
              >
                {{ item }}
              </div>
              <div class="plus">笔</div>
            </div>
          </div>
        </div>
        <!-- 三个方框区域 -->
        <div class="content2-box-3">
          <div class="content2box">
            <!-- 标题区域 -->
            <div class="content2box-tit">
              <div style="color: #fff; font-size: 12px">
                {{ defaultProData.content2box }}
              </div>
              <img
                style="height: 12px"
                src="../../public/images/标题后.png"
                alt=""
              />
            </div>
            <!-- 方框区域 -->
            <div style="display: flex">
              <div class="content2box-box">
                <div style="text-align: center; padding-top: 10px; color: #fff">
                  <div style="font-size: 16px">
                    {{ defaultProData.content2boxLeft.firstName }}
                  </div>
                  <div
                    style="
                      display: flex;
                      margin-top: 10px;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <div style="font-size: 20px; color: #a7c3ff">
                      {{ roundNumber1[0].toLocaleString() }}
                    </div>
                    <div style="padding-left: 10px; font-size: 20px">
                      {{ defaultProData.content2boxLeft.sedRightNum }}
                    </div>
                  </div>
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 12px;
                    "
                  >
                    <div>{{ defaultProData.content2boxLeft.thirdLeft }}</div>
                    <div style="padding-left: 20px">
                      {{ defaultProData.content2boxLeft.thirdRight }}
                    </div>
                  </div> -->
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 10px;
                      padding-top: 5px;
                    "
                  >
                    <div class="arrow-up">
                      <img
                        v-if="defaultProData.content2boxLeft.forLeft > 0"
                        style="height: 14px;margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px"
                        v-else-if="defaultProData.content2boxLeft.forLeft < 0"
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxLeft.forLeft > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxLeft.forLeft < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxLeft.forLeft }} %
                    </div>
                    <div style="padding-left: 20px">
                      <img
                        v-if="defaultProData.content2boxLeft.forRight > 0"
                        style="height: 14px;margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px"
                        v-else-if="defaultProData.content2boxLeft.forRight < 0"
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxLeft.forRight > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxLeft.forRight < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxLeft.forRight }} %
                    </div>
                  </div> -->
                </div>
              </div>
              <div class="content2box-box" style="margin-left: 5px">
                <div style="text-align: center; padding-top: 10px; color: #fff">
                  <div style="font-size: 16px">
                    {{ defaultProData.content2boxRight.firstName2 }}
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <div
                      style="font-size: 20px; margin-top: 10px; color: #a7c3ff"
                    >
                      {{ roundNumber1[1].toLocaleString() }}
                    </div>
                    <div
                      style="
                        padding-left: 10px;
                        margin-top: 10px;
                        font-size: 20px;
                      "
                    >
                      {{ defaultProData.content2boxRight.sedRightNum2 }}
                    </div>
                  </div>
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 12px;
                    "
                  >
                    <div>{{ defaultProData.content2boxRight.thirdLeft2 }}</div>
                    <div style="padding-left: 20px">
                      {{ defaultProData.content2boxRight.thirdRight2 }}
                    </div>
                  </div> -->
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 10px;
                      padding-top: 5px;
                    "
                  >
                    <div class="arrow-up">
                      <img
                        v-if="defaultProData.content2boxRight.forLeft2 > 0"
                        style="height: 14px; margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px"
                        v-else-if="defaultProData.content2boxRight.forLeft2 < 0"
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxRight.forLeft2 > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxRight.forLeft2 < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxRight.forLeft2 }} %
                    </div>
                    <div style="padding-left: 20px">
                      <img
                        v-if="defaultProData.content2boxRight.forRight2 > 0"
                        style="height: 14px; margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px; margin-right: 5px"
                        v-else-if="
                          defaultProData.content2boxRight.forRight2 < 0
                        "
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxRight.forRight2 > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxRight.forRight2 < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxRight.forRight2 }} %
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="content2box">
            <!-- 标题区域 -->
            <div class="content2box-tit">
              <div style="color: #fff; font-size: 12px">
                {{ defaultProData.content2boxMain }}
              </div>
              <img
                style="height: 12px"
                src="../../public/images/标题后.png"
                alt=""
              />
            </div>
            <!-- 方框区域 -->
            <div style="display: flex">
              <div class="content2box-box">
                <div style="text-align: center; padding-top: 10px; color: #fff">
                  <div style="font-size: 16px">
                    {{ defaultProData.content2boxMainc.firstName }}
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      margin-top: 10px;
                      align-items: center;
                    "
                  >
                    <div style="font-size: 20px; color: #a7c3ff">
                      {{ roundNumber1[2].toLocaleString() }}
                    </div>
                    <div style="padding-left: 10px; font-size: 20px">
                      {{ defaultProData.content2boxMainc.sedRightNum }}
                    </div>
                  </div>
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 12px;
                    "
                  >
                    <div>{{ defaultProData.content2boxMainc.thirdLeft }}</div>
                    <div style="padding-left: 20px">
                      {{ defaultProData.content2boxMainc.thirdRight }}
                    </div>
                  </div> -->
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 10px;
                      padding-top: 5px;
                    "
                  >
                    <div class="arrow-up">
                      <img
                        v-if="defaultProData.content2boxMainc.forLeft > 0"
                        style="height: 14px;margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px"
                        v-else-if="defaultProData.content2boxMainc.forLeft < 0"
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxMainc.forLeft > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxMainc.forLeft < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxMainc.forLeft }} %
                    </div>
                    <div style="padding-left: 20px">
                      <img
                        v-if="defaultProData.content2boxMainc.forRight > 0"
                        style="height: 14px;margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px"
                        v-else-if="defaultProData.content2boxMainc.forRight < 0"
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxMainc.forRight > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxMainc.forRight < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxMainc.forRight }} %
                    </div>
                  </div> -->
                </div>
              </div>
              <div class="content2box-box" style="margin-left: 5px">
                <div style="text-align: center; padding-top: 10px; color: #fff">
                  <div style="font-size: 16px">
                    {{ defaultProData.content2boxMaind.firstName }}
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <div
                      style="font-size: 20px; margin-top: 10px; color: #a7c3ff"
                    >
                      {{ roundNumber1[3].toLocaleString() }}
                    </div>
                    <div
                      style="
                        padding-left: 10px;
                        margin-top: 10px;
                        font-size: 20px;
                      "
                    >
                      {{ defaultProData.content2boxMaind.sedRightNum }}
                    </div>
                  </div>
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 12px;
                    "
                  >
                    <div>{{ defaultProData.content2boxMaind.thirdLeft }}</div>
                    <div style="padding-left: 20px">
                      {{ defaultProData.content2boxMaind.thirdRight }}
                    </div>
                  </div> -->
                  <!-- <div
                    style="
                      display: flex;
                      justify-content: center;
                      font-size: 10px;
                      padding-top: 5px;
                    "
                  >
                    <div class="arrow-up">
                      <img
                        v-if="defaultProData.content2boxMaind.forLeft > 0"
                        style="height: 14px; margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px"
                        v-else-if="defaultProData.content2boxMaind.forLeft < 0"
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxMaind.forLeft > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxMaind.forLeft < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxMaind.forLeft }} %
                    </div>
                    <div style="padding-left: 20px">
                      <img
                        v-if="defaultProData.content2boxMaind.forRight > 0"
                        style="height: 14px; margin-right: 5px"
                        src="../../public/images/上升箭头.png"
                        alt=""
                      />
                      <img
                        style="height: 14px; margin-right: 5px"
                        v-else-if="defaultProData.content2boxMaind.forRight < 0"
                        src="../../public/images/下降箭头.png"
                        alt=""
                      />
                      <img
                        v-else
                        style="
                          width: 12px;
                          padding-bottom: 3px;
                          margin-right: 5px;
                        "
                        src="../../public/images/等于箭头.png"
                        alt=""
                      />
                    </div>
                    <div
                      :style="{
                        color:
                          defaultProData.content2boxMaind.forRight > 0
                            ? '#2ad86f'
                            : defaultProData.content2boxMaind.forRight < 0
                            ? '#df0319'
                            : '#ffffff',
                      }"
                    >
                      {{ defaultProData.content2boxMaind.forRight }} %
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="content2box">
            <!-- 标题区域 -->
            <div class="content2box-tit">
              <div style="color: #fff; font-size: 12px">
                {{ defaultProData.content2boxRight3 }}
              </div>
              <img
                style="height: 12px"
                src="../../public/images/标题后.png"
                alt=""
              />
            </div>
            <!-- 方框区域 -->
            <div style="display: flex">
              <div class="content2box-box">
                <div style="text-align: center; padding-top: 10px; color: #fff">
                  <div style="font-size: 16px">
                    {{ defaultProData.content2boxMain3.firstName }}
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      padding-top: 10px;
                    "
                  >
                    <div style="font-size: 20px; color: #a7c3ff">
                      {{ defaultProData.content2boxMain3.sedLeftNum }}
                    </div>
                    <div style="padding-left: 10px; font-size: 20px">
                      {{ defaultProData.content2boxMain3.sedRightNum }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="content2box-box" style="margin-left: 5px">
                <div style="text-align: center; padding-top: 10px; color: #fff">
                  <div style="font-size: 16px">
                    {{ defaultProData.content2boxMain3b.firstName }}
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      padding-top: 10px;
                    "
                  >
                    <div style="font-size: 20px; color: #a7c3ff">
                      {{ defaultProData.content2boxMain3b.sedLeftNum }}
                    </div>
                    <div style="padding-left: 10px; font-size: 20px">
                      {{ defaultProData.content2boxMain3b.sedRightNum }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- echarts区域 -->
        <div class="content2-echarts">
          <div class="content2-echarts-ma">
            <!-- 副标题 -->
            <div style="color: #fff; font-size: 10px">
              {{ defaultProData.minCharts1 }}
            </div>
            <!-- echarts -->
            <div class="echartsEare" id="main"></div>
          </div>
          <div class="content2-echarts-ma">
            <!-- 副标题 -->
            <div style="color: #fff; font-size: 10px">
              {{ defaultProData.minCharts2 }}
            </div>
            <!-- echarts -->
            <div class="echartsEare" id="main1"></div>
          </div>
          <div class="content2-echarts-ma">
            <!-- 副标题 -->
            <div style="color: #fff; font-size: 10px">
              {{ defaultProData.minCharts3 }}
            </div>
            <!-- echarts -->
            <div class="echartsEare" id="main2"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="content_3">
      <div class="content_3-left">
        <div style="margin-top: -10px">
          <h3 class="content3-title-left">{{ defaultProData.btmLeftTitle }}</h3>
        </div>
        <div class="content3-left-img">
          <!-- 两个图片区域 -->
          <div class="fleximg1">
            <img
              class="fleximg-left"
              src="../../public/images/供电.png"
              alt=""
            />
            <div class="content3imgtext" style="color: #fff">
              <div>{{ defaultProData.btmLeftTip.tit1 }}</div>
              <div class="font18">
                {{ defaultProData.btmLeftTip.tit2.toLocaleString() }}
                <span class="unit"> {{ defaultProData.btmLeftTip.tit3 }}</span>
              </div>
            </div>
          </div>
          <div class="fleximg1">
            <img
              class="fleximg-left"
              src="../../public/images/共享.png"
              alt=""
            />
            <div class="content3imgtext" style="color: #fff">
              <div>{{ defaultProData.btmLeftTip.tit4 }}</div>
              <div class="font18">
                {{ defaultProData.btmLeftTip.tit5 }}
                <span class="unit">{{ defaultProData.btmLeftTip.tit6 }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- echarts区域 -->
        <div class="content3-echarts" id="main3"></div>
      </div>
      <div class="content_3-right" style="margin-left: 5px">
        <div style="margin-top: -10px">
          <h3 class="content3-title-left">
            {{ defaultProData.btmRightTitle }}
          </h3>
        </div>
        <!-- 下部分 -->
        <div
          class="content2box-tit"
          style="margin-top: 40px; margin-left: 16px; margin-right: 16px"
        >
          <div class="tabs_bottom">
            <div
              class="hot"
              :class="active === 1 ? 'active' : ''"
              @click="handleClick(1)"
            >
              {{ defaultProData.btmRightClk1 }}
            </div>
            <div
              class="policy"
              :class="active === 2 ? 'active' : ''"
              @click="handleClick(2)"
            >
              {{ defaultProData.btmRightClk2 }}
            </div>
          </div>
          <img
            style="height: 12px"
            src="../../public/images/标题后.png"
            alt=""
          />
        </div>
        <!-- 图文 -->
        <div>
          <div class="hot_center">
            <img
              v-if="active === 1"
              class="hot_img"
              src="../../public/images/图片1.png"
              alt=""
            />
            <!-- <img
              v-if="active === 1"
              class="hot_img"
              src="../../public/images/图片1.png"
              alt=""
            /> -->
            <div style="color: #fff; margin-right: 10px">
              {{ defaultProData.btmContent1 }}
            </div>
          </div>
          <div class="hot_center">
            <img
              v-if="active === 1"
              class="hot_img"
              src="../../public/images/图片2.png"
              alt=""
            />
            <!-- <img
              v-if="active === 1"
              class="hot_img"
              src="../../public/images/图片2.png"
              alt=""
            /> -->
            <div style="color: #fff; margin-right: 10px">
              {{ defaultProData.btmContent2 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      rightMainTitle: rightJsonData.rightMainTitle,
      dropdownItems: rightJsonData.dropdownItems,
      // 省数据_默认
      defaultProData: rightJsonData.defaultData,
      // 定时相加的数
      timeNum: rightJsonData.defaultData.increments,
      incrementIndex: 0, // 当前增加值的索引
      incrementIndex2: 0, // 当前增加值的索引
      active: 1,
      value: 90.5,
      activeItem: null,
      mathNum: 0,
      state1: 0,
      state2: 0,
    };
  },
  // computed: {
  //   isPositive() {
  //     return this.yourData > 0;
  //   },
  // },
  created() {
    this.updateMyNumberBasedOnTime();
    this.updataCrsTime();
    // this.intervalId = setInterval(this.incrementWorkNum, 5000);
    this.interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();

      // this.updateGauge();
      // this.initEcharts1();
      this.initEcharts2();
      this.initEcharts3();
      // 动态数 工单数及缴费笔数
      // if (hours >= 7 && hours <= 17) {
      //   this.incrementWorkNum();
      //   this.incrementWorkNum2();
      // }
      this.updateMyNumberBasedOnTime();
    }, 5000); // 每5000毫秒更新一次
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.initCharts1();
    this.initCharts2();
    this.initCharts3();
    this.initCharts4();
    this.initCharts5();
    this.initEcharts2();
    this.initEcharts3();
    this.updataCrsTime();
    // this.startIncrementing2();
  },
  computed: {
    roundNumber1() {
      return [
        Math.round(this.defaultProData.content2boxLeft.sedLeftNum),
        Math.round(this.defaultProData.content2boxRight.sedLeftNum2),
        Math.round(this.defaultProData.content2boxMainc.sedLeftNum),
        Math.round(this.defaultProData.content2boxMaind.sedLeftNum),
      ];
    },
    // 计算属性，用于填充数组至固定长度8，不足部分用'0'填充
    // this.defaultProData.acceptingWorkNum=this.defaultProData.acceptingWorkNum.toString().split('').map(Number)
    paddedArray2() {
      const values = new Array(8).fill(0);
      const numArray = this.defaultProData.acceptingWorkNum[
        this.defaultProData.acceptingWorkNum.length - 1
      ]
        .toString()
        .split("")
        .map(Number);
      const startIndex = 8 - numArray.length;

      for (let i = 0; i < numArray.length; i++) {
        values[startIndex + i] = numArray[i];
      }
      return values;
    },
    paddedArray1() {
      const values = new Array(8).fill(0);
      const numArray = this.defaultProData.serviceuserNum[
        this.defaultProData.serviceuserNum.length - 1
      ]
        .toString()
        .split("")
        .map(Number);
      const startIndex = 8 - numArray.length;

      for (let i = 0; i < numArray.length; i++) {
        values[startIndex + i] = numArray[i];
      }
      return values;
    },
    paddedArray3() {
      const values = new Array(8).fill(0);
      const numArray = this.defaultProData.paymentNum[
        this.defaultProData.paymentNum.length - 1
      ]
        .toString()
        .split("")
        .map(Number);
      const startIndex = 8 - numArray.length;

      for (let i = 0; i < numArray.length; i++) {
        values[startIndex + i] = numArray[i];
      }
      return values;
    },
  },
  watch: {
    "defaultProData.echarts4Data4": {
      handler(newValue) {
        this.initCharts4(newValue);
      },
      deep: true,
    },
    "defaultProData.echarts1Data1": {
      handler(newValue) {
        this.initCharts1(newValue);
      },
      deep: true,
    },
    "defaultProData.echarts2Data2": {
      handler(newValue) {
        this.initCharts2(newValue);
      },
      deep: true,
    },
    "defaultProData.echarts3Data3": {
      handler(newValue) {
        this.initCharts3(newValue);
      },
      deep: true,
    },
    "defaultProData.echarts5Data5": {
      handler(newValue) {
        this.initCharts5(newValue);
      },
      deep: true,
    },
    "defaultProData.left1echartsData": {
      handler(newValue) {
        this.initEcharts3(newValue);
      },
      deep: true,
    },
    "defaultProData.echartsData": {
      handler(newValue) {
        this.initEcharts2(newValue);
      },
      deep: true,
    },
    "defaultProData.hoursValue": {
      handler(newValue) {
        this.initEcharts2(newValue);
      },
      deep: true,
    },
  },
  methods: {
    // 受理工单数
    incrementWorkNum() {
      // 获取当前数组的最后一个元素
      let currentLastNum =
        this.defaultProData.acceptingWorkNum[
          this.defaultProData.acceptingWorkNum.length - 1
        ];
      // 计算下一个增量
      const nextIncrement =
        this.defaultProData.increments2[
          this.incrementIndex2 % this.defaultProData.increments2.length
        ];
      // 计算新的值
      let newNum = currentLastNum + nextIncrement;
      // 将新的值添加到数组
      this.defaultProData.acceptingWorkNum.push(newNum);
      // 更新索引以循环增量
      this.incrementIndex2++;
    },
    // 缴费笔数
    incrementWorkNum2() {
      // 获取当前数组的最后一个元素
      let currentLastNum =
        this.defaultProData.paymentNum[
          this.defaultProData.paymentNum.length - 1
        ];
      console.log("Current last number:", currentLastNum);
      // 计算下一个增量
      const nextIncrement =
        this.defaultProData.increments[
          this.incrementIndex % this.defaultProData.increments.length
        ];
      console.log("Next increment:", this.incrementIndex);
      // 计算新的值
      let newNum = currentLastNum + nextIncrement;
      console.log("New number:", newNum);
      // 将新的值添加到数组
      this.defaultProData.paymentNum.push(newNum);
      // 更新索引以循环增量
      this.incrementIndex++;
    },
    handleCommand(command) {
      this.rightMainTitle = command;
      // console.log(rightJsonData.defaultData_jibei,"999999999999999");
      switch (command) {
        case "北京":
          this.defaultProData = rightJsonData.defaultData_beijing;
          break;

        case "天津":
          this.defaultProData = rightJsonData.defaultData_tianjin;
          break;

        case "河北":
          this.defaultProData = rightJsonData.defaultData_hebei;
          break;

        case "冀北":
          this.defaultProData = rightJsonData.defaultData_jibei;
          // console.log(this.defaultProData.content1Right05.content_1Right5_num,"77")
          break;

        case "山西":
          this.defaultProData = rightJsonData.defaultData_shanxi;
          break;

        case "山东":
          this.defaultProData = rightJsonData.defaultData_shandong;
          break;

        case "上海":
          this.defaultProData = rightJsonData.defaultData_shanghai;
          break;

        case "江苏":
          this.defaultProData = rightJsonData.defaultData_jiangsu;
          this.state2 = 1;
          break;

        case "浙江":
          this.defaultProData = rightJsonData.defaultData_zhejiang;
          this.state1 = 1;
          break;

        case "安徽":
          this.defaultProData = rightJsonData.defaultData_anhui;
          // console.log(
          //   this.defaultProData.echarts4Data4.echarts4Ya,
          //   "9999999999"
          // );
          break;

        case "湖北":
          this.defaultProData = rightJsonData.defaultData_hubei;
          break;

        case "湖南":
          this.defaultProData = rightJsonData.defaultData_hunan;
          break;

        case "河南":
          this.defaultProData = rightJsonData.defaultData_henan;
          break;

        case "江西":
          this.defaultProData = rightJsonData.defaultData_jiangxi;
          break;

        case "四川":
          this.defaultProData = rightJsonData.defaultData_sichuan;
          break;

        case "重庆":
          this.defaultProData = rightJsonData.defaultData_chongqing;
          break;

        case "辽宁":
          this.defaultProData = rightJsonData.defaultData_liaoning;
          break;

        case "吉林":
          this.defaultProData = rightJsonData.defaultData_jilin;
          break;

        case "龙江":
          this.defaultProData = rightJsonData.defaultData_longjiang;
          break;

        case "蒙东":
          this.defaultProData = rightJsonData.defaultData_mengdong;
          break;

        case "陕西":
          this.defaultProData = rightJsonData.defaultData_shanxi1;
          break;

        case "甘肃":
          this.defaultProData = rightJsonData.defaultData_gansu;
          break;

        case "青海":
          this.defaultProData = rightJsonData.defaultData_qinghai;
          break;

        case "宁夏":
          this.defaultProData = rightJsonData.defaultData_ningxia;
          break;

        case "新疆":
          this.defaultProData = rightJsonData.defaultData_xinjiang;
          break;

        case "西藏":
          this.defaultProData = rightJsonData.defaultData_xizang;
          break;

        case "福建":
          this.defaultProData = rightJsonData.defaultData_fujian;
          break;

        default:
          break;
      }
      this.activeItem = command;
    },
    highlightItem(command) {
      // 如果当前选中的选项不是当前移入的选项，则取消高亮
      if (this.activeItem !== command) {
        this.activeItem = null;
      }
    },
    handleClick(val) {
      this.active = val;
      if (this.active === 1) {
        this.defaultProData.btmContent1 = this.defaultProData.btmContent1_1;
        this.defaultProData.btmContent2 = this.defaultProData.btmContent2_1;
      } else if (this.active == 2) {
        this.defaultProData.btmContent1 = this.defaultProData.btmContent1_2;
        this.defaultProData.btmContent2 = this.defaultProData.btmContent2_2;
      }
    },
    initCharts1() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 自动获取最近12个月
      let dataArr = [];
      let data = new Date();
      data.setDate(1); // 先设置为每月的第一天
      // let currentMonth = data.getMonth(); // 获取当前月份

      for (var i = 0; i < 12; i++) {
        data.setMonth(data.getMonth() - 1); // 每次循环一次，月份值减1
        var m = data.getMonth() + 1;
        // m = m < 10 ? "0" + m : m; // 格式化月份，保持两位数字
        dataArr.push(m + "月"); // 将年份移除，并添加月份后缀“月”
      }
      let arrReverse = dataArr.reverse();
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {},
        grid: {
          top: "30",
          left: "0",
          right: "15",
          bottom: "20",
          containLabel: true,
        },
        xAxis: {
          data: arrReverse,
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
          axisTick: {
            // 显示刻度
            show: false,
          },
        },
        yAxis: {
          min: 0,
          // max: 5000,
          splitNumber: 4,
          name: this.defaultProData.echarts1Data1.echarts1Unit,
          nameTextStyle: {
            // 单位的样式
            color: "#fff",
            fontSize: 10,
            // nameLocation:"start",
            padding: [0, -7, -5, -12],
          },
          // interval: 1000,
          splitLine: {
            show: true,
            lineStyle: {
              // 网格线的样式
              color: "#10244e", // 网格线的颜色
              type: "solid", // 网格线的类型，可以是 'solid', 'dashed', 或 'dotted'
              width: 1, // 设置网格线的宽度
            },
          },
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.defaultProData.echarts1Data1.echarts1Ya,
            barWidth: 10,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#0a407b", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#157fe2", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              type: "dashed", // 将线条设置为虚线
            },
          },
        ],
      });
    },
    initCharts2() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main1"));
      let dataArr = [];
      let data = new Date();
      data.setDate(1); // 先设置为每月的第一天
      // let currentMonth = data.getMonth(); // 获取当前月份

      for (var i = 0; i < 12; i++) {
        data.setMonth(data.getMonth() - 1); // 每次循环一次，月份值减1
        var m = data.getMonth() + 1;
        // m = m < 10 ? "0" + m : m; // 格式化月份，保持两位数字
        dataArr.push(m + "月"); // 将年份移除，并添加月份后缀“月”
      }
      let arrReverse = dataArr.reverse();
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {},
        grid: {
          top: "30",
          left: "0",
          right: "15",
          bottom: "20",
          containLabel: true,
        },
        xAxis: {
          data: arrReverse,
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
          axisTick: {
            // 显示刻度
            show: false,
          },
        },
        yAxis: {
          type: "value",
          splitNumber: 4,
          name: this.defaultProData.echarts2Data2.echarts2Unit,
          nameTextStyle: {
            // 单位的样式
            color: "#fff",
            fontSize: 10,
            // nameLocation:"start",
            padding: [0, -7, -5, -12],
          },
          min: 0,
          // max: 5000,
          // interval: 1000,
          splitLine: {
            show: true,
            lineStyle: {
              // 网格线的样式
              color: "#10244e", // 网格线的颜色
              type: "solid", // 网格线的类型，可以是 'solid', 'dashed', 或 'dotted'
              width: 1, // 设置网格线的宽度
            },
          },
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.defaultProData.echarts2Data2.echarts2Ya,
            barWidth: 10,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#0a407b", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#157fe2", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              type: "dashed", // 将线条设置为虚线
            },
          },
        ],
      });
    },
    initCharts3() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main2"));
      // 自动获取近7天
      let dates = new Array(7)
        .fill(0)
        .map((_, idx) => {
          let date = new Date(
            new Date().getTime() - idx * (24 * 60 * 60 * 1000)
          );
          let month = date.getMonth() + 1;
          let day = date.getDate() - 1;
          return `${month}月${day}日`;
        })
        .reverse();
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {},
        grid: {
          top: "30",
          left: "0",
          right: "15",
          bottom: "20",
          containLabel: true,
        },
        xAxis: {
          data: dates,
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
          axisTick: {
            // 显示刻度
            show: false,
          },
        },
        yAxis: {
          type: "value",
          splitNumber: 4,
          name: this.defaultProData.echarts3Data3.echarts3Unit,
          nameTextStyle: {
            // 单位的样式
            color: "#fff",
            fontSize: 10,
            // nameLocation:"start",
            padding: [0, -7, -5, -12],
          },
          min: 0,
          // max: 5000,
          // interval: 1000,
          splitLine: {
            show: true,
            lineStyle: {
              // 网格线的样式
              color: "#10244e", // 网格线的颜色
              type: "solid", // 网格线的类型，可以是 'solid', 'dashed', 或 'dotted'
              width: 1, // 设置网格线的宽度
            },
          },
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.defaultProData.echarts3Data3.echarts3Ya,
            barWidth: 22,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#0a407b", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#157fe2", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              type: "dashed", // 将线条设置为虚线
            },
          },
        ],
      });
    },
    initCharts4() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main3"));
      // 自动获取近7天
      let dates = new Array(7)
        .fill(0)
        .map((_, idx) => {
          let date = new Date(
            new Date().getTime() - idx * (24 * 60 * 60 * 1000)
          );
          let month = date.getMonth() + 1;
          let day = date.getDate() - 1;
          return `${month}月${day}日`;
        })
        .reverse();
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.defaultProData.echarts4Data4.echarts4Title,
          top: "-3px",
          left: "-3px",
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        tooltip: {},
        grid: {
          top: "43",
          left: "0",
          right: "15",
          bottom: "20",
          containLabel: true,
        },
        xAxis: {
          data: dates,
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
          axisTick: {
            // 显示刻度
            show: false,
          },
        },
        yAxis: {
          type: "value",
          splitNumber: 4,
          name: this.defaultProData.echarts4Data4.echarts4Unit,
          nameTextStyle: {
            // 单位的样式
            color: "#fff",
            fontSize: 10,
            // nameLocation:"start",
            padding: [0, 0, -5, -12],
          },
          min: 0,
          // max: 4000,
          // interval: 1000,
          splitLine: {
            show: true,
            lineStyle: {
              // 网格线的样式
              color: "#10244e", // 网格线的颜色
              type: "solid", // 网格线的类型，可以是 'solid', 'dashed', 或 'dotted'
              width: 1, // 设置网格线的宽度
            },
          },
          axisLabel: {
            interval: 0, // 设置标签全部显示
            textStyle: {
              color: "#fffefd",
              fontSize: 12,
              fontWeight: 400,
            },
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.defaultProData.echarts4Data4.echarts4Ya,
            barWidth: 30,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#0a407b", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#157fe2", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              type: "dashed", // 将线条设置为虚线
            },
          },
        ],
      });
    },
    initCharts5() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main7"));
      // 绘制图表
      myChart.setOption({
        // backgroundColor: '#394056',
        title: {
          text: this.defaultProData.echarts5Data5.echarts5Title,
          textStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#F1F1F3",
          },
          left: "1%",
          top: "-3%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B",
            },
          },
        },
        legend: {
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: this.defaultProData.echarts5Data5.echarts5Legned,
          right: "0%",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3",
          },
        },
        grid: {
          top: "38",
          left: "10",
          right: "4%",
          bottom: "0",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            interval: 1,
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color: "#fffefd",
                fontSize: 12,
                fontWeight: 400,
              },
            },
            data: this.defaultProData.echarts5Data5.echarts5Xa,
          },
          {
            axisPointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisTick: {
              show: false,
            },

            position: "bottom",
            offset: 20,
          },
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 4,
            name: this.defaultProData.echarts5Data5.echarts5Unit,
            nameTextStyle: {
              color: "#fff",
              fontSize: 10,
              padding: [0, 0, -7, -12],
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color: "#fffefd",
                fontSize: 12,
                fontWeight: 400,
              },
            },
            splitLine: {
              lineStyle: {
                // 网格线的样式
                color: "#10244e", // 网格线的颜色
                type: "solid", // 网格线的类型，可以是 'solid', 'dashed', 或 'dotted'
                width: 1, // 设置网格线的宽度
              },
            },
          },
        ],
        series: [
          {
            name: this.defaultProData.echarts5Data5.echarts5SeName1,
            type: "line",
            smooth: true,
            symbol: "circle",
            z: 5,
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#1d80da",
                    },
                    {
                      offset: 1,
                      color: "#2291e3",
                    },
                  ],
                  false
                ),
                shadowColor: "#00113d",
                shadowBlur: 20,
              },
            },
            itemStyle: {
              normal: {
                // opacity: 0.5,
                color: "#1d80db",
                borderColor: "#1d80db",
                borderWidth: 12,
              },
            },
            data: this.defaultProData.echarts5Data5.echarts5SeData1,
          },
          {
            name: this.defaultProData.echarts5Data5.echarts5SeName2,
            type: "line",
            z: 4,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#02f4ff ",
                    },
                    {
                      offset: 1,
                      color: "#91e3f7",
                    },
                  ],
                  false
                ),
                shadowColor: "#00113d",
                shadowBlur: 20,
              },
            },
            itemStyle: {
              normal: {
                // opacity: 0.5,
                color: "#02f4ff",
                borderColor: "#02f4ff",
                borderWidth: 12,
              },
            },
            data: this.defaultProData.echarts5Data5.echarts5SeData2,
          },
          {
            name: this.defaultProData.echarts5Data5.echarts5SeName3,
            type: "line",
            z: 3,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#e3bc2d ",
                    },
                    {
                      offset: 1,
                      color: "#ffd800",
                    },
                  ],
                  false
                ),
                shadowColor: "#00113d",
                shadowBlur: 20,
              },
            },
            itemStyle: {
              normal: {
                // opacity: 0.5,
                color: "#e0bc2d",
                borderColor: "#e0bc2d",
                borderWidth: 12,
              },
            },
            data: this.defaultProData.echarts5Data5.echarts5SeData3,
          },
          {
            name: this.defaultProData.echarts5Data5.echarts5SeName4,
            type: "line",
            z: 2,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#ffa530",
                    },
                    {
                      offset: 1,
                      color: "#2291e3",
                    },
                  ],
                  false
                ),
                shadowColor: "#00113d",
                shadowBlur: 20,
              },
            },
            itemStyle: {
              normal: {
                // opacity: 0.5,
                color: "#ffa431",
                borderColor: "#ffa431",
                borderWidth: 12,
              },
            },
            data: this.defaultProData.echarts5Data5.echarts5SeData4,
          },
          {
            name: this.defaultProData.echarts5Data5.echarts5SeName5,
            type: "line",
            z: 1,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#3c00ff ",
                    },
                    {
                      offset: 1,
                      color: "#3c00ff",
                    },
                  ],
                  false
                ),
                shadowColor: "#00113d",
                shadowBlur: 20,
              },
            },
            itemStyle: {
              normal: {
                // opacity: 0.5,
                color: "#3c01fe",
                borderColor: "#3c01fe",
                borderWidth: 12,
              },
            },
            data: this.defaultProData.echarts5Data5.echarts5SeData5,
          },
        ],
      });
    },
    initEcharts2() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main6"));
      // 绘制图表
      const value = this.defaultProData.echartsData;
      myChart.setOption({
        angleAxis: {
          show: false,
          max: (100 * 360) / 180, //-45度到225度，二者偏移值是270度除360度
          type: "value",
          startAngle: 180, //极坐标初始角度
          splitLine: {
            show: false,
          },
        },
        barMaxWidth: 10, //圆环宽度
        radiusAxis: {
          show: false,
          type: "category",
        },
        //圆环位置和大小
        polar: {
          center: ["50%", "69%"],
          radius: "180%",
        },
        graphic: [
          {
            type: "text",
            z: 100,
            left: "77%", // 文本水平居中
            top: "15%", // 文本距离顶部的距离，可以根据需要调整
            style: {
              fill: "#fff", // 文本颜色
              text: this.defaultProData.responseTime, // 文本内容
              fontSize: 16, // 文本样式
            },
          },
          {
            type: "text",
            left: "38%", // 水平位置，可以是百分比或者具体像素值
            top: "77%", // 垂直位置，根据实际仪表盘的尺寸调整
            style: {
              text: this.defaultProData.left2minValue, // 显示的文本
              textAlign: "center", // 文本对齐方式
              fill: "#fff", // 文本颜色
              fontSize: 12, // 字体大小
            },
          },
          {
            type: "text",
            left: "57%", // 水平位置，同上
            top: "77%", // 垂直位置，同上，需根据仪表盘实际情况调整
            style: {
              text: this.defaultProData.left2maxValue, // 显示的文本
              textAlign: "center", // 文本对齐方式
              fill: "#fff", // 文本颜色
              fontSize: 12, // 字体大小
            },
          },
          {
            type: "text",
            left: "49%", // 水平位置，同上
            top: "75%", // 垂直位置，同上，需根据仪表盘实际情况调整
            style: {
              text: "次", // 显示的文本
              textAlign: "center", // 文本对齐方式
              fill: "#fff", // 文本颜色
              fontSize: 14, // 字体大小
            },
          },
        ],
        series: [
          {
            //下层圆环，显示最大值
            type: "bar",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: {
                    //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1, //从左到右 0-1
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgb(11,255,0)",
                      },
                      {
                        offset: 0.5,
                        color: "rgb(239,255,0)",
                      },
                      {
                        offset: 0.7,
                        color: "rgb(239,255,0)",
                      },
                      {
                        offset: 1,
                        color: "#f00",
                      },
                    ],
                  },
                },
              },
            ],
            barGap: "-100%",
            coordinateSystem: "polar",
            roundCap: true,
            z: 1,
          },
          {
            type: "gauge",
            radius: "100%",
            center: ["50%", "70%"],
            splitNumber: 10, //刻度数量
            startAngle: 180,
            endAngle: 0,
            max: this.defaultProData.left2maxValue,
            min: this.defaultProData.left2minValue,
            axisLine: {
              show: false,
            },
            //分隔线样式。
            splitLine: {
              show: true,
              length: 10, // 分隔线的长度
              lineStyle: {
                color: "rgba(255, 255, 255, 0.5)", // 分隔线颜色
                width: 1, // 分隔线宽度
              },
            },
            axisLabel: {
              show: true,
              fontSize: 10,
              distance: -37,

              color: "fff",
              formatter: function (value) {
                return value.toFixed(0); // 格式化显示整数值
              },
              // value < 450
              //   ? "rgb(11,255,0)"
              //   : value < 800
              //   ? "rgb(239,255,0)"
              //   : "#f00",
              // //formatter: function (params) {
              //   if (parseInt(params) === value) {
              //     // 使用严格比较确保类型和值都相等
              //     return ""; // 返回空字符串使得当前值不显示
              //   } else {
              //     return ""; // 其他刻度也返回空字符串
              //   }
              // },
            },
            axisTick: {
              show: true,
              splitNumber: 5, // 每个分割段内的刻度数
              length: 5, // 刻度的长度
              lineStyle: {
                color: "rgba(255, 255, 255, 0.5)", // 刻度的颜色
                width: 1, // 刻度的宽度
              },
            },
            pointer: {
              show: true,
              length: "90%",
              width: 2, // 可以增加宽度以使指针更明显
              itemStyle: {
                color: "auto", // 这将自动选择与仪表盘相匹配的颜色
                shadowBlur: 0,
                shadowColor: "#fff",
              },
            },
            itemStyle: {
              // 仪表盘指针样式
              color: "#fff", // 指针颜色，默认(auto)取数值所在的区间的颜色
              opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
              borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
              borderType: "solid", // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
              borderColor: "#000", // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
              shadowBlur: 1, // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
              shadowColor: "#fff", // 阴影颜色。支持的格式同color。
            },
            //仪表盘详情，用于显示数据。
            detail: {
              show: true,
              offsetCenter: ["250%", "-45%"], // 调整文本标签的位置
              // borderColor:
              //   value < 3.5
              //     ? "rgb(11,255,0)"
              //     : value < 8
              //     ? "rgb(239,255,0)"
              //     : "#f00",
              // width: 6, // 圆圈的宽度
              // height: 6, // 圆圈的高度
              // borderRadius: 6,
              // backgroundColor:
              //   value < 3.5
              //     ? "rgb(11,255,0)"
              //     : value < 8
              //     ? "rgb(239,255,0)"
              //     : "#f00",
              // borderWidth: 1,
              textStyle: {
                fontSize: 20,
                color: "#fff",
              },
              formatter: () => {
                return value + "";
              },
            },
            data: [
              {
                value: value,
              },
            ],
            markPoint: {
              animation: false,
              silent: true,
              data: [
                {
                  x: "50%",
                  y: "70%",
                  symbol: "circle",
                  symbolSize: 8,
                  itemStyle: {
                    color: "#8280bc",
                  },
                },
              ],
            },
          },
        ],
      });
    },
    initEcharts3() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main5"));
      // 绘制图表
      const value = this.defaultProData.echartsValue;
      myChart.setOption({
        angleAxis: {
          show: false,
          max: (100 * 360) / 180, //-45度到225度，二者偏移值是270度除360度
          type: "value",
          startAngle: 180, //极坐标初始角度
          // endAngle: 0,
          splitLine: {
            show: false,
          },
        },
        barMaxWidth: 10, //圆环宽度
        radiusAxis: {
          show: false,
          type: "category",
        },
        //圆环位置和大小
        polar: {
          center: ["50%", "69%"],
          radius: "180%",
        },
        graphic: [
          // 正常 绿色
          {
            type: "text",
            z: 100,
            left: "center", // x position, 'center' for automatic horizontal align
            top: "77%", //11,255,0, rgb(11,255,0)r' for automatic vertical align
            left: "27%",
            style: {
              fill: "#f00",
              text: this.defaultProData.left1echartsData.state2,
              font: "bold 12px Microsoft YaHei",
            },
          },
          // 警告 黄色
          {
            type: "text",
            z: 100,
            left: "center", // Change to more specific positioning if necessary
            top: "6%", // Adjust position based on the actual circle location
            style: {
              fill: "rgb(239,255,0)",
              text: this.defaultProData.left1echartsData.state1,
              font: "bold 12px Microsoft YaHei",
            },
          },
          // 异常 红色
          {
            type: "text",
            z: 100,
            // left: 'center', // Change to more specific positioning if necessary
            top: "77%", // Adjust position based on the actual circle location
            left: "62%",
            style: {
              fill: "rgb(11,255,0)",
              text: this.defaultProData.left1echartsData.state3,
              font: "bold 12px Microsoft YaHei",
            },
          },
          {
            type: "text",
            z: 100,
            left: "72%", // 文本水平居中
            top: "15%", // 文本距离顶部的距离，可以根据需要调整
            style: {
              fill: "#fff", // 文本颜色
              text: this.defaultProData.left1echartsData.explainState, // 文本内容
              fontSize: 16, // 文本样式
            },
          },
          {
            type: "text",
            left: "48%", // 水平位置，同上
            top: "77%", // 垂直位置，同上，需根据仪表盘实际情况调整
            style: {
              text: "%", // 显示的文本
              textAlign: "center", // 文本对齐方式
              fill: "#fff", // 文本颜色
              fontSize: 14, // 字体大小
            },
          },
        ],
        series: [
          {
            //下层圆环，显示最大值
            type: "bar",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: {
                    //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1, //从左到右 0-1
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#f00",
                      },
                      {
                        offset: 0.3,
                        color: "rgb(239,255,0)",
                      },
                      {
                        offset: 0.6,
                        color: "rgb(239,255,0)",
                      },
                      {
                        offset: 1,
                        color: "rgb(11,255,0)",
                      },
                    ],
                  },
                },
              },
            ],
            barGap: "-100%",
            coordinateSystem: "polar",
            roundCap: true,
            z: 1,
          },
          {
            type: "gauge",
            radius: "100%",
            center: ["50%", "70%"],
            splitNumber: 10, //刻度数量
            startAngle: 180,
            endAngle: 0,
            max: this.defaultProData.left1echartsData.left1Max,
            min: this.defaultProData.left1echartsData.left1Min,
            axisLine: {
              show: false,
            },
            //分隔线样式。
            splitLine: {
              show: true,
              length: 10, // 分隔线的长度
              lineStyle: {
                color: "rgba(255, 255, 255, 0.5)", // 分隔线颜色
                width: 1, // 分隔线宽度
              },
            },
            axisLabel: {
              // show: true,
              // fontSize: 24,
              // distance: -112,
              // // 11,255,0 239,255,0
              // color:
              //   value < 35
              //     ? "rgb(11,255,0)"
              //     : value < 80
              //     ? "rgb(239,255,0)"
              //     : "#f00",
              // formatter: function (params) {
              //   if (parseInt(params) === value) {
              //     // 使用严格比较确保类型和值都相等
              //     return ""; // 返回空字符串使得当前值不显示
              //   } else {
              //     return ""; // 其他刻度也返回空字符串
              //   }
              // },
              show: true,
              fontSize: 10,
              distance: -37,

              color: "fff",
              // formatter: function (value) {
              //   return value.toFixed(0); // 格式化显示整数值
              // },
              formatter: function (value, index) {
                // 计算当前值占最大值的比例
                var percentage = value / 100;
                if (Math.abs(percentage - 0.5) < 0.01) {
                  // 如果接近50%，则不显示
                  return "";
                } else {
                  return value.toFixed(0); // 否则显示整数值
                }
              },
            },
            axisTick: {
              show: true,
              splitNumber: 5, // 每个分割段内的刻度数
              length: 5, // 刻度的长度
              lineStyle: {
                color: "rgba(255, 255, 255, 0.5)", // 刻度的颜色
                width: 1, // 刻度的宽度
              },
            },
            pointer: {
              show: true,
              length: "90%",
              width: 2, // 可以增加宽度以使指针更明显
              itemStyle: {
                color: "auto", // 这将自动选择与仪表盘相匹配的颜色
                shadowBlur: 0,
                shadowColor: "#fff",
              },
            },
            itemStyle: {
              // 仪表盘指针样式
              color: "#fff", // 指针颜色，默认(auto)取数值所在的区间的颜色
              opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
              borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
              borderType: "solid", // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
              borderColor: "#000", // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
              shadowBlur: 1, // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
              shadowColor: "#fff", // 阴影颜色。支持的格式同color。rgb(11,255,0) #f00
            },
            //仪表盘详情，用于显示数据。
            detail: {
              show: true,
              offsetCenter: ["235%", "-50%"], // 调整文本标签的位置
              borderColor:
                value < 35
                  ? "#f00"
                  : value < 80
                  ? "rgb(239,255,0)"
                  : "rgb(11,255,0)",
              width: 6, // 圆圈的宽度
              height: 6, // 圆圈的高度
              borderRadius: 6,
              backgroundColor:
                value < 35
                  ? "#f00"
                  : value < 80
                  ? "rgb(239,255,0)"
                  : "rgb(11,255,0)",
              borderWidth: 1,
              // textStyle: {
              //   fontSize: 20,
              //   color:
              //     value < 35
              //       ? "rgb(11,255,0)"
              //       : value < 80
              //       ? "rgb(239,255,0)"
              //       : "#f00",
              // },
              formatter: () => {
                return "";
              },
            },
            data: [
              {
                value: value,
              },
            ],
            markPoint: {
              animation: false,
              silent: true,
              data: [
                {
                  x: "50%",
                  y: "70%",
                  symbol: "circle",
                  symbolSize: 8,
                  itemStyle: {
                    color: "#8280bc",
                  },
                },
              ],
            },
          },
        ],
      });
    },
    updateGauge() {
      // const min = 320;
      // const max = 400;
      // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      // this.defaultProData.echartsData = randomNumber;
      // this.value = Math.floor(Math.random() * 101); // 生成0到10的随机整数
      // 生成0到10的随机整数
    },
    getRandomNumberBasedOnRange(xx) {
      let min, max;
      if (this.mathNum === 1) {
        return 1;
      } else if (this.mathNum >= 2 && this.mathNum <= 10) {
        min = this.mathNum - 1;
        max = this.mathNum + 1;
      } else if (this.mathNum >= 11 && this.mathNum <= 99) {
        min = this.mathNum - 5;
        max = this.mathNum + 5;
      } else if (this.mathNum >= 100 && this.mathNum <= 999) {
        min = this.mathNum - 10;
        max = this.mathNum + 10;
      } else if (this.mathNum >= 1000) {
        min = this.mathNum - 20;
        max = this.mathNum + 20;
      } else {
        return null; // 或者任何合理的默认值或错误处理
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    updateMyNumberBasedOnTime() {
      const hour = new Date().getHours(); // 获取当前小时数
      const baseValue = this.defaultProData.hoursValue;
      switch (hour) {
        case 0:
          this.mathNum = baseValue[0];
          break;
        case 1:
          this.mathNum = baseValue[1];
          break;
        case 2:
          this.mathNum = baseValue[2];
          break;
        case 3:
          this.mathNum = baseValue[3];
          break;
        case 4:
          this.mathNum = baseValue[4];
          break;
        case 5:
          this.mathNum = baseValue[5];
          break;
        case 6:
          this.mathNum = baseValue[6];
          break;
        case 7:
          this.mathNum = baseValue[7];
          break;
        case 8:
          this.mathNum = baseValue[8];
          break;
        case 9:
          this.mathNum = baseValue[9];
          break;
        case 10:
          this.mathNum = baseValue[10];
          break;
        case 11:
          this.mathNum = baseValue[11];
          break;
        case 12:
          this.mathNum = baseValue[12];
          break;
        case 13:
          this.mathNum = baseValue[13];
          break;
        case 14:
          this.mathNum = baseValue[14];
          break;
        case 15:
          this.mathNum = baseValue[15];
          break;
        case 16:
          this.mathNum = baseValue[16];
          break;
        case 17:
          this.mathNum = baseValue[17];
          break;
        case 18:
          this.mathNum = baseValue[18];
          break;
        case 19:
          this.mathNum = baseValue[19];
          break;
        case 20:
          this.mathNum = baseValue[20];
          break;
        case 21:
          this.mathNum = baseValue[21];
          break;
        case 22:
          this.mathNum = baseValue[22];
          break;
        case 23:
          this.mathNum = baseValue[23];
          break;

        default:
      }
      // this.defaultProData.echartsData = this.getRandomNumberBasedOnRange(
      //   this.mathNum
      // );
      this.defaultProData.echartsData = this.mathNum;
    },
    // 处理受理工单数逻辑
    updataCrsTime() {
      const hour = new Date().getHours(); // 获取当前小时数
      const minute = new Date().getMinutes(); // 获取当前分钟数
      const timeCode = `${hour}:${minute < 30 ? "00" : "30"}`; // 将时间转换为代码，分为00和30分钟两个区块
      const startHour = 7;
      const endHour = 17;

      // 确保在7:00到17:30的时间内进行处理
      if (
        hour >= startHour &&
        (hour < endHour || (hour === endHour && minute < 30))
      ) {
        // 计算当前时间与起始时间之间的半小时块的数量
        const index = (hour - startHour) * 2 + (minute >= 30 ? 1 : 0);
        // 验证index是否在increHourValues的索引范围内
        if (index < this.defaultProData.increHourValues.length) {
          this.defaultProData.acceptingWorkNum[0] =
            this.defaultProData.increHourValues[index];
          this.defaultProData.paymentNum[0] =
            this.defaultProData.payHourValues[index];
        }
      }
    },
  },
};
</script>

<style scoped>
.active1 {
  color: #4177b7 !important;
}
.el-dropdown-menu__item:hover {
  background-color: transparent !important;
}
/* .centered-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */
.grid-dropdown-menu {
  background-color: #011339; /* 背景色 */
  border: none;
}
.grid-dropdown-menu .el-dropdown-menu__item {
  text-align: center;
  font-size: 10px;
  padding: 0;
  /* width: 10px; */
  height: 20px;
  line-height: 20px;
}

.grid-dropdown-menu .el-row {
  flex-wrap: nowrap;
}

.grid-dropdown-menu .el-col {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}

/* 这里的宽度根据实际情况调整 */
.el-dropdown-menu {
  width: 140px !important;
  height: 90px !important;
  display: flex;
  flex-wrap: wrap;
}

.el-dropdown-menu__item {
  flex: 0 0 20%;
  box-sizing: border-box;
  text-align: center;
  white-space: nowrap;
  color: #fff;
}
/* .el-dropdown-menu__item:hover {
  background-color: #f0f0f0; 
  width: 10px;
  height: 10px;
} */
.el-dropdown-link {
  display: block;
  margin-bottom: -8px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
}
.header-container {
  display: flex;
  align-items: center;
  height: 20px;
}
.title-and-dropdown {
  display: flex;
  align-items: center;
  /* 如果你需要标题和下拉框之间有间隔 */
  /* gap: 10px; */
}
/* .dropdown-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
} */
.echartsleft-tit {
  color: #fff;
  display: block;
}
.content-left-echarts {
  display: flex;
}
.left1-echarts {
  flex: 50%;
  height: 120px;
  /* background-color: forestgreen; */
}
.content-lefttop-echarts {
  margin-top: 3px;
  height: 122px;
}

.scoreboard {
  display: flex;
  margin-top: 5px;
}

.digit {
  color: #fff;
  font-size: 16px;
  width: 40px;
  text-align: center;
  background-image: linear-gradient(to bottom right, #044966, #05092e);
  /* box-shadow: 0 0 10px #044966; */
  margin-left: 5px;
}

.plus {
  color: #01d6e3;
  margin-left: 5px;
}
.arrow-up {
  margin-right: 5px;
  /* width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid green; */
}
.leftImg {
  text-align: center;
  margin-left: 23%;
  width: 100%;
  height: 12px;
}
.leftTitle {
  font-size: 20px;
  color: #ffffff;
  margin-top: 13%;
  margin-left: -427%;
  padding-right: 10px;
}
.content1-title {
  height: 10px;
  color: #ffffff;
  font-size: 20px;
  padding-top: 7px;
  margin-left: 1%;
}
.content_1 {
  width: 100%;
  height: 300px;
  /* background-color: skyblue; */
  /* display: flex; */
  background-image: url("../../public/images/右侧 - 原.png");
  background-size: 100% 300px;
}
.content1-main {
  display: flex;
  height: 250px;
  /* background-color:red; */
}
.content_1-left {
  flex: 50%;
  /* background-color: forestgreen; */
  margin: 5px;
  box-sizing: border-box;
}
.content_1-right {
  flex: 50%;
  /* background-color: lightcoral; */
  /* margin: 5px; */
  margin-bottom: 5px;
  margin-right: 5px;
  box-sizing: border-box;
}
.content_1-right-top {
  display: flex;
  height: 50%;
  margin-right: 12px;
  /* background-color: wheat; */
}
.content_1-right-topcon {
  background-image: url("../../public/images/系统运营监测.png");
  background-size: 100% 120px;
  width: 100%;
  height: 120px;
  margin-right: 5px;
  margin-top: 5px;
}
.content_1-right-bot {
  display: flex;
  height: 50%;
  margin-right: 12px;
}

.content_2 {
  width: 100%;
  height: 400px;
  /* background-color: hotpink; */
  background-image: url("../../public/images/外边框2.png");
  background-size: 100% 400px;
  /* margin: 5px 0; */
  margin-bottom: 5px;
}
.content_2-tit {
  height: 0px;
  color: #ffffff;
  font-size: 20px;
  padding-top: 7px;
  margin-left: 1%;
}
.content_2-main {
  height: 345px;
  margin: 0 5px;
}
.content2-number-3 {
  display: flex;
  height: 44px;
  justify-content: space-around;
}
.content2-number3 {
  display: flex;
  padding-top: 8px;
  flex: 33%;
  padding-left: 5px;
  padding-bottom: 5px;
}
.content2-box-3 {
  display: flex;
  justify-content: space-around;
  height: 100px;
}
.content2box-tit {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
  border-bottom: 1px solid #3e4b6c;
}
.content2box {
  flex: 33%;
  padding-left: 5px;
}
.content2box-box {
  flex: 50%;
  height: 90px;
  background-image: url("../../public/images/系统运营监测.png");
  background-size: 100% 90px;
}
.content2-echarts {
  display: flex;
  padding-top: 20px;
  height: 200px;
  width: 100%;
  margin-left: 5px;
}
.echartsEare {
  width: 100%;
  height: 200px;
}
.content2-echarts-ma {
  width: 100%;
  height: 230px;
  flex: 33%;
}
.content_3 {
  width: 100%;
  height: 275px;
  /* background-color: yellowgreen; */
  display: flex;
  /* padding-top: 5px; */
}
.content_3-left {
  flex: 50%;
  /* background-color: orangered; */
  background-image: url("../../public/images/右下边框.png");
  background-size: 100% 275px;
  height: 275px;
}
.content_3-right {
  flex: 50%;
  /* background-color: rebeccapurple; */
  background-image: url("../../public/images/右下边框.png");
  background-size: 100% 275px;
}
.content3-title-left {
  height: 0px;
  color: #ffffff;
  font-size: 20px;
  /* padding-top: 0px; */
  margin-left: 2%;
}
.content3-left-img {
  display: flex;
}
.content3-echarts {
  margin-top: 10px;
  height: 160px;
  margin-left: 10px;
}
.content3imgtext {
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-left: 10px;
}
.fleximg1 {
  display: flex;
  text-align: center;
  width: 49%;
  justify-content: center;
  margin-top: 20px;
}
.fleximg-left {
  width: 60px;
  height: 60px;
}
.unit {
  font-size: 12px;
}
.tabs_bottom {
  display: flex;
}
.hot {
  margin-right: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
}
.policy {
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}
.hot_center {
  display: flex;
  margin-top: 20px;
  margin-left: 16px;
}
.hot_img {
  border-radius: 8px;
  width: 10%;
  /* height: 20%; */
  /* height: 70px; */
  margin-right: 20px;
}
.active {
  color: #9fbaf6;
}
</style>
