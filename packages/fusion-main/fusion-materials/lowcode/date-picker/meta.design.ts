import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'DatePicker',
  title: '日期选择框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'DatePicker',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [

  ],
  configure: {
    props: [
      {
        name: 'showTime',
        title: '模式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '日期选择',
                value: false,
              },
              {
                label: '时间选择',
                value: true,
              },
            ],
          },
        },
      },
      {
        name: 'visible',
        title: {
          label: '状态',
          tip: '属性: visible',
        },
        defaultValue: false,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { value: false, label: '普通' },
              { value: true, label: '展开' },
            ],
          },
        },
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 按钮尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '小',
                value: 'small',
              },
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'label',
        title: {
          label: '内联文案',
          tip: 'label|输入框内置标签',
        },
        setter: {
          componentName: 'StringSetter',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'placeholder',
        title: {
          label: '占位提示',
          tip: 'placeholder|输入提示',
        },
        setter: {
          componentName: 'StringSetter',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'disabled',
        title: {
          label: '是否禁用',
          tip: 'disabled|是否禁用',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
    ],
  },
  icon: '',
  category: '信息输入',
  snippets,
};
