const rightJsonData = {
    // 右侧主标题默认展示
    rightMainTitle: "福建",
    // 省份容器_主要
    dropdownItems: [
        { name: "北京", command: "北京", disabled: false },
        { name: "天津", command: "天津", disabled: false },
        { name: "河北", command: "河北", disabled: false },
        { name: "冀北", command: "冀北", disabled: false },
        { name: "山西", command: "山西", disabled: false },
        { name: "山东", command: "山东", disabled: false },
        { name: "上海", command: "上海", disabled: false },
        { name: "江苏", command: "江苏", disabled: false },
        { name: "浙江", command: "浙江", disabled: false },
        { name: "安徽", command: "安徽", disabled: false },
        { name: "福建", command: "福建", disabled: false },
        { name: "湖北", command: "湖北", disabled: false },
        { name: "湖南", command: "湖南", disabled: false },
        { name: "河南", command: "河南", disabled: false },
        { name: "江西", command: "江西", disabled: false },
        { name: "四川", command: "四川", disabled: true },
        { name: "重庆", command: "重庆", disabled: false },
        { name: "辽宁", command: "辽宁", disabled: false },
        { name: "吉林", command: "吉林", disabled: true },
        { name: "龙江", command: "龙江", disabled: true },
        { name: "蒙东", command: "蒙东", disabled: false },
        { name: "陕西", command: "陕西", disabled: true },
        { name: "甘肃", command: "甘肃", disabled: false },
        { name: "青海", command: "青海", disabled: false },
        { name: "宁夏", command: "宁夏", disabled: false },
        { name: "新疆", command: "新疆", disabled: true },
        { name: "西藏", command: "西藏", disabled: true },
    ],
    // 默认数据_福建_展示的数据为default换数据改名
    defaultData: {
        increments2: [1, 0, 1, 1, 0],  // 增加的值数组_适用于受理工单数
        increments: [159, 130, 165, 123, 168],  // 增加的值数组_适用于缴费笔数
        // 受理工单数的变化范围
        increHourValues:[1058,1058,1058,1058,1058,1058,1058,1058,1058,1058,1058,1058,
            1058,1058,1058,1058,1058,1058,1058,1058,1058,1058],
        // 缴费笔数变化范围
        payHourValues:[1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,
            1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,
            1145084,1145084],
        // 响应时长每小时
        hoursValue: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],

        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "用户活跃度",
            content_1Right1_num: "89.41",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.00",
            content_1Right1_rationum: "6.17",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "菜单活跃度",
            content_1Right2_num: "94.72",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.00",
            content_1Right2_rationum: "3.98",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "标准编码一致率",
            content_1Right3_num: "99.57",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.00",
            content_1Right3_rationum: "0.07",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "数据模型一致率",
            content_1Right4_num: "99.69",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.00",
            content_1Right4_rationum: "0.22",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "流程定义一致率",
            content_1Right5_num: "88.44",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "0.00",
            content_1Right5_rationum: "0.19",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [22355900],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [1058],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [1145084],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "年累计并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "月新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "-0.45",
            forRight2: "-0.46",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "年累计申请容量",
            sedLeftNum: "2867747.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "月新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.55",
            forRight: "0.38",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电交易情况 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: 5258,
            tit3: "万条",
            tit4: "发现供电质量问题台区数",
            tit5: "86",
            tit6: "个",
        },

        // 右 热点资讯
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "待办工单", "全部工单", "上门服务", "客户基础信息维护"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [211, 146, 114, 81, 54, 99, 315, 690, 2016, 4108, 4203, 3384, 1894, 2177, 2963, 3401, 3103,
                2802, 2598, 2379, 1563, 1196, 740, 413],
            // 系列2
            echarts5SeName2: "待办工单",
            echarts5SeData2: [133, 93, 72, 51, 34, 63, 200, 437, 1278, 2603, 2663, 2144, 1200, 1380, 1877, 2155, 1966,
                1775, 1646, 1507, 990, 758, 469, 262],
            // 系列3
            echarts5SeName3: "全部工单",
            echarts5SeData3: [86, 60, 47, 33, 22, 41, 129, 283, 827, 1686, 1725, 1389, 777, 893, 1216, 1396, 1273,
                1150, 1066, 976, 641, 491, 304, 170],
            // 系列4
            echarts5SeName4: "上门服务",
            echarts5SeData4: [81, 56, 44, 31, 21, 38, 122, 266, 778, 1585, 1622, 1306, 731, 840, 1143, 1312, 1197,
                1081, 1003, 918, 603, 461, 285, 159],
            // 系列5
            echarts5SeName5: "客户基础信息维护",
            echarts5SeData5: [80, 55, 43, 31, 21, 37, 119, 261, 762, 1553, 1589, 1279, 716, 823, 1120, 1286, 1173,
                1059, 982, 899, 591, 452, 280, 156],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [263849.45, 308394.35, 255834.34, 368493.22,
                315738.35, 305839.25, 342456.36, 314984.52, 327394.58,
                544389.66, 270937.35,
                146123.59],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [192246, 174534, 174634.2,
                193523.3,
                231125, 198434, 192845,
                253849,
                247834, 335632, 205738,
                283829],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "元",
            // y轴数据
            echarts3Ya: [31.51, 30.6, 23.66, 153, 43.2, 31.5, 20.3],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据 (近7日)",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [8224, 9672, 10243, 9102, 8612, 7542, 9048],
        },

    },
    // 其他省份数据
    defaultData_beijing: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // 缴费笔数变化范围
        payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [17844],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [818053],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "年累计并网容量",
            sedLeftNum: "153631.53",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "月新增并网容量",
            sedLeftNum2: "7161.53",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "年累计申请容量",
            sedLeftNum: "27147.46",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "月新增申请容量",
            sedLeftNum: "27147.46",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "3408018",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [6281.57, 14641.42, 10839.82, 13239.06, 9432.42, 5320.9, 7114.41, 18698.18, 20126.15, 23680.54,
                10829.28, 7163.51],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                27147.46],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_tianjin: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [184, 128, 1, 1, 1, 1, 276, 604, 1764, 3593, 3676, 2960, 1657, 1905, 2591, 2975, 2714, 2451, 2273, 2081, 1367, 1046, 647, 361],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [7741300],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [11282],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [187748],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "年累计并网容量",
            sedLeftNum: "1116616.12",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "月新增并网容量",
            sedLeftNum2: "89394.53",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "年累计申请容量",
            sedLeftNum: "1033464.23",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "月新增申请容量",
            sedLeftNum: "74184.26",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "92796",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业扩接入", "客户管理", "计费结算", "工单管理", "工单看板"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业扩接入",
            echarts5SeData1: [52618, 36537, 28442, 20183, 13565, 24723, 78708, 172402,
                 503586, 1025932, 1049725, 845162, 473120, 543787, 739927, 849483, 775042,
                699835, 648913, 594108, 390256, 298695, 184763, 103211],
            // 系列2
            echarts5SeName2: "客户管理",
            echarts5SeData2: [36533, 25368, 19748, 14013, 9418, 17165,
                 54648, 119701, 349646, 712318, 728838, 586807, 328493, 377559, 513741,
                  589807, 538122,
                485904, 450549, 412497, 270960, 207388, 128283, 71661],
            // 系列3
            echarts5SeName3: "计费结算",
            echarts5SeData3: [18157, 12608, 9815, 6965, 4681, 8531, 27161, 59493, 
                173779, 354032, 362243, 291651, 163266, 187652, 255336, 293142, 267454,241501,223929,205017,134671,103075,63759,35616],
            // 系列4
            echarts5SeName4: "工单管理",
            echarts5SeData4: [16412, 11396,8871,6295,4231,7711,24550,53775,157076,320004,327426,263619,147574,
                169616,230795,264967,241748,218290,202406,185312,121727,93168,57630,32193
            ],
        
            // 系列5
            echarts5SeName5: "工单看板",
            echarts5SeData5: [8963, 6224, 4845, 3438, 2311, 4212,
                 13408, 29369, 85787, 174769, 178823, 143975, 80597, 92635, 126048, 144711, 132030,
                119218, 110543, 101207, 66481, 50883, 31475, 17582],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [43975.55, 58275.37, 78374.45, 80368.37, 59938.18, 57208.38, 55534.36, 85384.36, 98935.75, 192437.17, 153854.38,
                89394.53],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [70258.42, 72840.2, 70284.25, 78366.2,
                92655.15, 77439.4, 85389.28, 105839.48, 104728.24, 102948.29, 45837.82,
                74184.26],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_hebei: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1278, 887, 1, 1, 1, 1, 1912, 4187, 12231,
             24918, 25495, 20527, 11491, 13207, 17971, 20632, 18824, 16997, 15761, 14430, 9478, 7255, 4487, 2507],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "55",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [29552200],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [60785],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [822883],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "年累计并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "月新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "年累计申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "月新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "1067",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "4051",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "21569160",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "低压非居民新装增容", "代办工单", "低压居民新装增容", "一户多人口调整"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [451159, 313279, 243870, 173054, 116307, 211979,
                 674863, 1478227, 4317904, 8796668, 9000674, 7246687, 4056681, 4662604,
                  6344368, 7283736, 6645454,
                6000606, 5563985, 5094066, 3346176, 2561103, 1584216, 884966],
            // 系列2
            echarts5SeName2: "低压非居民新装增容",
            echarts5SeData2: [204210, 141801, 110384, 78330, 52645, 
                95949, 305466, 669096, 1954432, 3981675, 4074016, 3280101, 1836194,
                 2110456, 2871680, 3296871, 3007962,
                2716081, 2518452, 2305750, 1514595, 1159243, 717071, 400566],
            // 系列3
            echarts5SeName3: "代办工单",
            echarts5SeData3: [108054, 75031, 58408, 41447, 27856,
                 50770, 161632, 354040, 1034151, 2106828, 2155689, 1735603, 971587,
                  1116708, 1519495, 1744477, 1591606,
                1437163, 1332591, 1220044, 801419, 613392, 379425, 211952],
            // 系列4
            echarts5SeName4: "低压居民新装增容",
            echarts5SeData4: [83093, 57699, 44915, 31873, 21421,
                 39042, 124294, 272255, 795259, 1620144, 1657717, 1334673, 747148,
                  858745, 1168487, 1341497, 1223940,
                1105174, 1024758, 938210, 616289, 471696, 291776, 162990],
            // 系列5
            echarts5SeName5: "一户多人口调整",
            echarts5SeData5: [73615, 51117, 39792, 28237, 18978,
                 34588, 110117, 241201, 704547, 1435342, 1468630, 1182434, 661924,
                  760792, 1035203, 1188479, 1084331,
                979112, 907869, 831193, 545992, 417892, 258495, 144399],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [179138.58, 151839.18, 175839.26, 114383.45, 108392.35,
                103193.4, 151984.56, 112896.28, 164398.47, 344938.27, 101284.33,
                85429.18],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [103848.36, 97847.18, 102846.28, 112953.49,
                144942.26, 148463.49, 313736.4, 242746.67, 211584.26,
                222849.57, 113825.8,
                219385.27],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_jibei: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [424, 294, 1, 1, 1, 1, 634, 1388, 4055, 8260,
             8452, 6805, 3809, 4378, 5958, 6840, 6240, 5635, 5225, 4783, 3142, 2405, 1488, 831],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "86.67",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "17.41",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "21.13",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "62",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [12286200],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [40868],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [706494],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "427576515",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "计量设备更换", "低压分布式电源新装增容", "待办工单", "低压非居民新装增容"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [106821, 74175, 57741, 40974, 27538, 
                50191, 159788, 350001, 1022354, 2082795, 2131098, 1715805, 960504,
                 1103969, 1502162, 1724577, 1573450,
                1420769, 1317390, 1206127, 792277, 606395, 375096, 209534],
            // 系列2
            echarts5SeName2: "计量设备更换",
            echarts5SeData2: [72345, 50236, 39106, 27750, 18650,
                 33992, 108217, 237040, 692396, 1410586, 1443299, 1162039, 650507,
                  747670, 1017349, 1167980, 1065629,
                962225, 892210, 816857, 536575, 410685, 254036, 141908],
            // 系列3
            echarts5SeName3: "计量设备更换",
            echarts5SeData3: [58733, 40783, 31747, 22528, 15141,
                 27596, 87855, 192438, 562113, 1145168, 1171726, 943388, 528107,
                  606987, 825923, 948211, 865118,
                781171, 724331, 663156, 435612, 333409, 206236, 115207],
            // 系列4
            echarts5SeName4: "待办工单",
            echarts5SeData4: [34100, 23679, 18432, 13080, 8791,
                 16022, 51008, 111729, 326361, 664880, 680300, 547728, 306617,
                  352414, 479528, 550528, 502284,
                453545, 420544, 385026, 252915, 193576, 119740, 66889],
            // 系列5
            echarts5SeName5: "低压非居民新装增容",
            echarts5SeData5: [33027, 22934, 17853, 12669, 8514, 15518,
                 49404, 108215, 316095, 643967, 658901, 530499, 296972, 341329,
                  464444, 533211, 486486,
                439279, 407316, 372915, 244959, 187487, 115974, 64785],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0,
                0],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0, 
                0, 13264.5, 41158.89, 51256.64, 53257.45,
                58364.68, 24367.22,
                47392.27],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [340120, 295110, 350377, 352392, 499520, 614948, 441757],
        },

    },
    // 其他省份数据
    defaultData_shanxi: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [200, 139, 1, 1, 1, 1, 299, 655, 1915,
             3901, 3991, 3213, 1799, 2067, 2813, 3230, 2947, 2661, 2467, 2259, 1484, 1136, 702, 392],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "55.24",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [15417100],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [28436],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [815906],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "46830602",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "低压分布式电源新装增容", "客户基础信息维护", "待办工单", "低压非居民新装增容"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [47541, 33012, 25698, 18236, 12256, 22337,
                 71114, 155768, 454999, 926949, 948447, 763620, 427473, 491322, 668538, 
                 767524, 700265,
                632314, 586305, 536788, 352604, 269876, 166937, 93252],
            // 系列2
            echarts5SeName2: "低压分布式电源新装增容",
            echarts5SeData2: [30069, 20880, 16254, 11534, 7752, 14128,
                 44979, 98522, 287783, 586287, 599884, 482983, 270373, 310757, 422845,
                  485452, 442912,
                399933, 370833, 339513, 223019, 170694, 105586, 58982],
            // 系列3
            echarts5SeName3: "客户基础信息维护",
            echarts5SeData3: [23349, 16214, 12621, 8956, 6019,
                 10971, 34927, 76504, 223470, 455265, 465823, 375047, 209950,
                  241309, 328348, 376964, 343930,
                310557, 287960, 263639, 173179, 132548, 81990, 45081],
            // 系列4
            echarts5SeName4: "待办工单",
            echarts5SeData4: [22085, 15336, 11938, 8471, 5693,
                 10377, 33036, 72362, 211371, 430616, 440602, 354741, 198583,
                  228244, 310570, 356554, 325309,
                293742, 272369, 249365, 163802, 125371, 77551, 43321],
            // 系列5
            echarts5SeName5: "低压非居民新装增容",
            echarts5SeData5: [20993, 14577, 11347, 8052, 5412, 9864,
                 31402, 68783, 200916, 409317, 418810, 337195, 188761, 216955,
                  295209, 338919, 309219,
                279214, 258897, 237032, 155701, 119170, 73715, 41178],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [178476.78, 196856.12, 76156.78, 223758.45,
                244549.2, 193545.89, 178365.57, 216464.46, 263575.27,
                302839.18, 123574.6,
                102847.06],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [4228.5, 25326.35, 37284.5, 34393.29,
                45273.48, 71274.3, 67847.7, 89473.28, 111484.3,
                111585.45, 54736.29,
                97382.27],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_shandong: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1841, 1278, 1, 1, 1, 1, 2573, 6031,
             17615, 35887, 36719, 29563, 16549, 19021, 25882, 29714, 27111,
              24480, 22699, 20782, 13651, 10448, 6463, 3610],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "22.86",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "51.88",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "61",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [58335800],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [82774],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [2257826],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "300",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "1125",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "389882019",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "计量设备更换", "低压非居民新装增容", "低压分布式电源新装增容", "客户基础信息维护"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [796340, 552968, 430454, 305457, 205294, 374164,
                 1191199, 2609215, 7621524, 15526982, 15887074, 12791114, 7160441, 8229954, 11198433,
                  12856510, 11729879,
                10591658, 9820980, 8991527, 5906329, 4520598, 2796297, 1562052],
            // 系列2
            echarts5SeName2: "计量设备更换",
            echarts5SeData2: [164269, 114066, 88794, 63009, 42348,
                 77182, 245720, 538227, 1572164, 3202987, 3277177, 2638544, 1477052,
                  1697670, 2310007, 2652034, 2419633,
                2184841, 2025866, 1854767, 1218354, 932506, 576819, 322219],
            // 系列3
            echarts5SeName3: "低压非居民新装增容",
            echarts5SeData3: [133273, 92543, 72039, 51120, 34357, 
                62619, 199355, 436669, 1275512, 2598543, 2658806, 2140677, 1198347,
                 1377337, 1874132, 2151622, 1963072,
                1772584, 1643606, 1504791, 988463, 756552, 467979, 261420],
            // 系列4
            echarts5SeName4: "低压分布式电源新装增容",
            echarts5SeData4: [117396, 81518, 63457, 45030, 30264, 
                55159, 175606, 384650, 1123564, 2288985, 2342069, 1885663, 1055591,
                 1213258, 1650871, 1895304, 1729216,
                1561420, 1447807, 1325529, 870710, 666426, 412230, 230277],
            // 系列5
            echarts5SeName5: "客户基础信息维护",
            echarts5SeData5: [113904, 79093, 61570, 43691, 29364,
                 53518, 170382, 373206, 1090137, 2220887, 2272392, 1829564, 1024187,
                  1177163, 1601757, 1838918, 1677772,
                1514967, 1404734, 1286094, 844806, 646599, 399966, 223427],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [945645.45, 885745.56, 815745.56,
                854634.34, 814624.45, 753574.34, 673563.18, 874634.38,
                903847.77, 1184732.2, 644758.38,
                623875.46],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0,
                 0, 0, 0, 0, 0, 
                 0, 0,
                 154737.26],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 155457, 275138],
        },

    },
    // 其他省份数据
    defaultData_shanghai: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [213, 148, 1, 1, 1, 1, 319, 698,
             2039, 4154, 4250, 3422, 1916, 2202, 2996, 3439, 3138,
              2834, 2627, 2405, 1580, 1209, 748, 418],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "62.82",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [11869000],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [20261],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [1371915],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "7731266",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "低压非居民新装增容", "计量设备更换", "过户", "计量设备故障处理"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [61676, 42827, 33338, 23657, 15900, 28979, 92257, 202082,
                 590281, 1202553, 1230442, 990662, 554571, 637404, 867310, 995727, 908470, 
                 820316, 760627, 696387, 457441, 350117,216571,120980],
            // 系列2
            echarts5SeName2: "低压非居民新装增容",
            echarts5SeData2: [34495, 23953, 18646, 13231, 8893, 
                16208, 51599, 113023, 330142, 672583, 688181, 554073, 310169,
                 356497, 485083, 556906, 508104,
                458799, 425416, 389486, 255845, 195819, 121127, 67663],
            // 系列3
            echarts5SeName3: "计量设备更换",
            echarts5SeData3: [28171, 19562, 15228, 10806, 7262,
                 13236, 42139, 92302, 269616, 549275, 562014, 452493, 253305,
                  291139, 396151, 454806, 414951,
                374686, 347423, 318080, 208940, 159919, 98921, 55258],
            // 系列4
            echarts5SeName4: "过户",
            echarts5SeData4: [15682, 10889, 8477, 6015, 4043,
                 7368, 23458, 51382, 150086, 305764, 312855, 251888, 141007,
                  162068, 220525, 253176, 230990,
                208576, 193399, 177065, 116310, 89022, 55066, 30761],
            // 系列5
            echarts5SeName5: "计量设备故障处理",
            echarts5SeData5: [13367, 9282, 7225, 5127, 3446, 6281,
                 19995, 43797, 127933, 260631, 266676, 214708, 120193, 138146,
                  187974, 215805, 196894,
                177788, 164852, 150929, 99142, 75881, 46938, 26220],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [56205.22, 74284.46, 33535.38,
                59463.28, 53942.12, 63737.36, 116450.77, 106435.11,
                63643.26, 134535.45, 68743.05,
                24137.35],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [35847, 51382, 113955, 95395,
                118374, 107392, 113958, 143928, 151938,
                132948, 39382,
                133799],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 11907, 9224, 0, 0, 5391],
        },

    },
    // 其他省份数据
    defaultData_jiangsu: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [9, 6, 1, 1, 1, 1, 13, 28,
            82, 168, 172, 138, 77, 89, 121,
            139, 127, 114, 106, 97, 64, 49, 30, 17],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [52664400],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [69074],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [1561703],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "14290283.62",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "868373.65",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "6480693.08",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "521837.38",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "10880071",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["工单管理", "低压非居民新装增容",
                "低压分布式电源新装增容", "过户", "预受理信息审核"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "工单管理",
            echarts5SeData1: [3738, 2596, 2021, 1434, 964,
                1756, 5592, 12249, 35778, 72889,
                74579, 60046, 33613, 38634, 52569,
                60353, 55064,
                49721, 46103, 42209, 27726, 21221, 13127, 7333],
            // 系列2
            echarts5SeName2: "低压非居民新装增容",
            echarts5SeData2: [927, 644, 501, 356, 239,
                436, 1387, 3038, 8875, 18080,
                18499, 14894, 8338, 9583, 13039, 14970, 13658,
                12333, 11436, 10470, 6877, 5264, 3256, 1819],
            // 系列3
            echarts5SeName3: "低压分布式电源新装增容",
            echarts5SeData3: [789, 548, 426, 303, 203,
                371, 1180, 2585, 7551, 15384,
                15741, 12673, 7095, 8154, 11095, 12738, 11622,
                10494, 9731, 8909, 5852, 4479, 2771, 1548],
            // 系列4
            echarts5SeName4: "过户",
            echarts5SeData4: [394, 274, 213, 151, 102,
                185, 589, 1291, 3770, 7681,
                7859, 6327, 3542, 4071, 5539, 6360, 5802,
                5239, 4858, 4448, 2922, 2236, 1383, 773],
            // 系列5
            echarts5SeName5: "预受理信息审核",
            echarts5SeData5: [347, 241, 187, 133, 89,
                163, 518, 1135, 3316, 6756,
                6913, 5566, 3116, 3581, 4873, 5594, 5104,
                4609, 4273, 3912, 2570, 1967, 1217, 680],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [888375.47, 911737.62, 934839.38, 1148375.08, 1048693.66,
                1018475.37, 953678.47, 1283948.8, 1446937.09, 1985739.88, 1184734.46,
                868373.65],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [407395.4, 403823.1, 451935, 476842.2, 529183.3,
                531294.5, 516835.2, 547365.2, 604482, 666482.3, 346382.5,
                521837.38],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_zhejiang: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [183, 127, 1, 1, 1, 1, 274, 600, 1754, 3572,
            3655, 2943, 1647, 1894, 2576, 2958, 2699,
            2437, 2260, 2069, 1359, 1040, 643, 359],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "30.36",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "18.5",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "59",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [34752900],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [52611],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [1318642],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "8938077.23",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "358395.25",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "7160741.96",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "586392.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "535053",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["用电客户视图", "现场巡视", "工作看板", "待办工单", "上门服务"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "用电客户视图",
            echarts5SeData1: [44552, 30936, 24082, 17089, 11485,
                20933, 66643, 145976, 426395, 868675,
                888821, 715614, 400599, 460434, 626509,
                719272, 656242,
                592562, 549446, 503041,
                330436, 252910, 156442, 87391],
            // 系列2
            echarts5SeName2: "现场巡视",
            echarts5SeData2: [39410, 27366, 21303, 15117, 10160,
                18517, 58951, 129128, 377182, 768416,
                786236, 633020, 354363, 407293, 554200,
                636256, 580501,
                524171, 486031, 444982, 292299, 223720, 138386, 77304],
            // 系列3
            echarts5SeName3: "工作看板",
            echarts5SeData3: [23373, 16230, 12634, 8965, 6026,
                10982, 34963, 76582, 223697, 455728,
                466297, 375428, 210164, 241555, 328682, 377348, 344280,
                310873, 288253, 263908, 173355, 132683, 82073, 45847],
            // 系列4
            echarts5SeName4: "待办工单",
            echarts5SeData4: [15947, 11073, 8620, 6117, 4111,
                7493, 23854, 52250, 152622, 310930,
                318141, 256144, 143389, 164806, 224250, 257453, 234892,
                212099, 196666, 180057, 118275, 90526, 55996, 31280],
            // 系列5
            echarts5SeName5: "上门服务",
            echarts5SeData5: [8635, 5996, 4667, 3312, 2226,
                4057, 12916, 28291, 82639, 168356,
                172260, 138691, 77639, 89236, 121422, 139401, 127185,
                114843, 106487, 97493, 64041, 49016, 30320, 16937],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [493743.35, 521643.74, 604957.37, 822853.57,
                793749.37, 763733.19, 622685.38, 832686.48, 917493.17,
                1215844.26, 654467.27,
                358395.25],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [571125, 498263.2, 483783.3, 467636.4,
                583355.6, 552356.1, 481936, 603923.6, 704924.26,
                748374, 364823,
                586392.5],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_anhui: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [2699, 1874, 1, 1, 1, 1, 4037,
             8843, 25830, 52623, 53843, 43350, 24267, 27892, 37953, 
             43572, 39754, 35896, 33284, 30473, 20017, 15321, 9477, 5294],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [37487600],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [3549733],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [2322595],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "603843444",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户基础信息维护", "客户360视图", "计量设备更换", "低压非居民新装增容", "开票管理"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户基础信息维护",
            echarts5SeData1: [713450, 495410, 385649, 273662, 183925,
                 335218, 1067209, 2337625, 6828209, 13910798, 14233408, 11459703, 6415120,
                  7373309, 10032803, 11518292, 10508931,
                9489186, 8798726, 8055611, 5291547, 4050054, 2505234, 1399460],
            // 系列2
            echarts5SeName2: "客户360视图",
            echarts5SeData2: [648804, 450521, 350705, 248866, 167259,
                 304844, 970509, 2125812, 6209503, 12650337, 12943715, 10421336, 5833844, 
                 6705211, 9123727, 10474616, 9556713,
                8629368, 8001471, 7325689, 4812078, 3683078, 2278234, 1272655],
            // 系列3
            echarts5SeName3: "计量设备更换",
            echarts5SeData3: [207665, 144200, 112251, 79655, 53535,
                 97572, 310634, 680416, 1987497, 4049038, 4142940, 3335594, 1867259,
                  2146161, 2920263, 3352647, 3058851,
                2762032, 2561059, 2344759, 1540219, 1178856, 729202, 407343],
            // 系列4
            echarts5SeName4: "低压非居民新装增容",
            echarts5SeData4: [208884, 145047, 112911, 80123, 53850,
                 98145, 312458, 684411, 1999168, 4072813, 4167267, 3355180, 1878223,
                  2158762, 2937411, 3372333, 3076812,
                2778250, 2576097, 2358527, 1549263, 1185778, 733484, 409735],
            // 系列5
            echarts5SeName5: "开票管理",
            echarts5SeData5: [164389, 114150, 88859, 63056, 42379, 
                77239, 245900, 538622, 1573317, 3205246, 3279580, 2640479, 1478135,
                 1698916, 2311701, 2653979, 2421407,
                2186444, 2027352, 1856128, 1219248, 933190, 577242, 322456],

        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [686882.27, 646245.35, 872866.09, 852466.88,
                836279.61, 581125.66, 428604.06, 510175.63, 713366.03,
                966687.36, 466993.59,
                408867.67],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [124634.2, 154634.3, 172946.4, 212384.5,
                252847, 261837.6, 263928, 323984.3, 372819.2,
                412947.7, 164983.3,
                257392.2],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [733722, 486160, 511031, 631970, 727922, 994310, 1068983],
        },

    },
    // 其他省份数据
    defaultData_hubei: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [412, 286, 1, 1, 1, 1,
             616, 1350, 3943, 8032, 8219, 6617, 3704,
              4257, 5793, 6651, 6068, 5479, 5080,
               4651, 3055, 2339, 1447, 808],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "69.77",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [32020100],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [47085],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [777740],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "6515",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "24431",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "5712244",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["用电客户视图", "低压分布式电源新装增容", "低压非居民新装增容", "待办工单", "客户基础信息维护"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "用电客户视图",
            echarts5SeData1: [77718, 53966, 42010, 29811, 20035,
                 36516, 116254, 254644, 743815, 1515341, 1550484, 1248337,
                  698816, 803195, 1092900, 1254719, 1144766,
                1033683, 958469, 877520, 576423, 441183, 272902, 152447],
            // 系列2
            echarts5SeName2: "低压分布式电源新装增容",
            echarts5SeData2: [73603, 51109, 39785, 28232, 18975,
                 34583, 110098, 241160, 704429, 1435101, 1468382, 1182235, 661813,
                  760664, 1035029, 1188279, 1084149,
                978947, 907716, 831053, 545900, 417822, 258451, 144375],
            // 系列3
            echarts5SeName3: "低压非居民新装增容",
            echarts5SeData3: [55384, 38791, 30197, 21428, 14402,
                 26248, 83564, 183039, 534656, 1089230, 1114941, 897307, 502311,
                  577338, 785579, 901894, 822860,
                743013, 688950, 630763, 414334, 317124, 196162, 109579],
            // 系列4
            echarts5SeName4: "待办工单",
            echarts5SeData4: [44999, 31246, 24324, 17260, 11600,
                 21143, 67311, 147438, 430667, 877377, 897725, 722783, 404612,
                  465047, 632786, 726478, 662816,
                598499, 554950, 508081, 333747, 255444, 158009, 88266],
            // 系列5
            echarts5SeName5: "客户基础信息维护",
            echarts5SeData5: [44423, 30847, 24012, 17040, 11452,
                 20872, 66450, 145552, 425157, 866154, 886241, 713537,
                  399436, 459098, 624691, 717185, 654337,
                590843, 547851, 501581, 329477, 252176, 155988, 87137],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 327374.69, 438474.66, 202745.27,
                274834.16, 474843.28, 582157.44, 633685.26, 298367.38,
                2038592.26],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [52647, 50646, 61646, 
                48646, 57363, 144634, 182543, 162534, 
                233453, 193523.4, 78372.3,
                162835],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_hunan: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [368, 256, 1, 1, 1, 1,
             551, 1207, 3524, 7180, 7346, 5915, 3311, 
             3806, 5178, 5945, 5424, 4898, 4541, 4158, 2731, 2090, 1293, 722],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "60.5",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "23.24",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "20.69",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "62",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [34170200],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [54222],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [918182],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "8632",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "35370",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "8037372",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "待办工单", "工作看板", "低压非居民新装增容", "计量设备更换"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [126303, 87703, 68272, 48447, 32561,
                 59344, 188930, 413834, 1208811, 2462655, 2519767, 2028733,
                  1135681, 1305311, 1776126, 2039105, 1860416,
                1679888, 1557655, 1426100, 936772, 716989, 443506, 247749],
            // 系列2
            echarts5SeName2: "待办工单",
            echarts5SeData2: [43324, 30083, 23418, 16618, 11169,
                 20356, 64805, 141950, 414637, 844721, 864311, 695880, 
                 389552, 447738, 609233, 699438, 638146,
                576222, 534295, 489170, 321325, 245936, 152128, 84981],
            // 系列3
            echarts5SeName3: "工作看板",
            echarts5SeData3: [36099, 25067, 19513, 13847, 9306,
                 16961, 53999, 118280, 345496, 703864, 720187, 579842, 
                 324595, 373077, 507644, 582807, 531735,
                480137, 445201, 407601, 267744, 204926, 126761, 70810],
            // 系列4
            echarts5SeName4: "低压非居民新装增容",
            echarts5SeData4: [30359, 21081, 16410, 11645, 7826,
                 14264, 45412, 99471, 290555, 591934, 605662, 487635, 
                 272977, 313750, 426917, 490128, 447177,
                403785, 374404, 342783, 225167, 172338, 106603, 59550],
            // 系列5
            echarts5SeName5: "计量设备更换",
            echarts5SeData5: [29045, 20168, 15700, 11141, 7488, 
                13647, 43446, 95165, 277978, 566311, 579445, 466527, 
                261161, 300169, 408437, 468912, 427821,
                386307, 358198, 327945, 215420, 164878, 101989, 56972],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [319323.35, 243636.25, 333643.17, 336343.54,
                429382.37, 524632.13, 363754.29, 491453.88, 506135.45,
                656384.47, 327468.03,
                242948.46],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 44463.3, 243745.5, 113745.3,
                138463.7, 134635, 132389.2, 145732.4, 224824.6, 
                212846.2, 114835.5,
                121849],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_henan: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [81047],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [1736464],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "157436438",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [183920.34, 1421839.37, 1229384.36, 1239876.51, 103892.37,
                983829.2, 896128.45, 1227384.17, 1273948.4, 812837.38, 523938.45,
                356839.45],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [834846, 953758, 126747, 138425,
                311456, 492689, 1436457, 402646, 1078374.56,
                435735.2, 176935.2,
                216928.5],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [64610, 61776, 59215, 86661, 83705, 65271, 65644],
        },

    },
    // 其他省份数据
    defaultData_jiangxi: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [527, 366, 1, 1, 1, 1, 788,
             1726, 5042, 10272, 10510, 8462, 4737, 5444, 7408,
              8505, 7760, 7007, 6497, 5948, 3907, 2991, 1850, 1033],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "60.67",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "28.03",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "12",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "46",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [25690800],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [36839],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [782009],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "961849285",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "客户基础信息维护", "低压非居民新装增容", "分布式电源销户", "开票管理"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [152228, 105705, 82285, 58391, 39244,
                 71525, 227709, 498775, 1456924, 2968125, 3036960, 2445139, 
                 1368784, 1573231, 2140683, 2457640, 2242274,
                2024693, 1877370, 1718813, 1129049, 864154, 534538, 298601],
            // 系列2
            echarts5SeName2: "客户基础信息维护",
            echarts5SeData2: [83328, 57862, 45042, 31963, 21482, 
                39152, 124646, 273025, 797507, 1624724, 1662403, 1338446, 749260,
                 861172, 1171790, 1345289, 1227400,
                1108298, 1027655, 940862, 618031, 473030, 292601, 163451],
            // 系列3
            echarts5SeName3: "低压非居民新装增容",
            echarts5SeData3: [67149, 46627, 36297, 25757, 17311,
                 31550, 100444, 220014, 642662, 1309267, 1339630, 1078573, 603783,
                  693966, 944275, 1084087, 989087,
                893110, 828125, 758184, 498034, 381186, 235789, 131715],
            // 系列4
            echarts5SeName4: "分布式电源销户",
            echarts5SeData4: [39521, 27443, 21363, 15159, 10188,
                 18569, 59117, 129490, 378242, 770575, 788446, 634799, 355359, 
                 408437, 555757, 638045, 582132,
                525644, 487397, 446233, 293120, 224349, 138775, 77522],
            // 系列5
            echarts5SeName5: "开票管理",
            echarts5SeData5: [37072, 25743, 20039, 14220, 9557, 17419,
                 55454, 121468, 354809, 722835, 739599, 595471, 333344, 383133,
                  521326, 598515, 546067,
                493079, 457201, 418587, 274960, 210450, 130177, 72719],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [444634.4, 494845.26, 502532.23, 553867.63,
                511023.5, 478839, 386923.27, 256382.54, 316382.66,
                283849.32, 208372.78,
                62184.38],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [602973.6, 173927.7, 242845.4, 293829.4,
                1338574.8, 49457427.8, 601647.5, 211573.7, 243534.2,
                175353.1, 71834.2,
                103837.5],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [77273, 69776, 71002, 62129, 60721, 60091, 60348],
        },

    },
    // 其他省份数据
    defaultData_sichuan: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1, 1, 1, 1, 1, 1, 1, 3, 8, 16, 16, 13, 7, 8, 12, 13, 12, 11, 10, 9, 6, 5, 3, 2],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [68267],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [0],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "0",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [1, 5, 15, 22, 27, 13, 19, 23, 29, 15, 23, 27, 13, 22, 32, 37, 35,
                29, 26, 32, 17, 15, 23, 30],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [3, 13, 22, 31, 28, 22, 17, 23, 29, 33, 35, 37, 30, 22, 26, 19, 27,
                25, 32, 15, 35, 40, 38, 17],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [7, 11, 17, 18, 22, 27, 25, 33, 16, 12, 25, 30, 35, 26, 17, 28, 31,
                19, 23, 30, 25, 27, 30, 20],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [9, 15, 32, 12, 22, 23, 15, 25, 27, 31, 26, 22, 30, 19, 25, 24, 32,
                40, 19, 24, 27, 22, 31, 18],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [2, 5, 7, 11, 22, 25, 20, 26, 25, 30, 22, 30, 31, 20, 29, 36, 35,
                30, 24, 22, 32, 41, 47, 39],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0,
                0],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0,
                 0, 0, 0, 0, 0, 
                 0, 0,
                0],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_chongqing: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [250, 174, 1, 1, 1, 1,
             375, 821, 2397, 4884, 4997, 4024, 2252, 2589,
              3523, 4044, 3690, 3332, 3089, 2828, 1858, 1422, 880, 491],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "49.37",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [18548500],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [26133],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [765113],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "10324904",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["开票管理", "低压非居民新装增容", "用电客户视图", "过户", "客户基础信息维护"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "开票管理",
            echarts5SeData1: [51800, 35969, 28000, 19869, 13354,
                 24338, 77485, 169723, 495762, 1009993, 1033416, 832031,
                  465770, 535339, 728431, 836285, 763001,
                688962, 638831, 584877, 384193, 294054, 181892, 101608],
            // 系列2
            echarts5SeName2: "低压非居民新装增容",
            echarts5SeData2: [50118, 34801, 27091, 19224, 12920,
                 23548, 74968, 164211, 479661, 977192, 999854, 805010,
                  450643, 517953, 704774, 809125, 738221,
                666587, 618084, 565882, 371715, 284504, 175985, 98308],
            // 系列3
            echarts5SeName3: "用电客户视图",
            echarts5SeData3: [33275, 23106, 17986, 12763, 8578,
                 15634, 49774, 109025, 318462, 648789, 663835, 534471,
                  299196, 343885, 467922, 537204, 490128,
                442568, 410366, 375707, 246794, 188891, 116842, 65270],
            // 系列4
            echarts5SeName4: "过户",
            echarts5SeData4: [23331, 16201, 12611, 8949, 6015,
                 10962, 34899, 76444, 223293, 454904, 465454, 374750,
                  209784, 241118, 328088, 376666, 343658,
                310311, 287732, 263431, 173042, 132443, 81925, 45764],
            // 系列5
            echarts5SeName5: "客户基础信息维护",
            echarts5SeData5: [21836, 15163, 11803, 8376, 5629, 10260,
                 32664, 71547, 208988, 425761, 435635, 350742, 196344,
                  225671, 307069, 352535, 321642,
                290431, 269298, 246554, 161956, 123958, 76676, 42833],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [13693.28, 24277.78, 45398.85, 89839.18,
                60372.58, 53258.47, 107986.41, 59630.02, 47599.29,
                136984.34, 28154.23,
                28156.36],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0,
                 0, 0, 97583.2, 242684.4, 194563.6,
                 218374.5, 137834.4,
                 128374.5],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_liaoning: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1, 1, 1, 1, 1, 1, 2,
             4, 11, 22, 22, 18, 10, 12, 16,
              18, 16, 15, 14, 13, 8, 6, 4, 2],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "90.24",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "13.54",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "20.09",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "61",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [27510900],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [34767],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [932541],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "40",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "179",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "31586466",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "客户基础信息维护", "欠费信息查询", "电力网点交费", "预受理信息审核"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [360, 250, 195, 138, 93,
                 169, 539, 1180, 3447, 7023, 7185, 5785,
                  3239, 3722, 5065, 5815, 5305,
                4790, 4442, 4067, 2671, 2045, 1265, 706],
            // 系列2
            echarts5SeName2: "客户基础信息维护",
            echarts5SeData2: [144, 100, 78, 55, 37,
                 67, 215, 470, 1374, 2800, 2865, 2306,
                  1291, 1484, 2019, 2318, 2115,
                1910, 1771, 1621, 1065, 815, 504, 282],
            // 系列3
            echarts5SeName3: "欠费信息查询",
            echarts5SeData3: [111, 77, 60, 43, 29,
                 52, 167, 365, 1066, 2171, 2222, 1789,
                  1001, 1151, 1566, 1798, 1640,
                1481, 1373, 1257, 826, 632, 391, 218],
            // 系列4
            echarts5SeName4: "电力网点交费",
            echarts5SeData4: [101, 70, 54, 39, 26,
                 47, 151, 330, 964, 1963, 2008, 1617,
                  905, 1040, 1416, 1625, 1483,
                1339, 1242, 1137, 747, 572, 354, 197],
            // 系列5
            echarts5SeName5: "预受理信息审核",
            echarts5SeData5: [86, 60, 47, 33, 22, 
                40, 129, 282, 825, 1680, 1719, 1384, 775,
                 890, 1212, 1391, 1269,
                1146, 1063, 973, 639, 489, 303, 169],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [132846.27, 143846.18, 161574.37, 259536.4,
                211463.26, 171122.57, 117367.27, 216564, 278837.57,
                362656.37, 217436.38,
                121948.65],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [68374.5, 65158.2, 77156.26, 77394.8, 
                93183.1, 221835.6, 111034.2, 137394.4, 213283.5,
                105739.8, 57736,
                66128.5],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_jilin: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [19686],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [0],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "0",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0,
                21692.47],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0,
                 0, 0, 0, 0,
                  0, 0, 0,
                0],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_longjiang: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1, 1, 1, 1, 1, 1, 1, 3, 8, 16, 16, 13, 7, 8, 12, 13, 12, 11, 10, 9, 6, 5, 3, 2],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "93.2",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [26018],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [0],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "0",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [1, 5, 15, 22, 27, 13, 19, 23, 29, 15, 23, 27, 13, 22, 32, 37, 35,
                29, 26, 32, 17, 15, 23, 30],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [3, 13, 22, 31, 28, 22, 17, 23, 29, 33, 35, 37, 30, 22, 26, 19, 27,
                25, 32, 15, 35, 40, 38, 17],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [7, 11, 17, 18, 22, 27, 25, 33, 16, 12, 25, 30, 35, 26, 17, 28, 31,
                19, 23, 30, 25, 27, 30, 20],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [9, 15, 32, 12, 22, 23, 15, 25, 27, 31, 26, 22, 30, 19, 25, 24, 32,
                40, 19, 24, 27, 22, 31, 18],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [2, 5, 7, 11, 22, 25, 20, 26, 25, 30, 22, 30, 31, 20, 29, 36, 35,
                30, 24, 22, 32, 41, 47, 39],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0,
                0],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0, 
                0, 0, 0, 0, 0, 
                0, 0,
                0],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_mengdong: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1,0,1,1,1,1,1,2,6,12,13,10,6,7,9,10,9,8,8,7,5,4,2,1],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "53.85",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [7680400],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [19571],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [509181],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "320321",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["低压非居民新装增容", "低压分布式电源新装增容", "客户360视图", "待办工单", "煤改电户信息认定"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "低压非居民新装增容",
            echarts5SeData1: [113,79,61,43,29,53,170,371,1085,2210,2262,1821,1019,1172,1594,1830,1670,1508,1398,1280,841,644,398,222],
            // 系列2
            echarts5SeName2: "低压分布式电源新装增容",
            echarts5SeData2: [106,73,57,40,27,50,158,346,1010,2058,2106,1695,949,1091,1484,1704,1555,1404,1302,1192,783,599,371,207],
            // 系列3
            echarts5SeName3: "客户360视图",
            echarts5SeData3: [99,68,53,38,25,46,147,323,943,1921,1965,1582,886,1018,1385,1590,1451,1310,1215,1112,731,559,346,193],
            // 系列4
            echarts5SeName4: "待办工单",
            echarts5SeData4: [74,51,40,28,19,35,110,242,706,1439,1472,1185,663,762,1038,1191,1087,981,910,833,547,419,259,145],
            // 系列5
            echarts5SeName5: "煤改电户信息认定",
            echarts5SeData5: [67,47,36,26,17,32,101,221,645,1313,1344,1082,606,696,947,1087,992,896,831,760,499,382,236,132],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [14384.66, 36284.37, 38396.28, 33729.19,
                35483.19, 49484, 28483.39, 32379.27, 34268.28,
                133624.54, 41547.37,
                30438.26],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [6156, 5246.4, 11573.4, 9474.3,
                11252.8, 11357.2, 19363.5, 83473.2, 19747.2,
                17257.6, 5148.5,
                14139],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [1, 1, 1, 1, 1, 1, 1],
        },

    },
    // 其他省份数据_陕西
    defaultData_shanxi1: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1, 1, 1, 1, 1, 1, 1, 3, 8, 16, 16, 13, 7, 8, 12, 13, 12, 11, 10, 9, 6, 5, 3, 2],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [32234],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [0],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "0",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [1, 5, 15, 22, 27, 13, 19, 23, 29, 15, 23, 27, 13, 22, 32, 37, 35,
                29, 26, 32, 17, 15, 23, 30],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [3, 13, 22, 31, 28, 22, 17, 23, 29, 33, 35, 37, 30, 22, 26, 19, 27,
                25, 32, 15, 35, 40, 38, 17],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [7, 11, 17, 18, 22, 27, 25, 33, 16, 12, 25, 30, 35, 26, 17, 28, 31,
                19, 23, 30, 25, 27, 30, 20],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [9, 15, 32, 12, 22, 23, 15, 25, 27, 31, 26, 22, 30, 19, 25, 24, 32,
                40, 19, 24, 27, 22, 31, 18],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [2, 5, 7, 11, 22, 25, 20, 26, 25, 30, 22, 30, 31, 20, 29, 36, 35,
                30, 24, 22, 32, 41, 47, 39],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0,
                0],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0, 
                0, 0, 0, 0, 0,
                 0, 0,
                0],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_gansu: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [20377],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [541378],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "22857280",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [4489.26, 6864.85, 8189.66, 26493.36,
                14539.25, 24123.69, 13628.53, 30827.93,
                39194.39, 75866.35, 41294.18,
                23148.37],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [5463, 1255, 3215, 1026,
                10156, 4835, 506, 6264, 4764,
                4735, 2743,
                12135.45],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_qinghai: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [88,61,1,1,1,1,132,289,844,1720,1760,1417,793,911,1240,1424,1299,1173,1088,996,654,501,310,173],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "75",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.8",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "35.74",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "50",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [1964100],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [4835],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [332548],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "23795528",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["用电客户视图", "高压新装增容", "低压非居民新装增容", "待办工单", "过户"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "用电客户视图",
            echarts5SeData1: [33457,23232,18085,12833,8625,15720,50046,109622,320207,652343,667471,537399,300835,345769,470485,540147,492813,444993,412614,377765,248146,189926,117482,65627],
            // 系列2
            echarts5SeName2: "高压新装增容",
            echarts5SeData2: [8678,6026,4691,3329,2237,4078,12982,28435,83059,169212,173137,139397,78034,89690,122040,140110,127832,115427,107029,97989,64367,49265,30474,17023],
            // 系列3
            echarts5SeName3: "低压非居民新装增容",
            echarts5SeData3: [7624,5294,4121,2924,1966,3582,11405,24981,72969,148657,152105,122464,68555,78795,107215,123090,112303,101406,94027,86086,56548,43281,26772,14955],
            // 系列4
            echarts5SeName4: "待办工单",
            echarts5SeData4: [7344,5100,3970,2817,1893,3451,10985,24062,70286,143191,146512,117961,66034,75897,103273,118564,108174,97677,90570,82921,54469,41689,25788],
            // 系列5
            echarts5SeName5: "过户",
            echarts5SeData5: [6398,4443,3458,2454,1649,3006,9570,20963,61232,124746,127639,102766,57528,66121,89970,103291,94240,85095,78903,72239,47452,36319,22466,12550],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [239, 683.38, 13.56, 428.14,
                317.38, 23417.24, 91.5, 983.14, 4386.26,
                3157.39,
                5273.52,
                928.15],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [54, 2377, 3146, 2835,
                1135, 17264, 9273, 11474, 16846,
                26747, 8274,
                22537],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_ningxia: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [48,34,1,1,1,1,72,158,462,941,963,775,434,499,679,779,711,642,595,545,358,274,170,95],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "70.37",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [4855200],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [5871],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [340754],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "1017",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "3813",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "38095681",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["待办工单", "工作看板", "本地费控转远程费控", "客户360视图", "低压非居民新装增容"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "待办工单",
            echarts5SeData1: [12529,8700,6772,4806,3230,5887,18741,41050,119908,244284,249949,201241,112654,129481,176183,202270,184545,166637,154512,141462,92923,71122,43994,24576],
            // 系列2
            echarts5SeName2: "工作看板",
            echarts5SeData2: [7763,5391,4196,2978,2001,3648,11613,25437,74301,151369,154880,124698,69806,80232,109171,125335,114352,103256,95743,87657,57580,44070,27261,15228],
            // 系列3
            echarts5SeName3: "本地费控转远程费控",
            echarts5SeData3: [6035,4191,3262,2315,1556,2836,9028,19775,57762,117676,120405,96942,54268,62373,84871,97437,88899,80272,74432,68145,44763,34261,21193,11839],
            // 系列4
            echarts5SeName4: "客户360视图",
            echarts5SeData4: [5535,3844,2992,2123,1427,2601,8280,18136,52977,107927,110430,88910,49772,57206,77840,89365,81534,73622,68265,62500,41055,31422,19437,10858],
            // 系列5
            echarts5SeName5: "低压非居民新装增容",
            echarts5SeData5: [2896,2011,1565,1111,747,1361,4332,9489,27718,56468,57778,46519,26041,29931,40726,46756,42659,38520,35717,32700,21480,16440,10170,5681],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [4636.18, 14743.28, 55956.17, 13857.28,
                32747.38, 6165.25, 3146, 18257, 12745,
                42168, 24274,
                8439.52],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0, 
                0, 47473.6, 114736.6, 137374.5, 122635.8, 175363.5,
                61383,
                123854],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_xinjiang: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1, 1, 1, 1, 1, 1, 1, 3, 8, 16, 16, 13, 7, 8, 12, 13, 12, 11, 10, 9, 6, 5, 3, 2],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "93.2",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [21067],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [14150000],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "0",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [1, 5, 15, 22, 27, 13, 19, 23, 29, 15, 23, 27, 13, 22, 32, 37, 35,
                29, 26, 32, 17, 15, 23, 30],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [3, 13, 22, 31, 28, 22, 17, 23, 29, 33, 35, 37, 30, 22, 26, 19, 27,
                25, 32, 15, 35, 40, 38, 17],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [7, 11, 17, 18, 22, 27, 25, 33, 16, 12, 25, 30, 35, 26, 17, 28, 31,
                19, 23, 30, 25, 27, 30, 20],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [9, 15, 32, 12, 22, 23, 15, 25, 27, 31, 26, 22, 30, 19, 25, 24, 32,
                40, 19, 24, 27, 22, 31, 18],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [2, 5, 7, 11, 22, 25, 20, 26, 25, 30, 22, 30, 31, 20, 29, 36, 35,
                30, 24, 22, 32, 41, 47, 39],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0,
                0],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_xizang: {
        increments2: [0, 0, 0, 0, 0],  // 增加的值数组_适用于受理工单数
        increments: [0, 0, 0, 0, 0],  // 增加的值数组_适用于缴费笔数
        increHourValues:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // 缴费笔数变化范围
          payHourValues:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0],
        // 响应时长每小时
        hoursValue: [1, 1, 1, 1, 1, 1, 1, 3, 8, 16, 16, 13, 7, 8, 12, 13, 12, 11, 10, 9, 6, 5, 3, 2],
        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "系统通用版本一致率",
            content_1Right1_num: "93.2",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.04",
            content_1Right1_rationum: "0.00",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "个性化需求及时响应率",
            content_1Right2_num: "100",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.04",
            content_1Right2_rationum: "0.00",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "用户活跃度",
            content_1Right3_num: "38.63",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.04",
            content_1Right3_rationum: "0.00",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "菜单活跃度",
            content_1Right4_num: "19.66",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.04",
            content_1Right4_rationum: "0.00",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "业务活跃度",
            content_1Right5_num: "70",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "-0.04",
            content_1Right5_rationum: "0.00",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [3565636],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [2994],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [14150000],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "0.04",
            forRight2: "0.00",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "申请容量",
            sedLeftNum: "2867477.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电投入设备 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: "0",
            tit3: "条",
            tit4: "发现供电质量问题台区数",
            tit5: "48451",
            tit6: "个",
        },

        // 右
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",
        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["业务1", "业务2", "业务3", "业务4", "业务5"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "业务1",
            echarts5SeData1: [1, 5, 15, 22, 27, 13, 19, 23, 29, 15, 23, 27, 13, 22, 32, 37, 35,
                29, 26, 32, 17, 15, 23, 30],
            // 系列2
            echarts5SeName2: "业务2",
            echarts5SeData2: [3, 13, 22, 31, 28, 22, 17, 23, 29, 33, 35, 37, 30, 22, 26, 19, 27,
                25, 32, 15, 35, 40, 38, 17],
            // 系列3
            echarts5SeName3: "业务3",
            echarts5SeData3: [7, 11, 17, 18, 22, 27, 25, 33, 16, 12, 25, 30, 35, 26, 17, 28, 31,
                19, 23, 30, 25, 27, 30, 20],
            // 系列4
            echarts5SeName4: "业务4",
            echarts5SeData4: [9, 15, 32, 12, 22, 23, 15, 25, 27, 31, 26, 22, 30, 19, 25, 24, 32,
                40, 19, 24, 27, 22, 31, 18],
            // 系列5
            echarts5SeName5: "业务5",
            echarts5SeData5: [2, 5, 7, 11, 22, 25, 20, 26, 25, 30, 22, 30, 31, 20, 29, 36, 35,
                30, 24, 22, 32, 41, 47, 39],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0,
                0],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "台",
            // y轴数据
            echarts3Ya: [0, 0, 0, 0, 0, 0, 0],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [0, 0, 0, 0, 0, 0, 0],
        },

    },
    // 其他省份数据
    defaultData_fujian: {
        increments2: [1, 0, 1, 1, 0],  // 增加的值数组_适用于受理工单数
        increments: [159, 130, 165, 123, 168],  // 增加的值数组_适用于缴费笔数
        // 受理工单数的变化范围
        increHourValues:[1058,1058,1058,1058,1058,1058,1058,1058,1058,1058,1058,1058,
            1058,1058,1058,1058,1058,1058,1058,1058,1058,1058],
        // 缴费笔数变化范围
        payHourValues:[1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,
            1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,1145084,
            1145084,1145084],
        // 响应时长每小时
        hoursValue: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],

        //  第一块标题区域
        content_1title: "营销2.0系统运营",
        // 第一块右侧区域01
        content1Right01: {
            content_1Right1_title: "用户活跃度",
            content_1Right1_num: "89.41",
            content_1Right1_yoy: "同比",
            content_1Right1_ratio: "环比",
            content_1Right1_yoynum: "0.00",
            content_1Right1_rationum: "6.17",
        },

        // 第一块右侧区域02
        content1Right02: {
            content_1Right2_title: "菜单活跃度",
            content_1Right2_num: "94.72",
            content_1Right2_yoy: "同比",
            content_1Right2_ratio: "环比",
            content_1Right2_yoynum: "0.00",
            content_1Right2_rationum: "3.98",
        },

        // 第一块右侧区域03
        content1Right03: {
            content_1Right3_title: "标准编码一致率",
            content_1Right3_num: "99.57",
            content_1Right3_yoy: "同比",
            content_1Right3_ratio: "环比",
            content_1Right3_yoynum: "0.00",
            content_1Right3_rationum: "0.07",
        },

        // 第一块右侧区域04
        content1Right04: {
            content_1Right4_title: "数据模型一致率",
            content_1Right4_num: "99.69",
            content_1Right4_yoy: "同比",
            content_1Right4_ratio: "环比",
            content_1Right4_yoynum: "0.00",
            content_1Right4_rationum: "0.22",
        },

        // 第一块右侧区域05
        content1Right05: {
            content_1Right5_title: "流程定义一致率",
            content_1Right5_num: "88.44",
            content_1Right5_yoy: "同比",
            content_1Right5_ratio: "环比",
            content_1Right5_yoynum: "0.00",
            content_1Right5_rationum: "0.19",
        },

        //  第二块标题区域
        content_2title: "营销业务运营",
        //   服务用户数
        serviceUser: "服务用户数",
        // 服务用户数值
        serviceuserNum: [22355900],
        // 受理工单数
        acceptingWork: "受理工单数",
        acceptingWorkNum: [1058],
        // 缴费笔款
        payment: "缴费笔款",
        paymentNum: [1145084],
        // 三块面板区域
        // 第一块
        content2box: "分布式光伏并网容量",
        content2boxLeft: {
            firstName: "年累计并网容量",
            sedLeftNum: "4028282.02",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxRight: {
            firstName2: "月新增并网容量",
            sedLeftNum2: "146123.59",
            sedRightNum2: "kVA",
            thirdLeft2: "同比",
            thirdRight2: "环比",
            forLeft2: "-0.45",
            forRight2: "-0.46",
        },
        // 第二块
        content2boxMain: "电动汽车充电桩申请容量",
        content2boxMainc: {
            firstName: "年累计申请容量",
            sedLeftNum: "2867747.5",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.04",
            forRight: "0.00",
        },
        content2boxMaind: {
            firstName: "月新增申请容量",
            sedLeftNum: "283829",
            sedRightNum: "kVA",
            thirdLeft: "同比",
            thirdRight: "环比",
            forLeft: "0.55",
            forRight: "0.38",
        },
        // 第三块
        content2boxRight3: "扫码用电",
        content2boxMain3: {
            firstName: "投入设备",
            sedLeftNum: "48",
            sedRightNum: "台",
        },
        content2boxMain3b: {
            firstName: "客户数",
            sedLeftNum: "245",
            sedRightNum: "户",
        },

        //中间第一个表名
        minCharts1: "分布式光伏新增并网容量 (近12月)",
        //中间第2个表名
        minCharts2: "电动汽车充电桩新增申请容量 (近12月)",
        //中间第3个表名
        minCharts3: "扫码用电交易情况 (近7日)",

        // 第三块区域
        // 左
        btmLeftTitle: "营销数据价值挖掘",
        btmLeftTip: {
            tit1: "共享数据",
            tit2: 5258,
            tit3: "万条",
            tit4: "发现供电质量问题台区数",
            tit5: "86",
            tit6: "个",
        },

        // 右 热点资讯
        btmRightTitle: "重大事件及政策",
        btmRightClk1: "热点资讯",
        btmRightClk2: "政策文件",
        btmContent1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_1: "近日,福建省发改委公布了2023年市场主体满意度调查结果,国网福建省电力有限公司“获得电力”在全部参评的16个指标中位列第一,这是国网福建电力“获得电力”市场主体满意率连续三年位居福建省各行业第一。",
        btmContent2_1: "3月29日上午,国网福建电力举行《国网福建电力2023社会责任报告》发布会。人民日报、新华社、中央广播电视总台、光明日报、经济日报、福建日报、福建电视台等中央、省级媒体记者参加发布会。",

        btmContent1_2: "",
        btmContent2_2: "",

        // echarts 数据区域
        // 左上两张仪表图
        // 左上第二张仪表的

        responseTime: "响应次数",
        left2minValue: 0,
        left2maxValue: 100,

        echartsData: 7,

        // 左上第一张
        left1echartsData: {
            // 三种状态
            state1: "异常",
            state2: "告警",
            state3: "正常",
            explainState: "系统健康情况",
            // 最大值
            left1Max: 100,
            // 最小值
            left1Min: 0,
        },
        echartsValue: 100,


        // 渐变折线图数据
        echarts5Data5: {
            // 标题
            echarts5Title: "业务响应次数",
            // Y轴单位
            echarts5Unit: "次",
            // 图例名字
            echarts5Legned: ["客户360视图", "待办工单", "全部工单", "上门服务", "客户基础信息维护"],
            // X轴
            echarts5Xa: ["00:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            // 系列1
            echarts5SeName1: "客户360视图",
            echarts5SeData1: [211, 146, 114, 81, 54, 99, 315, 690, 2016, 4108, 4203, 3384, 1894, 2177, 2963, 3401, 3103,
                2802, 2598, 2379, 1563, 1196, 740, 413],
            // 系列2
            echarts5SeName2: "待办工单",
            echarts5SeData2: [133, 93, 72, 51, 34, 63, 200, 437, 1278, 2603, 2663, 2144, 1200, 1380, 1877, 2155, 1966,
                1775, 1646, 1507, 990, 758, 469, 262],
            // 系列3
            echarts5SeName3: "全部工单",
            echarts5SeData3: [86, 60, 47, 33, 22, 41, 129, 283, 827, 1686, 1725, 1389, 777, 893, 1216, 1396, 1273,
                1150, 1066, 976, 641, 491, 304, 170],
            // 系列4
            echarts5SeName4: "上门服务",
            echarts5SeData4: [81, 56, 44, 31, 21, 38, 122, 266, 778, 1585, 1622, 1306, 731, 840, 1143, 1312, 1197,
                1081, 1003, 918, 603, 461, 285, 159],
            // 系列5
            echarts5SeName5: "客户基础信息维护",
            echarts5SeData5: [80, 55, 43, 31, 21, 37, 119, 261, 762, 1553, 1589, 1279, 716, 823, 1120, 1286, 1173,
                1059, 982, 899, 591, 452, 280, 156],
        },


        // 中间三张echarts表
        // 第一张
        echarts1Data1: {
            // x轴
            echarts1Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts1Unit: "kVA",
            // y轴数据
            echarts1Ya: [263849.45, 308394.35, 255834.34, 368493.22,
                315738.35, 305839.25, 342456.36, 314984.52, 327394.58,
                544389.66, 270937.35,
                146123.59],
        },


        // 第二张
        echarts2Data2: {
            // x轴
            echarts2Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts2Unit: "kVA",
            // y轴数据
            echarts2Ya: [192246, 174534, 174634.2,
                193523.3,
                231125, 198434, 192845,
                253849,
                247834, 335632, 205738,
                283829],
        },


        // 第三张
        echarts3Data3: {
            // x轴
            echarts3Xa: [
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
                "1月",
                "2月",
                "3月",
            ],
            echarts3Unit: "元",
            // y轴数据
            echarts3Ya: [31.51, 30.6, 23.66, 153, 43.2, 31.5, 20.3],
        },


        // 第四张
        echarts4Data4: {
            // 标题
            echarts4Title: "共享数据 (近7日)",
            // x轴
            echarts4Xa: [
                "4月3日",
                "4月4日",
                "4月5日",
                "4月6日",
                "4月7日",
                "4月8日",
                "4月9日",
            ],
            echarts4Unit: "条",
            // y轴数据
            echarts4Ya: [8224, 9672, 10243, 9102, 8612, 7542, 9048],
        },

    },

};

// export default rightJsonData;