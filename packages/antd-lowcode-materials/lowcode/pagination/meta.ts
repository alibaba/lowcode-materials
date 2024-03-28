import snippets from './snippets';

export default {
  snippets,
  componentName: 'Pagination',
  title: '分页',
  category: '导航',
  props: [
    {
      title: '数据',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultPageSize',
          title: {
            label: '默认每页条数',
            tip: 'defaultPageSize | 默认每页条数',
          },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 10,
        },
        {
          name: 'pageSize',
          title: { label: '每页条数', tip: 'pageSize | 每页条数' },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 10,
        },
        {
          name: 'total',
          title: { label: '数据总数', tip: 'total | 数据总数' },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 15,
        },
        {
          name: 'defaultCurrent',
          title: {
            label: '默认当前页',
            tip: 'defaultCurrent | 默认的当前页数',
          },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 1,
        },
        {
          name: 'current',
          title: { label: '当前页数', tip: 'current | 当前页数' },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 1,
        },
      ],
    },
    {
      title: '功能',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'disabled',
          title: {
            label: '是否禁用',
            tip: 'disabled | 是否禁用',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'showSizeChanger',
          title: {
            label: '页数切换',
            tip: 'showSizeChanger | 是否展示 pageSize 切换器',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'showQuickJumper',
          title: {
            label: '快速跳转',
            tip: 'showQuickJumper | 是否可以快速跳转至某页',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'hideOnSinglePage',
          title: {
            label: '单页隐藏',
            tip: 'hideOnSinglePage | 只有一页时是否隐藏分页器',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'showLessItems',
          title: {
            label: '显示较少页面',
            tip: 'showLessItems | 是否显示较少页面内容',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'pageSizeOptions',
          title: {
            label: '可选分页数',
            tip: 'pageSizeOptions | 指定 pageSize切换器 可选择的每页条数',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
      ],
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'simple',
          title: { label: '简单分页', tip: 'simple | 简单分页' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'size',
          title: { label: '分页尺寸', tip: 'size | 分页尺寸' },
          propType: {
            type: 'oneOf',
            value: ['default', 'small'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'default',
        },
        {
          name: 'showTotal',
          title: {
            label: '显示总数',
            tip: 'showTotal | 用于显示数据总量和当前数据顺序',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'showTotal(total,range,${extParams}){\n// 用于格式化显示表格数据总量\nreturn `共 ${total} 条`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'showTitle',
          title: {
            label: '页码提示',
            tip: 'showTitle | 是否显示原生 tooltip 页码提示',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'responsive',
          title: {
            label: '宽度自适应',
            tip: 'responsive | 当 size 未指定时，根据屏幕宽度自动调整尺寸',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"页码或 pageSize 改变的回调",

          template:
            "onChange(page,pageSize,${extParams}){\n// 页码或 pageSize 改变的回调\nconsole.log('onChange',page,pageSize);}",
        },
        {
          name: 'onShowSizeChange',
          description:"pageSize 变化的回调",

          template:
            "onShowSizeChange(current,size,${extParams}){\n// pageSize 变化的回调\nconsole.log('onShowSizeChange',current,size);}",
        },
      ],
    },
  },
};
