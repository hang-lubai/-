// 立即执行函数
// 图表1
(function (){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置和数据
    var option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "平均干球温度",
          type: "bar",
          barWidth: "35%",
          data: [5.2, 6.6, 10.8, 16.3, 21.2, 24.9],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
    // 3.把配置给实例化对象
    myChart.setOption(option);
    // 4.让图表随着屏幕自动的适应
    window.addEventListener("resize",function(){
      myChart.resize();
    });
    
    // 数据变化
    var dataAll = [
      { year: "上半年", data: [5.2, 6.6, 10.8, 16.3, 21.2, 24.9] },
      { year: "下半年", data: [27.6, 28.2, 24.1, 19.2, 12.7, 6.5] }
    ];

    $(".bar h2 ").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
})();

// 图表2
(function (){

  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6",'#ea7ccc'];
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
    var option = {
      grid: {
        top: "10%",
        left: "22%",
        bottom: "10%"
        // containLabel: true
      },
      // 不显示x轴的相关信息
      xAxis: {
        show: false
      },
      yAxis: [
        {
          type: "category",
          inverse: true,
          data: ["7月", "8月", "9月", "10月","11月","12月"],
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff"
          }
        },
        {
          data: [27.6, 28.2, 24.1, 19.2, 12.7, 6.5],
          inverse: true,
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff"
          }
        }
      ],
      series: [
        {
          name: "条",
          type: "bar",
          data: [27.6, 28.2, 24.1, 19.2, 12.7, 6.5],
          yAxisIndex: 0,
          // 修改第一组柱子的圆角
          itemStyle: {
            barBorderRadius: 20,
            // 此时的color 可以修改柱子的颜色
            color: function(params) {
              // params 传进来的是柱子对象
              // console.log(params);
              // dataIndex 是当前柱子的索引号
              return myColor[params.dataIndex];
            }
          },
          // 柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 10,
          // 显示柱子内的文字
          label: {
            show: true,
            position: "inside",
            // {c} 会自动的解析为 数据  data里面的数据
            formatter: "{c}℃"
          }
        },
        {
          name: "框",
          type: "bar",
          barCategoryGap: 50,
          barWidth: 15,
          yAxisIndex: 1,
          data: [30, 30, 30, 30, 30, 30],
          itemStyle: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
      myChart.resize();
    })
})();

//图表3
(function (){
  var yearData = [
    {
      year: "2001", // 年份
      data: [
        // 两个数组是因为有两条线
        [4.14,4.48,5.80,8.52,11.81,16.06,19.02,19.35,14.50,10.89,7.26,3.92 ]
      ]
    }
  ];
  var myChart = echarts.init(document.querySelector(".line .chart"));
  
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "平均含湿量",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      }
    ]
  };

  myChart.setOption(option);
  
  window.addEventListener("resize",function(){
    myChart.resize();
  });
  
  // 5.点击切换效果
  $(".line h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();

//图表4
(function (){
  
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30",
          "31"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(26, 138, 230, 0.93)",
            fontSize: 12
          }
        },
        // x轴线的颜色为 
        axisLine: {
          lineStyle: {
            color: "rgba(26, 138, 230, 0.93)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(26, 138, 230, 0.93)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(26, 138, 230, 0.93)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "7月",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [97, 
          98 ,
          94 ,
          75 ,
          86 ,
          90 ,
          79 ,
          83 ,
          82 ,
          94 ,
          92 ,
          95 ,
          87 ,
          90 ,
          85 ,
          85 ,
          76 ,
          75 ,
          81 ,
          78 ,
          80 ,
          80 ,
          74 ,
          70 ,
          64 ,
          70 ,
          68 ,
          68 ,
          67 ,
          72 ,
          81 ,
          
        ]
      },
      {
        name: "8月",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [69 ,
          72 ,
          64 ,
          69 ,
          72 ,
          71 ,
          72 ,
          72 ,
          71 ,
          77 ,
          83 ,
          75 ,
          81 ,
          73 ,
          79 ,
          79 ,
          81 ,
          85 ,
          87 ,
          85 ,
          74 ,
          78 ,
          85 ,
          96 ,
          95 ,
          94 ,
          89 ,
          81 ,
          85 ,
          89 ,
          83 
        ]
      }
    ]
  };
  myChart.setOption(option);
  
  window.addEventListener("resize",function(){
    myChart.resize();
  })
})();

//图表5
(function (){
  
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de','#0aa3b5'],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(51, 51, 51, 1)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "太阳月总辐射-上半年",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 214.9, name: "1月" },
          { value: 239.7, name: "2月" },
          { value: 356.4, name: "3月" },
          { value: 402.9, name: "4月" },
          { value: 475.1, name: "5月" },
          { value: 471.9, name: "6月" }
        ]
      }
    ]
  };


  myChart.setOption(option);
  
  window.addEventListener("resize",function(){
    myChart.resize();
  })
})();

//图表6
(function (){
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));
  var option = {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [0, '95'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 484.0, name: '7 月' },
          { value: 490.6, name: '8 月' },
          { value: 379.7, name: '9 月' },
          { value: 311.6, name: '10 月' },
          { value: 241.3, name: '11 月' },
          { value: 260.6, name: '12 月' },
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize",function(){
    myChart.resize();
  })
})();

// 中间的图表
(function (){
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var data = [
      {
        name: '1\n月',
        itemStyle: {
          color: '#da0d68'
        },
        children: [
           {
            name: '月平均干球温度',
            value: 1,
            itemStyle: {
              color: '#f99e1c'
            },
            children:[
              {
                name:'5.2(℃)',
                value: 1,
                itemStyle: {
                  color: '#f99e1c'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            value: 1,
            itemStyle: {
              color: '#975e6d'
            },
            children:[
              {
                name:'4.14(g/kg干空气)',
                value: 1,
                itemStyle: {
                  color: '#975e6d'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            value: 1,
            itemStyle: {
              color: '#ef5a78'
            },
            children:[
              {
                name:'75.1(%)',
                value: 1,
                itemStyle: {
                  color: '#ef5a78'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#e0719c'
            },
            children: [
              {
                name: '214.9(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#e0719c'
                }
              }
            ]
          }
        ]
      },
      {
        name: '2\n月',
        itemStyle: {
          color: '#da1d23'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#dd4c51'
            },
            children: [
              {
                name: '6.6(℃)',
                value: 1,
                itemStyle: {
                  color: '#dd4c51'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#c94a44'
            },
            children: [
              {
                name: '4.48(g/kg干空气)',
                value: 1,
                itemStyle: {
                  color: '#c94a44'
                }
              },
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#dd4c51'
            },
            children: [
              {
                name: '73.3(%)',
                value: 1,
                itemStyle: {
                  color: '#dd4c51'
                }
              },
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#f7a128'
            },
            children: [
              {
                name: '239.7(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#f7a128'
                }
              },
            ]
          }
        ]
      },
      {
        name: '3\n月',
        itemStyle: {
          color: '#ebb40f'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#e1c315'
            },
            children: [
              {
                name: '10.8(℃)',
                value: 1,
                itemStyle: {
                  color: '#e1c315'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#b09733'
            },
            children: [
              {
                name: '5.80(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#b09733'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#d0b24f'
            },
            children: [
              {
                name: '5.1(%),',
                value: 1,
                itemStyle: {
                  color: '#d0b24f'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#8b6439'
            },
            children: [
              {
                name: '356.4(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#8b6439'
                }
              }
            ]
          }
        ]
      },
      {
        name: '4\n月',
        itemStyle: {
          color: '#187a2f'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#a2b029'
            },
            children: [
              {
                name: '16.3(℃)',
                value: 1,
                itemStyle: {
                  color: '#a2b029'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#718933'
            },
            children: [
              {
                name: '8.52(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#718933'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#3aa255'
            },
            children: [
              {
                name: '72.2(%),',
                value: 1,
                itemStyle: {
                  color: '#3aa255'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#5e9a80'
            },
            children: [
              {
                name: '402.9(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#5e9a80'
                }
              }
            ]
          }
        ]
      },
      {
        name: '5\n月',
        itemStyle: {
          color: '#0aa3b5'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#9db2b7'
            },
            children: [
              {
                name: '21.2(℃)',
                value: 1,
                itemStyle: {
                  color: '#9db2b7'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#76c0cb'
            },
            children: [
              {
                name: '11.81(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#76c0cb'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#80a89d'
            },
            children: [
              {
                name: '74.4(%),',
                value: 1,
                itemStyle: {
                  color: '#80a89d'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#def2fd'
            },
            children: [
              {
                name: '475.1(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#def2fd'
                }
              }
            ]
          }
        ]
      },
      {
        name: '6\n月',
        itemStyle: {
          color: '#c94930'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#caa465'
            },
            children: [
              {
                name: '24.9(℃)',
                value: 1,
                itemStyle: {
                  color: '#caa465'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#dfbd7e'
            },
            children: [
              {
                name: '16.06(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#dfbd7e'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#be8663'
            },
            children: [
              {
                name: '80.8(%),',
                value: 1,
                itemStyle: {
                  color: '#be8663'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#b9a449'
            },
            children: [
              {
                name: '471.9(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#b9a449'
                }
              }
            ]
          }
        ]
      },
      {
        name: '7\n月',
        itemStyle: {
          color: '#ad213e'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#794752'
            },
            children: [
              {
                name: '27.6(℃)',
                value: 1,
                itemStyle: {
                  color: '#794752'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#cc3d41'
            },
            children: [
              {
                name: '19.02(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#cc3d41'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#b14d57'
            },
            children: [
              {
                name: '81.1(%),',
                value: 1,
                itemStyle: {
                  color: '#b14d57'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#e5762e'
            },
            children: [
              {
                name: '484.0(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#e5762e'
                }
              }
            ]
          }
        ]
      },
      {
        name: '8\n月',
        itemStyle: {
          color: '#a87b64'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#c78869'
            },
            children: [
              {
                name: '28.2.2(℃)',
                value: 1,
                itemStyle: {
                  color: '#c78869'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#bb764c'
            },
            children: [
              {
                name: '19.35(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#bb764c'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#d4ad12'
            },
            children: [
              {
                name: '79.6(%),',
                value: 1,
                itemStyle: {
                  color: '#d4ad12'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#9d5433'
            },
            children: [
              {
                name: '490.6(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#9d5433'
                }
              }
            ]
          }
        ]
      },
      {
        name: '9\n月',
        itemStyle: {
          color: '#e65832'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#d45a59'
            },
            children: [
              {
                name: '24.1(℃)',
                value: 1,
                itemStyle: {
                  color: '#d45a59'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#f89a80'
            },
            children: [
              {
                name: '14.50(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#f89a80'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#f37674'
            },
            children: [
              {
                name: '76.7(%),',
                value: 1,
                itemStyle: {
                  color: '#f37674'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#d0545f'
            },
            children: [
              {
                name: '379.7(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#d0545f'
                }
              }
            ]
          }
        ]
      },
      {
        name: '10\n月',
        itemStyle: {
          color: '#caa465'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#692a19'
            },
            children: [
              {
                name: '19.2(℃)',
                value: 1,
                itemStyle: {
                  color: '#692a19'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#c89f83'
            },
            children: [
              {
                name: '10.89(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#c89f83'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#9d5433'
            },
            children: [
              {
                name: '79.0(%),',
                value: 1,
                itemStyle: {
                  color: '#9d5433'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#ae341f'
            },
            children: [
              {
                name: '311.6(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#ae341f'
                }
              }
            ]
          }
        ]
      },
      {
        name: '11\n月',
        itemStyle: {
          color: '#9db2b7'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#def2fd'
            },
            children: [
              {
                name: '12.7(℃)',
                value: 1,
                itemStyle: {
                  color: '#def2fd'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#039fb8'
            },
            children: [
              {
                name: '7.26(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#039fb8'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#7a9bae'
            },
            children: [
              {
                name: '78.3(%),',
                value: 1,
                itemStyle: {
                  color: '#7a9bae'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#5e777b'
            },
            children: [
              {
                name: '241.3(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#5e777b'
                }
              }
            ]
          }
        ]
      },
      {
        name: '12\n月',
        itemStyle: {
          color: '#3aa255'
        },
        children: [
          {
            name: '月平均干球温度',
            itemStyle: {
              color: '#7ac141'
            },
            children: [
              {
                name: '6.5(℃)',
                value: 1,
                itemStyle: {
                  color: '#7ac141'
                }
              }
            ]
          },
          {
            name: '月平均含湿量',
            itemStyle: {
              color: '#28b44b'
            },
            children: [
              {
                name: '3.92(g/kg干空气),',
                value: 1,
                itemStyle: {
                  color: '#28b44b'
                }
              }
            ]
          },
          {
            name: '月平均相对湿度',
            itemStyle: {
              color: '#038549'
            },
            children: [
              {
                name: '65.3(%),',
                value: 1,
                itemStyle: {
                  color: '#038549'
                }
              }
            ]
          },
          {
            name: '太阳月总辐射',
            itemStyle: {
              color: '#62aa3c'
            },
            children: [
              {
                name: '260.6(MJ/m2)',
                value: 1,
                itemStyle: {
                  color: '#62aa3c'
                }
              }
            ]
          }
        ]
      }
    ];
    var option = {
      title: {
        subtext: 'Source: 杭州市典型气象年气象数据.xls',
        textStyle: {
          fontSize: 14,
          align: 'center'
        },
        subtextStyle: {
          align: 'center'
        },
        sublink: '杭州市典型气象年气象数据.xls'
      },
      series: {
        type: 'sunburst',
        data: data,
        radius: [0, '95%'],
        sort: undefined,
        emphasis: {
          focus: 'ancestor'
        },
        levels: [
          {},
          {
            r0: '15%',
            r: '35%',
            itemStyle: {
              borderWidth: 2
            },
            label: {
              rotate: 'tangential'
            }
          },
          {
            r0: '35%',
            r: '70%',
            label: {
              align: 'right'
            }
          },
          {
            r0: '70%',
            r: '72%',
            label: {
              position: 'outside',
              padding: 3,
              silent: false
            },
            itemStyle: {
              borderWidth: 3
            }
          }
        ]
      }
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
      myChart.resize();
    }) 
})();