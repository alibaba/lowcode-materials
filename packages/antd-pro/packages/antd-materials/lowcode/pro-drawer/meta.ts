import { snippets } from './snippets'
import { uuid } from '../utils'

export default {
  snippets,
  componentName: 'ProDrawer',
  title: 'ProDrawer',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '高级组件',
  category: '弹窗类',
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'ProDrawer',
    main: '',
    destructuring: true,
    subName: ''
  },
  props: [
    {
      title: '基础',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'ref',
          title: {
            label: 'ref',
            tip: "ref | 通过 this.$('xxx') 获取到组件实例"
          },
          defaultValue: () => {
            return `pro_drawer_${uuid()}`
          },
          setter: 'StringSetter'
        },
        {
          name: 'visible',
          title: { label: '是否可见', tip: 'visible | Drawer 是否可见' },
          propType: 'bool',
          setter: 'BoolSetter'
        },
        {
          name: 'title',
          title: { label: '标题', tip: 'title | 标题' },
          propType: { type: 'oneOfType', value: ['string', 'node'] },
          setter: [
            'StringSetter',
            {
              componentName: 'SlotSetter',
              title: '标题插槽',
              initialValue: {
                type: 'JSSlot',
                value: []
              }
            },
            'VariableSetter'
          ]
        }
      ]
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'placement',
          title: { label: '位置', tip: 'placement | 抽屉的显示位置' },
          propType: {
            type: 'oneOf',
            value: ['top', 'right', 'bottom', 'left']
          },
          defaultValue: 'right',
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '上方',
                  value: 'top'
                },
                {
                  title: '右侧',
                  value: 'right'
                },
                {
                  title: '下方',
                  value: 'bottom'
                },
                {
                  title: '左侧',
                  value: 'left'
                }
              ]
            }
          }
        },
        {
          name: 'size',
          title: { label: '大小', tip: 'size | 抽屉的大小' },
          propType: { type: 'oneOf', value: ['default', 'large'] },
          defaultValue: 'default',
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: '默认',
                  value: 'default'
                },
                {
                  title: '超大',
                  value: 'large'
                }
              ]
            }
          }
        },
        {
          name: 'width',
          title: { label: '宽度', tip: 'width | 宽度' },
          propType: { type: 'oneOfType', value: ['string', 'number'] },
          setter: ['StringSetter', 'NumberSetter', 'VariableSetter']
        },
        {
          name: 'height',
          title: {
            label: '高度',
            tip: 'height | 高度, 在 placement 为 top 或 bottom 时使用'
          },
          propType: { type: 'oneOfType', value: ['string', 'number'] },
          setter: ['StringSetter', 'NumberSetter', 'VariableSetter']
        },
        {
          name: 'zIndex',
          title: { label: 'z-index', tip: '设置 Drawer 的 `z-index`' },
          propType: 'number',
          setter: 'NumberSetter'
        }
      ]
    },
    {
      title: '功能',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'mask',
          title: { label: '显示遮罩', tip: 'mask | 是否显示遮罩' },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter'
        },
        {
          name: 'maskClosable',
          title: {
            label: '点击遮罩关闭',
            tip: 'maskClosable | 点击遮罩是否关闭抽屉'
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter'
        },
        {
          name: 'autoFocus',
          title: {
            label: '自动获得焦点',
            tip: 'autoFocus | 抽屉展开后是否将焦点切换至其 Dom 节点'
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter'
        },
        {
          name: 'keyboard',
          title: {
            label: '键盘Esc关闭',
            tip: 'keyboard | 是否支持键盘按 Esc 关闭'
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter'
        },
        {
          name: 'destroyOnClose',
          title: {
            label: '关闭时销毁',
            tip: 'destroyOnClose | 关闭时销毁 Drawer 里的子元素'
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter'
        },
        {
          name: 'closable',
          title: {
            label: '关闭按钮',
            tip: 'closable | 是否显示左上角的关闭按钮'
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter'
        },
        {
          name: 'forceRender',
          title: { label: '预渲染', tip: 'forceRender | 预渲染 Drawer 内元素' },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter'
        }
      ]
    },
    {
      title: '插槽扩展',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'closeIcon',
          title: { label: '关闭图标', tip: 'closeIcon | 自定义关闭图标' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: '关闭图标插槽',
            initialValue: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Icon',
                  props: {
                    type: 'CloseOutlined',
                    size: 16
                  }
                }
              ]
            }
          }
        },
        {
          name: 'extra',
          title: { label: '操作区域', tip: 'extra | 抽屉右上角的操作区域' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: '操作区域插槽',
            initialValue: {
              type: 'JSSlot',
              value: []
            }
          }
        },
        {
          name: 'footer',
          title: { label: '抽屉的页脚', tip: 'footer | 抽屉的页脚' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: '抽屉页脚插槽',
            initialValue: {
              type: 'JSSlot',
              value: []
            }
          }
        }
      ]
    },
    {
      name: 'operations',
      title: { label: '操作项', tip: '操作项的配置描述，具体项见下表' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'content',
                    title: { label: '文本', tip: 'content | 文本' },
                    propType: 'string',
                    setter: 'StringSetter',
                    isRequired: true
                  },
                  {
                    name: 'action',
                    title: { label: '操作', tip: 'action | 操作' },
                    propType: 'string',
                    setter: {
                      componentName: 'SelectSetter',
                      props: {
                        options: [
                          {
                            title: '提交',
                            value: 'submit'
                          },
                          {
                            title: '取消',
                            value: 'cancel'
                          },
                          {
                            title: '自定义',
                            value: 'custom'
                          }
                        ]
                      }
                    },
                    isRequired: true
                  },
                  {
                    name: 'type',
                    title: { label: '类型', tip: 'type | 按钮类型' },
                    propType: {
                      type: 'oneOf',
                      value: ['primary', 'default']
                    },
                    setter: {
                      componentName: 'SelectSetter',
                      props: {
                        options: [
                          {
                            title: 'primary',
                            value: 'primary'
                          },
                          {
                            title: 'default',
                            value: 'default'
                          }
                        ]
                      }
                    },
                    isRequired: true
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      title: '其它',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'className',
          title: { label: '容器类名', tip: 'className | 对话框外层容器的类名' },
          propType: 'string',
          setter: 'StringSetter'
        },
        {
          name: 'drawerStyle',
          title: '弹出层样式',
          type: 'group',
          extraProps: {
            display: 'entry'
          },
          items: [
            {
              name: 'drawerStyle',
              title: {
                label: '样式设置',
                tip: 'drawerStyle | 用于设置 Drawer 弹出层的样式'
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block'
              }
            }
          ]
        },
        {
          name: 'contentWrapperStyle',
          title: '包裹层样式',
          type: 'group',
          extraProps: {
            display: 'entry'
          },
          items: [
            {
              name: 'contentWrapperStyle',
              title: {
                label: '样式设置',
                tip: 'contentWrapperStyle | 可用于设置 Drawer 包裹内容部分的样式'
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block'
              }
            }
          ]
        },
        {
          name: 'headerStyle',
          title: '头部样式',
          type: 'group',
          extraProps: {
            display: 'entry'
          },
          items: [
            {
              name: 'headerStyle',
              title: {
                label: '样式设置',
                tip: 'headerStyle | 用于设置 Drawer 头部的样式'
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block'
              }
            }
          ]
        },
        {
          name: 'bodyStyle',
          title: '内容样式',
          type: 'group',
          extraProps: {
            display: 'entry'
          },
          items: [
            {
              name: 'bodyStyle',
              title: {
                label: '样式设置',
                tip: 'bodyStyle | 可用于设置 Drawer 内容部分的样式'
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block'
              }
            }
          ]
        },
        {
          name: 'footerStyle',
          title: '页脚样式',
          type: 'group',
          extraProps: {
            display: 'entry'
          },
          items: [
            {
              name: 'footerStyle',
              title: {
                label: '样式设置',
                tip: 'footerStyle | 抽屉页脚部件的样式'
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block'
              }
            }
          ]
        },
        {
          name: 'maskStyle',
          title: '遮罩样式',
          type: 'group',
          extraProps: {
            display: 'entry'
          },
          items: [
            {
              name: 'maskStyle',
              title: {
                label: '样式设置',
                tip: 'maskStyle | 遮罩样式'
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block'
              }
            }
          ]
        }
      ]
    }
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      nestingRule: {
        parentWhitelist: ['Page', 'Component']
      },
      rootSelector: '.ant-drawer-content'
    },
    supports: {
      style: true,
      events: [
        {
          name: 'afterVisibleChange',
          template:
            "afterVisibleChange(visible,${extParams}){\n// 切换抽屉时动画结束后的回调\nconsole.log('afterVisibleChange',visible);}"
        },
        {
          name: 'onCancel',
          template:
            "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}"
        },
        {
          name: 'onOk',
          template:
            "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}"
        }
      ]
    }
  }
}
