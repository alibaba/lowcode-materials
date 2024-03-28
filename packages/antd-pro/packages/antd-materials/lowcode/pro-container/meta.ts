import { ComponentMetadata } from '@alilc/lowcode-types'
import { snippets } from './snippets'

const ProContainerMeta: ComponentMetadata = {
  componentName: 'ProContainer',
  title: 'ProContainer',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '高级组件',
  category: '布局类',
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'ProContainer',
    main: '',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content'
          }
        },
        name: 'content',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'extraContent',
            'zh-CN': 'extraContent'
          }
        },
        name: 'extraContent',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': '只加载内容区域'
          },
          tip: 'loading | 只加载内容区域'
        },
        name: 'loading',
        description: '只加载内容区域',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'footer',
            'zh-CN': 'footer'
          }
        },
        name: 'footer',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'SlotSetter',
              props: {
                mode: 'node'
              },
              isRequired: false,
              initialValue: {
                type: 'JSSlot',
                value: []
              }
            }
          },
          initialValue: []
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'header',
            'zh-CN': '头部'
          },
          tip: 'header | 头部'
        },
        name: 'header',
        description: '头部',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'title',
                  title: { label: '标题', tip: '自定义标题文字' },
                  propType: { type: 'oneOfType', value: ['string', 'node'] },
                  setter: [
                    'StringSetter',
                    {
                      componentName: 'SlotSetter',
                      initialValue: {
                        type: 'JSSlot',
                        value: []
                      }
                    },
                    'VariableSetter'
                  ]
                },
                {
                  name: 'subTitle',
                  title: { label: '二级标题', tip: '自定义的二级标题文字' },
                  propType: { type: 'oneOfType', value: ['string', 'node'] },
                  setter: [
                    'StringSetter',
                    {
                      componentName: 'SlotSetter',
                      initialValue: {
                        type: 'JSSlot',
                        value: []
                      }
                    },
                    'VariableSetter'
                  ]
                },
                {
                  name: 'ghost',
                  title: { label: 'ghost风格', tip: 'ghost风格' },
                  propType: 'bool',
                  defaultValue: true,
                  setter: 'BoolSetter'
                },
                {
                  name: 'tags',
                  title: { label: 'tag 列表', tip: 'title 旁的 tag 列表' },
                  propType: 'node',
                  setter: [
                    {
                      componentName: 'SlotSetter',
                      initialValue: {
                        type: 'JSSlot',
                        value: []
                      }
                    },
                    'VariableSetter'
                  ]
                },
                {
                  name: 'extra',
                  title: {
                    label: '操作区',
                    tip: '操作区，位于 title 行的行尾'
                  },
                  propType: 'node',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'SlotSetter',
                        props: {
                          mode: 'node'
                        },
                        isRequired: false,
                        initialValue: {
                          type: 'JSSlot',
                          value: []
                        }
                      }
                    },
                    initialValue: []
                  }
                },
                {
                  name: 'breadcrumb',
                  title: { label: '面包屑的配置', tip: '面包屑的配置' },
                  propType: 'object',
                  supportVariable: false,
                  setter: [
                    {
                      componentName: 'ObjectSetter',
                      props: {
                        config: {
                          items: [
                            {
                              name: 'routes',
                              title: { label: '路由栈信息', tip: '路由栈信息' },
                              setter: {
                                componentName: 'ArraySetter',
                                props: {
                                  itemSetter: {
                                    componentName: 'ObjectSetter',
                                    initialValue: {
                                      path: 'path',
                                      breadcrumbName: 'pathName'
                                    },
                                    isRequired: true,
                                    props: {
                                      config: {
                                        items: [
                                          {
                                            name: 'path',
                                            defaultValue: 'path',
                                            title: {
                                              label: '路径',
                                              tip: 'path | 路径'
                                            },
                                            setter: 'StringSetter'
                                          },
                                          {
                                            name: 'breadcrumbName',
                                            defaultValue: 'pathName',
                                            title: {
                                              label: '名称',
                                              tip: 'breadcrumbName | 名称'
                                            },
                                            setter: 'StringSetter'
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    'JsonSetter'
                  ]
                },
                {
                  name: 'onBack',
                  title: {
                    label: '返回按钮的点击事件',
                    tip: '返回按钮的点击事件'
                  },
                  propType: 'func',
                  setter: [
                    {
                      componentName: 'FunctionSetter',
                      props: {
                        template:
                          "onBack(${extParams}){\n// 返回按钮的点击事件\nconsole.log('onBack');}"
                      }
                    },
                    'VariableSetter'
                  ]
                }
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'affixProps',
            'zh-CN': '固钉'
          },
          tip: 'affixProps | 固钉'
        },
        name: 'affixProps',
        description: '固钉',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'offsetBottom',
                  title: {
                    label: '底部触发距离',
                    tip: '距离窗口底部达到指定偏移量后触发'
                  },
                  propType: 'number',
                  setter: 'NumberSetter'
                },
                {
                  name: 'offsetTop',
                  title: {
                    label: '顶部触发距离',
                    tip: '距离窗口顶部达到指定偏移量后触发'
                  },
                  propType: 'number',
                  setter: 'NumberSetter'
                },
                {
                  name: 'target',
                  title: {
                    label: '获取触发元素',
                    tip: '设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数'
                  },
                  propType: 'func',
                  setter: [
                    {
                      componentName: 'FunctionSetter',
                      props: {}
                    },
                    'VariableSetter'
                  ]
                },
                {
                  name: 'onChange',
                  title: {
                    label: '监听状态改变',
                    tip: '固定状态改变时触发的回调函数'
                  },
                  propType: 'func',
                  setter: [
                    {
                      componentName: 'FunctionSetter',
                      props: {
                        template:
                          "onChange(affixed,${extParams}){\n// 固定状态变更回调函数\nconsole.log('onChange', affixed);}"
                      }
                    },
                    'VariableSetter'
                  ]
                }
              ]
            }
          },
          isRequired: false,
          initialValue: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabList',
            'zh-CN': 'tabs'
          },
          tip: 'tabList | tabs 的列表'
        },
        name: 'tabList',
        description: 'tabs 的列表',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'tab',
                      title: { label: 'Tab 名称', tip: 'tab | Tab 名称' },
                      propType: 'string',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'key',
                      title: { label: 'Tab Key', tip: 'key | Tab 需要的 Key' },
                      propType: 'string',
                      setter: 'StringSetter',
                      isRequired: true
                    }
                  ]
                }
              },
              isRequired: false,
              initialValue: {}
            }
          },
          initialValue: []
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabActiveKey',
            'zh-CN': '当前选中 tab 的 key'
          },
          tip: 'tabActiveKey | 当前选中 tab 的 key'
        },
        name: 'tabActiveKey',
        description: '当前选中 tab 的 key',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: ''
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onTabChange',
            'zh-CN': 'tab 修改时触发'
          },
          tip: 'onTabChange | tab 修改时触发'
        },
        name: 'onTabChange',
        description: 'tab 修改时触发',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabBarExtraContent',
            'zh-CN': 'tab 上额外的区域'
          },
          tip: 'tabBarExtraContent | tab 上额外的区域'
        },
        name: 'tabBarExtraContent',
        description: 'tab 上额外的区域',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabProps',
            'zh-CN': 'tabs 的其他配置'
          },
          tip: 'tabProps | tabs 的其他配置'
        },
        name: 'tabProps',
        description: 'tabs 的其他配置',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'type',
                      'zh-CN': 'type'
                    }
                  },
                  name: 'type',
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      options: [
                        {
                          label: 'line',
                          value: 'line'
                        },
                        {
                          label: 'card',
                          value: 'card'
                        },
                        {
                          label: 'editable-card',
                          value: 'editable-card'
                        }
                      ]
                    },
                    initialValue: 'line'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'size',
                      'zh-CN': 'size'
                    }
                  },
                  name: 'size',
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      size: 'small',
                      dataSource: [
                        {
                          label: 'small',
                          value: 'small'
                        },
                        {
                          label: 'large',
                          value: 'large'
                        },
                        {
                          label: 'middle',
                          value: 'middle'
                        }
                      ],
                      options: [
                        {
                          label: 'small',
                          value: 'small'
                        },
                        {
                          label: 'large',
                          value: 'large'
                        },
                        {
                          label: 'middle',
                          value: 'middle'
                        }
                      ]
                    },
                    initialValue: 'small'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'hideAdd',
                      'zh-CN': 'hideAdd'
                    }
                  },
                  name: 'hideAdd',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'centered',
                      'zh-CN': 'centered'
                    }
                  },
                  name: 'centered',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'addIcon',
                      'zh-CN': 'addIcon'
                    }
                  },
                  name: 'addIcon',
                  setter: {
                    componentName: 'SlotSetter',
                    props: {
                      mode: 'node'
                    },
                    isRequired: false,
                    initialValue: {
                      type: 'JSSlot',
                      value: []
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onEdit',
                      'zh-CN': 'onEdit'
                    }
                  },
                  name: 'onEdit',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                }
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {}
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'backIcon',
            'zh-CN': 'backIcon'
          }
        },
        name: 'backIcon',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "subTitle",
      //       "zh-CN": "subTitle"
      //     }
      //   },
      //   "name": "subTitle",
      //   "setter": {
      //     "componentName": "SlotSetter",
      //     "props": {
      //       "mode": "node"
      //     },
      //     "isRequired": false,
      //     "initialValue": {
      //       "type": "JSSlot",
      //       "value": []
      //     }
      //   }
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'ghost',
            'zh-CN': 'ghost'
          },
          tip: '配置头部区域的背景颜色为透明'

        },
        name: 'ghost',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false
        }
      }
    ],
    supports: {
      style: true,
      className: true
    },
    component: {
      isContainer: true
    }
  }
}

export default {
  ...ProContainerMeta,
  snippets
}
