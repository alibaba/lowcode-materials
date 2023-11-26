module.exports = {
  group: '原子组件',
  componentName: 'Pagination',
  title: '翻页器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Pagination',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'rtl',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'type',
      title: {
        label: '组件类型',
        tip: '分页组件类型',
      },
      propType: {
        type: 'oneOf',
        value: ['normal', 'simple', 'mini'],
      },
      description: '分页组件类型',
      defaultValue: 'normal',
    },
    {
      name: 'shape',
      title: {
        label: '按钮样式',
        tip: '前进后退按钮样式',
      },
      propType: {
        type: 'oneOf',
        value: ['normal', 'arrow-only', 'arrow-prev-only', 'no-border'],
      },
      description: '前进后退按钮样式',
      defaultValue: 'normal',
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: '分页组件大小',
      },
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '分页组件大小',
      defaultValue: 'medium',
    },
    {
      name: 'current',
      title: {
        label: '当前页码',
        tip: '（受控）初始页码',
      },
      description: '（受控）当前页码',
      supportVariable: true,

      propType: 'number',
      defaultValue: 1,
    },
    {
      name: 'defaultCurrent',
      supportVariable: true,

      title: {
        label: '初始页码',
        tip: '（非受控）初始页码',
      },
      propType: 'number',
      description: '（非受控）初始页码',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '页码发生改变时的回调函数\n@param {Number} current 改变后的页码数\n@param {Object} e 点击事件对象',
    },
    {
      name: 'total',
      propType: 'number',
      description: '总记录数',
      defaultValue: 100,
      supportVariable: true,

    },
    {
      name: 'totalRender',
      propType: 'func',
      title: {
        label: '总数渲染',
        tip: '总数的渲染函数\n@param {Number} total 总数\n@param {Array} range 当前数据在总数中的区间',
      },
      supportVariable: true,

    },
    {
      name: 'pageShowCount',
      supportVariable: true,

      propType: 'number',
      title: {
        label: '显示页数',
        tip: '页码显示的数量，更多的使用...代替',
      },
      defaultValue: 5,
    },
    {
      name: 'pageSizeList',
      
      title: '每页显示选择器可选值',
      setter: 'JsonSetter',
      supportVariable: true,
    },
    {
      name: 'pageSize',
      supportVariable: true,

      title: {
        label: '单页记录',
        tip: '一页中的记录数',
      },
      propType: 'number',
      description: '一页中的记录数',
      defaultValue: 10,
    },
    {
      name: 'pageSizeSelector',
      supportVariable: true,

      title: {
        label: '选择器类型',
        tip: '每页显示选择器类型',
      },
      propType: {
        type: 'oneOf',
        value: [false, 'filter', 'dropdown'],
      },
      description: '每页显示选择器类型',

      defaultValue: false,
    },
    {
      name: 'pageNumberRender',
      propType: 'func',
      title: {
        label: '自定义页码',
        tip: '自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染\n@param {Number} index 分页的页码，从1开始\n@return {ReactNode} 返回渲染结果',
      },
    },
    {
      name: 'pageSizePosition',
      title: {
        label: '选择器位置',
        tip: '每页显示选择器在组件中的位置',
      },
      propType: {
        type: 'oneOf',
        value: ['start', 'end'],
      },
      description: '每页显示选择器在组件中的位置',
      defaultValue: 'start',
    },
    {
      name: 'onPageSizeChange',
      propType: 'func',
      description:
        '每页显示记录数量改变时的回调函数\n@param {Number} pageSize 改变后的每页显示记录数',
    },
    {
      name: 'hideOnlyOnePage',
      propType: 'bool',
      title: {
        label: '单页隐藏',
        tip: '当分页数为1时，是否隐藏分页器',
      },
      defaultValue: false,
    },
    {
      name: 'showJump',
      propType: 'bool',
      title: {
        label: '显示跳转',
        tip: 'type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域',
      },
      defaultValue: true,
    },
    {
      name: 'link',
      title: {
        label: '跳转链接',
        tip: '设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串',
      },
      propType: 'string',
      description: '设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'rtl',
          condition: () => false,
        },
        {
          name: 'current',
          // condition: () => false,
          supportVariable: true,

          title: {
            label: '当前页面',
            tip: '（受控）当前页码',
          },
          
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: ['NumberSetter', 'ExpressionSetter'],
            },
          },
        },
        {
          name: 'total',
          title: {
            label: '总记录数',
            tip: '总记录数',
          },
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: ['NumberSetter', 'ExpressionSetter'],
            },
          },
        },
      ],
    },
  },
  icon: '',
  category: '引导',
  snippets: require('./snippets'),
};
