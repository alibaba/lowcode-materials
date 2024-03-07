
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Textstyle = [
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "color",
        "zh-CN": "颜色"
      }
    },
    "name": "color",
    "setter": {
      "componentName": "ColorSetter",
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "fontStyle",
        "zh-CN": "字体风格"
      }
    },
    "name": "fontStyle",
    initialValue: 'normal',
    "setter": {
      "componentName": "SelectSetter",

      props: {
        options: [
          {
            title: 'normal',
            value: 'normal',
          },
          {
            title: 'italic',
            value: 'italic',
          },
          {
            title: 'oblique',
            value: 'oblique',
          },

        ],
      },
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": " fontWeight",
        "zh-CN": "字体粗细"
      }
    },
    "name": "fontWeight",
    initialValue: 'normal',
    "setter": {
      "componentName": "SelectSetter",

      props: {
        options: [
          {
            title: 'normal',
            value: 'normal',
          },
          {
            title: 'bold',
            value: 'bold',
          },
          {
            title: 'bolder',
            value: 'bolder',
          },
          {
            title: 'lighter',
            value: 'lighter',
          },
        ],
      },
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "fontSize",
        "zh-CN": "字体大小"
      }
    },
    "name": "fontSize",
    "setter": {
      "componentName": "NumberSetter",
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "lineHeight",
        "zh-CN": "行高"
      }
    },
    "name": "lineHeight",
    "setter": {
      "componentName": "NumberSetter",
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "width",
        "zh-CN": "文本宽度"
      }
    },
    "name": "width",
    "setter": {
      "componentName": "NumberSetter",
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "height",
        "zh-CN": "文本高度"
      }
    },
    "name": "height",
    "setter": {
      "componentName": "NumberSetter",
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "textBorderColor",
        "zh-CN": "文本描边"
      }
    },
    "name": "textBorderColor",
    "setter": {
      "componentName": "ColorSetter",
    }
  },
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": "textBorderWidth",
        "zh-CN": "描边宽度"
      }
    },
    "name": "textBorderWidth",
    "setter": {
      "componentName": "NumberSetter",
    }
  },
]


const xyData = [
  {
    "title": {
      "label": {
        "type": "i18n",
        "en-US": " show",
        "zh-CN": "显示"
      }
    },
    "name": "show",
    "setter": {
      "componentName": "BoolSetter",

    }
  },
  {
    name: 'name',
    title: { label: '名称', tip: '' },
    setter: 'StringSetter',
  },
  {
    name: 'type',
    title: { label: '类型', tip: '' },
    "setter": {
      "componentName": "SelectSetter",

      props: {
        options: [
          {
            title: '数值轴',
            value: 'value',
          },
          {
            title: '类目轴',
            value: 'category',
          },
          {
            title: '时间轴',
            value: 'time',
          },
          {
            title: '对数轴',
            value: 'log',
          },
        ]
      }
    }
  },
  {
    name: 'data',
    title: { label: '数据', tip: '' },
    propType: 'Json',
    initialValue: [],

    setter: 'JsonSetter',
  },
]

const EChartsMeta: IPublicTypeComponentMetadata = {
  "componentName": "ECharts",
  "title": "图表",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/echarts",
    "version": "0.1.0",
    "exportName": "ECharts",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  group: '原子组件',
  category: '展示',
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "advanced",
            "zh-CN": "高级模式"
          }
        },
        "name": "advanced",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "option",
            "zh-CN": "图表配置"
          }
        },
        "name": "option",
        "setter": [
          {
            "componentName": "JsonSetter",
            "initialValue": {}
          },
          'FunctionSetter', 'VariableSetter'

        ],
        condition: {
          type: 'JSFunction',
         value: 'target => !!target.getProps().getPropValue("advanced")',
        },
      },
      // {
      //   name: 'tooltip',
      //   title: { label: '数据集', tip: '数据集' },
      //   supportVariable: true,
      //   "condition": {
      //     "type": 'JSFunction',
      //    "value": 'target => !target.getProps().getPropValue("advanced")',
      //   },
      //   setter: [
      //     {
      //       componentName: 'ObjectSetter',
      //       props: {
      //         config: {
      //           items: [
      //             {
      //               name: ' source',
      //               title: { label: '二维表', tip: '二维数组，其中第一行/列可以给出 维度名，也可以不给出，直接就是数据：' },
      //               setter: [
      //                 'JsonSetter',
      //                 'FunctionSetter',
      //                 'VariableSetter'
      //               ],
      //             },
      //             {
      //               name: ' dimensions',
      //               title: { label: '维度信息', tip: '定义 series.data 或者 dataset.source 的每个维度的信息。' },
      //               setter: [
      //                 'JsonSetter',
      //                 'FunctionSetter',
      //                 'VariableSetter'
      //               ],
      //             },
                
                
      //           ],
      //         },
      //       },
      //     },
      //     "JsonSetter"
      //   ]
      // },


      {
        name: 'tooltip',
        title: { label: '工具', tip: '工具提示' },
        supportVariable: true,
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'show',
                    title: { label: '显示', tip: '是否显示' },
                    propType: 'bool',
                    initialValue: true,
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'trigger',
                    title: { label: '触发方式', tip: '触发方式' },
                    initialValue: 'item',
                    "setter": {
                      "componentName": "SelectSetter",
                
                      props: {
                        options: [
                          {
                            title: '无类目触发',
                            value: 'item',
                          },
                          {
                            title: '坐标轴触发',
                            value: 'axis',
                          },
                          {
                            title: '不触发',
                            value: 'none',
                          },
                        ]
                      }
                    }
                }
                
                ],
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'legend',
        title: { label: '图例', tip: '图例' },
        supportVariable: true,
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": " show",
                        "zh-CN": "显示"
                      }
                    },
                    "name": "show",
                    "setter": {
                      "componentName": "BoolSetter",
                
                    }
                  },
                  {
                    name: 'data',
                    title: { label: '数据', tip: '' },
                    propType: 'Json',
                    initialValue: [],
  
                    setter: 'JsonSetter',
                  },
                ],
              },
            },
          },
          "JsonSetter"
        ]
      },

      {
        name: 'title',
        supportVariable: true,
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        title: { label: '标题设置', tip: '表格列的配置描述，具体项见下表' },
        setter:[
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "show",
                        "zh-CN": "显示"
                      }
                    },
                    "name": "show",
                    "setter": {
                      "componentName": "BoolSetter",
                    }
                  },
  
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "text",
                        "zh-CN": "标题"
                      }
                    },
                    "name": "text",
                    "setter": {
                      "componentName": "StringSetter",
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "textStyle.color",
                        "zh-CN": "标题颜色"
                      }
                    },
                    "name": "textStyle.color",
                    "setter": {
                      "componentName": "ColorSetter",
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "subtext",
                        "zh-CN": "副标题"
                      }
                    },
                    "name": "subtext",
                    "setter": {
                      "componentName": "StringSetter",
                    }
                  },
                ],
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'xAxis',
        supportVariable: true,
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        title: { label: 'X轴', tip: '直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。' },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  ...xyData,
                ]
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'yAxis',
        supportVariable: true,
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        title: { label: 'Y轴', tip: '直角坐标系 grid 中的 Y 轴' },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: xyData
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'series',
        supportVariable: true,
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        title: { label: '类型', tip: '图表类型' },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'type',
                        title: { label: '图表', tip: '图表' },
                        propType: {
                          type: 'oneOf',
                          value: ['line', 'bar', 'pie'],
                        },
                        isRequired: true,
  
                        setter: [
                          {
                            componentName: 'SelectSetter',
                            props: {
                              options: [
                                {
                                  title: '折线图',
                                  value: 'line',
                                },
                                {
                                  title: '柱状图',
                                  value: 'bar',
                                },
                                {
                                  title: '饼图',
                                  value: 'pie',
                                },
                                {
                                  title: '气泡图',
                                  value: 'scatter',
                                },
                                {
                                  title: '气泡图',
                                  value: 'scatter',
                                },
                                {
                                  title: 'K线图',
                                  value: 'candlestick',
                                },
                                {
                                  title: '仪表盘',
                                  value: 'gauge',
                                },
                                {
                                  title: '漏斗图',
                                  value: 'funnel',
                                },
                                {
                                  title: '树图',
                                  value: 'tree',
                                },
                                {
                                  title: '旭日图',
                                  value: 'sunburst',
                                },
                                {
                                  title: '雷达图',
                                  value: 'radar',
                                },
                              ],
                            },
                          },
                          'VariableSetter',
                        ],
                      },
  
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "data",
                            "zh-CN": "数据"
                          }
                        },
                        "name": "data",
                        initialValue: [],
                        "setter": {
                          "componentName": "JsonSetter",
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "name",
                            "zh-CN": "名称"
                          }
                        },
                        "name": "name",
                        isRequired: true,
  
                        "setter": {
                          "componentName": "StringSetter",
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "yAxisIndex",
                            "zh-CN": "y轴索引"
                          }
                        },
                        "name": "yAxisIndex",
                        initialValue: 0,
                        "setter": {
                          "componentName": "NumberSetter",
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "encode",
                            "zh-CN": "维度编码"
                          }
                        },
                        "name": "encode",
                        "setter": [
                          "JsonSetter",

                        ]
                      },
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: '折线图',
                              value: 'line',
                            },
                            {
                              title: '柱状图',
                              value: 'bar',
                            },
                            {
                              title: '饼图',
                              value: 'pie',
                            },
                          ],
                        },
                      },
                      {
                        name: 'stack',
                        title: { label: '数据堆叠', tip: '数据堆叠，同个类目轴上系列配置相同的 stack 值可以堆叠放置。关于如何定制数值的堆叠方式，参见 stackStrategy。                      ' },
                        propType: {
                          type: 'oneOf',
                          value: [],
                        },
                        setter: [
                          {
                            componentName: 'SelectSetter',
                            props: {
                              options: [
  
                                {
                                  title: '堆叠正负',
                                  value: 'samesign',
                                },
                                {
                                  title: '所有值',
                                  value: 'all',
                                },
                                {
                                  title: '堆积正值',
                                  value: 'positive',
                                },
                                {
                                  title: '堆叠负值',
                                  value: 'negative',
                                }
                              ],
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      'VariableSetter',
                    ],
                  },
  
  
                },
                initialValue: { name: '标题' },
              },
            },
          },"JsonSetter"
        ]
      },
      {
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        name: 'color',
        title: '颜色',
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ColorSetter',
                initialValue: '#0079f2',
              },
            },
          },"JsonSetter"
        ]
      },

      {
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        name: 'backgroundColor',
        title: '背景',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        "condition": {
          "type": 'JSFunction',
         "value": 'target => !target.getProps().getPropValue("advanced")',
        },
        name: 'textStyle',
        supportVariable: true,

        title: { label: '全局字体样式', tip: '工具提示' },
        // name: 'textStyle',
        // title: '全局字体样式',
        // type: 'group',
        // extraProps: {
        //   display: 'entry',
        // },
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: Textstyle,
            },
          },
        },


        // itemSetter: {
        //   componentName: 'ObjectSetter',
        //   props: {
        //     config: {
        //       items: Textstyle,



        //     }}},
      },
    ],
    publicMethods: [
      {
        name: 'refresh',
        desc: '刷新',
        code: 'refresh()',
      },
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "图表",
    "screenshot": "https://cdn.disscode.com/FvRQ-vh132wSuT4XOyTOCpifKYmV",
    "schema": {
      "componentName": "ECharts",
      "props": {
        advanced: false,
        title: {
          text: 'ECharts 入门示例',
          show: true,
        },
        tooltip: {
          trigger:'item',
          show:true
        },
        legend: {
          show:true,
          data: ['销量']
        },
        xAxis: {
          "type": "category",
          "name": "Appthen",
          show:true,
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          "type": "value",
          "name": "Appthen",
          show: true,
          
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ],
        option: {
          "xAxis": {
            "type": "category",
            "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          "yAxis": {
            "type": "value",
            "name": "Appthen"
          },
          "series": [{
            "data": [120, 200, 150, 80, 70, 110, 130],
            "type": "bar",
            "showBackground": true,
            "backgroundStyle": {
              "color": "rgba(220, 220, 220, 0.8)"
            }
          }]
        }
      }
    }
  }
];

export default {
  ...EChartsMeta,
  snippets
};
