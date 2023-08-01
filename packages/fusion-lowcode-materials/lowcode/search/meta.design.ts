import snippets from './snippets.design';

export default {
  group: '原子组件',
  componentName: 'Search',
  title: '搜索',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Search',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    supports: {
      style: true,
      events: ['onChange', 'onSearch', 'onFilterChange'],
    },
    props: [
      {
        name: 'shape',
        title: {
          label: '模式',
          tip: 'shape|形状',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '普通',
                value: 'normal',
              },
              {
                label: '简单',
                value: 'simple',
              },
            ],
          },
        },
        description: '形状',
        defaultValue: 'normal',
      },
      {
        name: 'type',
        title: {
          label: '类型',
          tip: 'type|类型 shape=normal: primary/secondary; shape=simple: normal/dark;',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '普通',
                value: 'normal',
              },
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '次要',
                value: 'secondary',
              },
              {
                label: '反底',
                value: 'dark',
              },
            ],
          },
        },
        defaultValue: 'normal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '按钮尺寸',
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
        name: 'disabled',
        title: '状态',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '普通',
                value: false,
              },
              {
                label: '禁用',
                value: true,
              },
            ],
          },
        },
        defaultValue: false,
      },
      {
        name: 'filter',
        title: '是否有菜单',
        defaultValue: false,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '否',
                value: false,
              },
              {
                label: '是',
                value: [
                  {
                    label: 'Products',
                    value: 'Products',
                  },
                  {
                    label: 'Products1',
                    value: 'Products1',
                  },
                  {
                    label: 'Products2',
                    value: 'Products2',
                  },
                  {
                    label: 'Products3',
                    value: 'Products3',
                  },
                  {
                    label: 'Products4',
                    value: 'Products4',
                  },
                  {
                    label: 'Products5',
                    value: 'Products5',
                  },
                  {
                    label: 'Products6',
                    value: 'Products6',
                  },
                  {
                    label: 'Products7',
                    value: 'Products7',
                  },
                  {
                    label: 'Products8',
                    value: 'Products8',
                  },
                  {
                    label: 'Products9',
                    value: 'Products9',
                  },
                  {
                    label: 'Products10',
                    value: 'Products10',
                  },
                  {
                    label: 'Suppliers',
                    value: 'Suppliers',
                  },
                ],
              },
            ],
          },
        },
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'placeholder',
        title: '提示文字',
        setter: 'StringSetter',
        defaultValue: '请输入关键词',
      },
      {
        name: 'searchText',
        title: '按钮文案',
        setter: 'StringSetter',
        description: 'button 的内容',
      },
    ],
  },
  icon: '',
  category: '信息输入',
  snippets,
};
