import snippets from './snippets';

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
        name: 'placeholder',
        title: '提示文字',
        setter: 'StringSetter',
        supportVariable: true,
        description: '默认提示',
      },
      {
        name: 'defaultValue',
        title: '默认值',
        setter: 'StringSetter',
        supportVariable: true,
        description: '搜索框默认值',
      },
      {
        name: 'searchText',
        title: '按钮文案',
        setter: 'StringSetter',
        supportVariable: true,
        description: 'button 的内容',
      },
      {
        name: 'size',
        title: {
          label: '尺寸',
          tip: "size|'大', '小'",
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'medium',
                value: 'medium',
              },
            ],
          },
        },
        description: "大小\n@enumdesc '大', '小'",
        defaultValue: 'medium',
      },
      {
        name: 'shape',
        title: {
          label: '形状',
          tip: 'shape|形状',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['normal', 'simple'],
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
          componentName: 'RadioGroupSetter',
          props: {
            options: ['primary', 'secondary', 'normal', 'dark'],
          },
        },
        description: '类型 shape=normal: primary/secondary; shape=simple: normal/dark;',
        defaultValue: 'normal',
      },
      {
        name: 'hasClear',
        title: '清除按钮',
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否显示清除按钮',
        defaultValue: false,
      },
      {
        name: 'hasIcon',
        title: '搜索图标',
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否显示搜索按钮',
        defaultValue: true,
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否禁用',
        defaultValue: false,
      },
      {
        name: 'dataSource',
        display: 'block',
        title: {
          label: '搜索框下拉联想列表',
          tip: 'dataSource | 搜索框下拉联想列表',
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['JsonSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'filter',
        display: 'block',
        title: {
          label: '选择器数据',
          tip: 'filter|选择器数据',
        },
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'defaultFilterValue',
        display: 'block',
        title: '选择器默认值',
        setter: 'StringSetter',
        supportVariable: true,
        description: '选择器默认值',
      },
    ],
  },
  icon: '',
  category: '信息输入',
  snippets,
};
