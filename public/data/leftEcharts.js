
// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
export function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
    // 计算
    const midRatio = (startRatio + endRatio) / 2;

    const startRadian = startRatio * Math.PI * 2;
    const endRadian = endRatio * Math.PI * 2;
    const midRadian = midRatio * Math.PI * 2;

    // 如果只有一个扇形，则不实现选中效果。
    if (startRatio === 0 && endRatio === 1) {
        // eslint-disable-next-line no-param-reassign
        isSelected = false;
    }

    // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
    // eslint-disable-next-line no-param-reassign
    k = typeof k !== 'undefined' ? k : 1 / 3;

    // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
    const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
    const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

    // 计算高亮效果的放大比例（未高亮，则比例为 1）
    const hoverRate = isHovered ? 1.05 : 1;

    // 返回曲面参数方程
    return {
        u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32,
        },

        v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20,
        },

        x(u, v) {
            if (u < startRadian) {
                return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },

        y(u, v) {
            if (u < startRadian) {
                return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },

        z(u, v) {
            if (u < -Math.PI * 0.5) {
                return Math.sin(u);
            }
            if (u > Math.PI * 2.5) {
                return Math.sin(u) * h * 0.1;
            }
            // 当前图形的高度是Z根据h（每个value的值决定的）
            return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
        },
    };
}

// 生成模拟 3D 饼图的配置项
export function getPie3D(title, pieData, internalDiameterRatio) {
    const series = [];
    // 总和
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    const legendData = [];
    const k =
        typeof internalDiameterRatio !== 'undefined'
            ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
            : 1 / 3;

    // 为每一个饼图数据，生成一个 series-surface 配置
    for (let i = 0; i < pieData.length; i += 1) {
        sumValue += pieData[i].value;

        const seriesItem = {
            name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
            type: 'surface',
            parametric: true,
            wireframe: {
                show: false,
            },
            pieData: pieData[i],
            pieStatus: {
                selected: false,
                hovered: false,
                k,
            },
        };

        if (typeof pieData[i].itemStyle !== 'undefined') {
            const { itemStyle } = pieData[i];

            // eslint-disable-next-line no-unused-expressions
            typeof pieData[i].itemStyle.color !== 'undefined' ? (itemStyle.color = pieData[i].itemStyle.color) : null;
            // eslint-disable-next-line no-unused-expressions
            typeof pieData[i].itemStyle.opacity !== 'undefined'
                ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                : null;

            seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
    }
    // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
    // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
    // console.log(series);
    for (let i = 0; i < series.length; i += 1) {
        endValue = startValue + series[i].pieData.value;

        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = getParametricEquation(
            series[i].pieData.startRatio,
            series[i].pieData.endRatio,
            false,
            false,
            k,
            // 我这里做了一个处理，使除了第一个之外的值都是10
            // series[i].pieData.value === series[0].pieData.value ? 35 : 10
            series[i].pieData.value
        );

        startValue = endValue;

        legendData.push(series[i].name);
    }

    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    const option = {
        // animation: false,
        title: {
            text: '',
            x: 'center',
            y: "18%",
            textStyle: {
                color: '#FFFFFF',
                fontSize:12,
            }
        },
        // title: [
        //     {
        //         text: "{a|" +title.label + "}",
        //         show: true,
        //         x: "center",
        //         y: "20%",
        //         textStyle: {
        //             rich: {
        //                 a: {
        //                     fontSize: 12,
        //                     color: "#FFFFFF",
        //                     fontWeight: "bold",
        //                 },
        //             },
        //         },
        //     },
        //     {
        //         text: "{a|" +title.value +' '+ '%'+ "}",
        //         show: true,
        //         x: "center",
        //         y: "35%",
        //         textStyle: {
        //             rich: {
        //                 a: {
        //                     fontSize: 12,
        //                     color: "#FFFFFF",
        //                     fontWeight: "bold",
        //                 },
        //             },
        //         },
        //     },
        // ],
        legend: {
            itemHeight: 12, //圆点大小
            itemWidth: 12,
            show:true,
            orient: 'vertical', // 图例列表的布局朝向，'horizontal'为水平,'vertical'为垂直
            right: 0,         // 图例组件距离右侧的距离
            top: 'center',     // 图例组件垂直居中
            textStyle:{
                color:'#FFFFFF',
                fontSize: 12,
            },
            data: legendData,
        },
        tooltip: {
            formatter: (params) => {
                if (params.seriesName !== 'mouseoutSeries') {
                    return `${
                        params.seriesName
                    }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                        params.color
                    };"></span>${option.series[params.seriesIndex].pieData.value}`;
                }
                return '';
            },
        },
        xAxis3D: {
            min: -1,
            max: 1,
        },
        yAxis3D: {
            min: -1,
            max: 1,
        },
        zAxis3D: {
            min: -1,
            max: 1,
        },
        // grid3D: {
        //     viewControl: {
        //         // 配置 3D 图表的视角
        //         projection: 'orthographic'
        //     }
        // },
        grid3D: {
            show: false,
            boxHeight: 10,
            top: '-15%',
            viewControl: {
                // 3d效果可以放大、旋转等，请自己去查看官方配置
                alpha: 35,
                projection: 'orthographic',
                // beta: 30,
                rotateSensitivity: 1,
                zoomSensitivity: 0,
                panSensitivity: 0,
                // autoRotate: true,
                distance: 150,
            },
            // 后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
            postEffect: {
                // 配置这项会出现锯齿，请自己去查看官方配置有办法解决
                enable: false,
                bloom: {
                    enable: true,
                    bloomIntensity: 0.1,
                },
                SSAO: {
                    enable: true,
                    quality: 'medium',
                    radius: 2,
                },
                // temporalSuperSampling: {
                //   enable: true,
                // },
            },
        },
        series,
    };
    return option;
}

export function getNearMounth() { //近30天
    var timeArr = []
    var time = new Date();
    var year = time.getFullYear();
    var lastMonth = time.getMonth();
    var nowMonth = time.getMonth() + 1;

    function getDaysInOneMonth(year, lastMonth) { //获取某年某月的天数函数
        lastMonth = parseInt(lastMonth, 10);
        var newTime = new Date(year, lastMonth, 0);
        return newTime.getDate();
    }
    var lastDays = getDaysInOneMonth(year, lastMonth); //上个月天数
    var nowDays = getDaysInOneMonth(year, nowMonth); //本月天数

    var day = time.getDate() + 1;
    for (let i = 0; i < nowDays; i++) {
        day = day - 1;
        if (day <= 0) {
            day = day + lastDays;
        }
        timeArr.push(day);
    }
    timeArr = timeArr.reverse();
    timeArr = timeArr.splice(1, nowDays)
    console.log(timeArr,'66');
    return timeArr;
}

export function get30Date(){
    let date = new Array(31).fill(0).map((_, idx) =>
        new Date(new Date().getTime() - idx * (24 * 60 * 60 * 1000)).toLocaleDateString().replaceAll("/", "-")
    ).reverse()

    let date1 = []
    date.forEach(item => {
        let item1 = item.substr(7)
        date1.push(item1)
    })
    date1.pop()

    return date1
}























