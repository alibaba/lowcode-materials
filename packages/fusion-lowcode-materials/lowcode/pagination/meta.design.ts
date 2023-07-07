export default {
  group: '原子组件',
  componentName: 'Pagination',
  title: '翻页器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
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
      propType: 'number',
      description: '（受控）当前页码',
    },
    {
      name: 'defaultCurrent',
      title: {
        label: '按钮样式',
        tip: '前进后退按钮样式',
      },
      title: {
        label: '初始页码',
        tip: '（非受控）初始页码',
      },
      propType: 'number',
      description: '（非受控）初始页码',
      defaultValue: 1,
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
    },
    {
      name: 'totalRender',
      propType: 'func',
      title: {
        label: '总数渲染',
        tip: '总数的渲染函数\n@param {Number} total 总数\n@param {Array} range 当前数据在总数中的区间',
      },
    },
    {
      name: 'pageShowCount',
      propType: 'number',
      title: {
        label: '显示页数',
        tip: '页码显示的数量，更多的使用...代替',
      },
      defaultValue: 5,
    },
    {
      name: 'pageSize',
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
    props: [
      {
        name: 'type',
        title: {
          label: '类型',
          tip: '分页组件类型',
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
              {
                label: '迷你',
                value: 'mini',
              },
            ],
          },
        },
        description: '分页组件类型',
        defaultValue: 'normal',
      },
      {
        name: 'size',
        title: {
          label: '尺寸',
          tip: '分页组件大小',
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
        description: '分页组件大小',
        defaultValue: 'medium',
      },
      {
        name: 'pageSizeSelector',
        title: {
          label: '扩展内容',
          tip: '每页显示选择器类型',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '无',
                value: false,
              },
              {
                label: '平铺',
                value: 'filter',
              },
              {
                label: '下拉选择',
                value: 'dropdown',
              },
            ],
          },
        },
        description: '每页显示选择器类型',
        defaultValue: false,
      },
      {
        name: 'shape',
        title: {
          label: '样式',
          tip: '前进后退按钮样式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '文本&图标',
                value: 'normal',
              },
              {
                label: '仅图标',
                value: 'arrow-only',
              },
              {
                label: '无边框',
                value: 'no-border',
              },
            ],
          },
        },
        description: '前进后退按钮样式',
        defaultValue: 'normal',
      },
    ],
  },
  icon: '',
  category: '导航',
  snippets: require('./snippets'),
};
