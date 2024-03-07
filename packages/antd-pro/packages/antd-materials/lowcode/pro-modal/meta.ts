import { snippets } from './snippets'
import { uuid } from '../utils'

const ProModalMeta = {
  componentName: 'ProModal',
  title: 'ProModal',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '高级组件',
  category: '弹窗类',
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'ProModal',
    main: '',
    destructuring: true,
    subName: ''
  },
  props: [
    {
      name: 'ref',
      title: {
        label: 'ref',
        tip: "ref | 通过 this.$('xxx') 获取到组件实例"
      },
      defaultValue: () => {
        return `pro_modal_${uuid()}`
      },
      setter: ['StringSetter', 'VariableSetter']
    },
    {
      name: 'title',
      title: '标题',
      propType: 'string',
      setter: ['StringSetter', 'VariableSetter']
    },
    // {
    //   name: 'width',
    //   title: { label: '弹窗尺寸', tip: 'width | 弹窗尺寸' },
    //   propType: {
    //     type: 'oneOf',
    //     value: [1080, 520, 250]
    //   },
    //   setter: [
    //     {
    //       componentName: 'RadioGroupSetter',
    //       props: {
    //         options: [
    //           {
    //             title: '大',
    //             value: 1080
    //           },
    //           {
    //             title: '中',
    //             value: 520
    //           },
    //           {
    //             title: '小',
    //             value: 250
    //           }
    //         ]
    //       }
    //     },
    //     'VariableSetter'
    //   ],
    //   defaultValue: 520
    // },
    {
      name: 'width',
      title: { label: '宽度', tip: 'width | 宽度' },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
      setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
      defaultValue: 520
    },
    {
      name: 'mask',
      title: { label: '显示遮罩', tip: 'mask | 显示遮罩' },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    },
    {
      name: 'visible',
      title: { label: '是否可见', tip: '对话框是否可见' },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'centered',
      title: { label: '垂直居中', tip: '垂直居中展示 Modal' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'closable',
      title: { label: '显示关闭按钮', tip: '是否显示右上角的关闭按钮' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'confirmLoading',
      title: { label: '确定按钮loading', tip: '确定按钮loading' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'destroyOnClose',
      title: { label: '销毁子元素', tip: '关闭时销毁 Modal 里的子元素' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'forceRender',
      title: { label: '强制渲染Modal', tip: '强制渲染Modal' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'keyboard',
      title: { label: 'esc关闭', tip: '是否支持键盘 esc 关闭' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'maskClosable',
      title: { label: '点击蒙层关闭', tip: '点击蒙层是否允许关闭' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'zIndex',
      title: { label: 'z-index', tip: '设置 Modal 的 `z-index`' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    // {
    //   name: 'okType',
    //   title: { label: '确认按钮类型', tip: '确认按钮类型' },
    //   propType: { type: 'oneOf', value: ['default', 'small'] },
    //   setter: {
    //     componentName: 'SelectSetter',
    //     props: {
    //       options: [
    //         {
    //           title: 'primary',
    //           value: 'primary'
    //         },
    //         {
    //           title: 'ghost',
    //           value: 'ghost'
    //         },
    //         {
    //           title: 'dashed',
    //           value: 'dashed'
    //         },
    //         {
    //           title: 'link',
    //           value: 'link'
    //         },
    //         {
    //           title: 'text',
    //           value: 'text'
    //         },
    //         {
    //           title: 'default',
    //           value: 'default'
    //         }
    //       ]
    //     }
    //   }
    // },
    // {
    //   name: 'okButtonProps',
    //   title: { label: '确认按钮props', tip: '确认按钮props' },
    //   propType: 'object',
    //   setter: {
    //     componentName: 'ObjectSetter',
    //     props: {
    //       config: {
    //         items: [
    //           {
    //             name: 'disabled',
    //             title: { label: '是否禁用', tip: 'disabled' },
    //             propType: 'bool',
    //             setter: [
    //               {
    //                 componentName: 'BoolSetter',
    //                 initialValue: false
    //               },
    //               'VariableSetter'
    //             ],
    //             isRequired: true
    //           }
    //         ]
    //       }
    //     }
    //   }
    // },
    {
      name: 'wrapClassName',
      title: { label: '外层容器类名', tip: '对话框外层容器的类名' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'getContainer',
      title: {
        label: '指定挂载节点',
        tip: '指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom'
      },
      propType: { type: 'oneOfType', value: ['node', 'func'] }
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
      name: 'onCancel',
      title: {
        label: '取消按钮回调',
        tip: '点击遮罩层或右上角叉或取消按钮的回调'
      },
      propType: 'func'
    },
    {
      name: 'onOk',
      title: { label: '点击确定回调', tip: '点击确定回调' },
      propType: 'func'
    }
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      rootSelector: '.ant-modal-content',
      nestingRule: {
        parentWhitelist: ['Page', 'Component']
      }
    },
    supports: {
      style: true,
      events: [
        {
          name: 'afterClose',
          templete:
            "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}"
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

export default {
  ...ProModalMeta,
  snippets
}
