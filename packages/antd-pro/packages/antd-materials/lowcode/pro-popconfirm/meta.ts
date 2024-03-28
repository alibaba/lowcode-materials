import snippets from './snippets'

export default {
  snippets,
  componentName: 'ProPopconfirm',
  title: '高级气泡确认框',
  group: '高级组件',
  category: '弹窗类',
  props: [
    {
      name: 'title',
      title: { label: '确认框内容', tip: '确认框内容' },
      propType: { type: 'oneOfType', value: ['string', 'node', 'func'] }
    },
    {
      name: 'okText',
      title: { label: '确认按钮文字', tip: '确认按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'cancelText',
      title: { label: '取消按钮文字', tip: '取消按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'onConfirm',
      title: { label: '点击确认回调', tip: '点击确认回调' },
      propType: 'func'
    }
  ],
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'ProPopconfirm',
    main: '',
    destructuring: true,
    subName: ''
  },
  configure: {
    configure: {
      props: {
        isExtends: true
      }
    },
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onConfirm',
          template:
            "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}"
        }
      ]
    }
  }
}
