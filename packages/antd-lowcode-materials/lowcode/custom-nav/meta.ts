

const snippets = [
  {
    "title": "高级菜单",
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
    "schema": {
      "componentName": "CustomNav",
      "props": {
        items: [{
          "key": "1",
          "label": "菜单项1",
          "icon": "BarsOutlined",
          "children": [{
              "key": "1-1",
              "label": "子菜单项1",
              "icon": "AccountBookOutlined"
          }, {
              "key": "1-2",
              "label": "子菜单项2",
              "icon": "CalculatorOutlined"
          }]
      }, {
          "key": "2",
          "label": "菜单项2",
          "icon": "BulbOutlined"
      }],
        triggerSubMenuAction: 'click',
        mode: "inline",
        theme: "light",
        "icon.style":{width:"20px"},
        "icon.name": "icon-tuichu",
      }
    }
  }
];


export default {
  snippets,
  "componentName": "CustomNav",
  "title": "高级菜单",
  "docUrl": "",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
  category: '导航',
  props: [
    {
      name: 'items',
      title: '菜单项',
      setter: {
        componentName: 'JsonSetter',
      },
      extraProps: {
        getValue(target) {
          const { node } = target;
          const gutter = node.getPropValue('items');
          if (typeof gutter === undefined || gutter =='' || gutter === null) {
            return [];
          } 
          return gutter;
        }
      },
    },
    {
      name: 'defaultOpenKeys',
      title: {
        label: '初始展开菜单项',
        tip: '初始展开的 SubMenu 菜单项 key 数组',
      },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'defaultSelectedKeys',
      title: { label: '初始选中的菜单项', tip: '初始选中的菜单项 key 数组' },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'forceSubMenuRender',
      title: {
        label: '子菜单预渲染',
        tip: '在子菜单展示之前就渲染进 DOM',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'inlineCollapsed',
      title: { label: '是否收起', tip: 'inline 时菜单是否收起状态' },
      propType: 'bool',
    },
    {
      name: 'inlineIndent',
      title: { label: '缩进宽度', tip: 'inline 模式的菜单缩进宽度' },
      propType: 'number',
    },
    {
      name: 'mode',
      title: {
        label: '菜单类型',
        tip: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
      },
      defaultValue: 'inline',
      propType: { type: 'oneOf', value: ['vertical', 'horizontal', 'inline'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '垂直',
              value: 'vertical',
            },
            {
              title: '水平',
              value: 'horizontal',
            },
            {
              title: '内嵌',
              value: 'inline',
            }
          ],
        },
      },
    },
    {
      name: 'multiple',
      title: { label: '是否允许多选', tip: '是否允许多选' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'openKeys',
      title: {
        label: '当前展开的菜单项',
        tip: '当前展开的 SubMenu 菜单项 key 数组',
      },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'selectable',
      title: { label: '是否允许选中', tip: '是否允许选中' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'selectedKeys',
      title: { label: '当前选中项', tip: '当前选中的菜单项 key 数组' },
      // propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'style',
      title: { label: '根节点样式', tip: '根节点样式' },
      propType: 'object',
    },
    {
      name: 'subMenuCloseDelay',
      title: {
        label: '关闭延时',
        tip: '用户鼠标离开子菜单后关闭延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'subMenuOpenDelay',
      title: {
        label: '开启延时',
        tip: '用户鼠标进入子菜单后开启延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'theme',
      title: { label: '主题颜色', tip: '主题颜色' },
      propType: { type: 'oneOf', value: ['light', 'dark'] },
      defaultValue: 'light',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '正常模式',
              value: 'light',
            },
            {
              title: '黑色模式',
              value: 'dark',
            }
          ],
        },
      },
    },
    {
      name: 'onClick',
      title: { label: '点击 MenuItem 调用函数', tip: '点击 MenuItem 调用函数' },
      propType: 'func',
    },
    {
      name: 'onDeselect',
      title: {
        label: '取消选中时调用函数',
        tip: '取消选中时调用，仅在 multiple 生效',
      },
      propType: 'func',
    },
    {
      name: 'triggerSubMenuAction',
      title: {
        label: '触发方式',
        tip: '展开/关闭的触发行为',
      },
      propType: { type: 'oneOf', value: ['hover', 'click'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '触摸',
              value: 'hover',
            },
            {
              title: '点击',
              value: 'click',
            }
          ],
        },
      },
    },
    {
      name: 'onOpenChange',
      title: { label: 'SubMenu 展开/关闭的回调', tip: '展开/关闭的回调' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: { label: '被选中时调用函数', tip: '被选中时调用函数' },
      propType: 'func',
    },
    {
      name: 'overflowedIndicator',
      title: { label: '折叠图标', tip: '自定义 Menu 折叠时的图标' },
      propType: 'node',
    },
    // {
    //   name: 'svg',
    //   title: { label: 'svg启用', tip: 'icon使用svg,icon配置失效' },
    //   propType: 'node',
    // },

    {
      name: 'icon.rotate',
      title: {
        label: '旋转角度',
        tip: '图标旋转角度',
      },
      propType: 'number',
    },
    {
      name: 'icon.spin',
      title: { label: '旋转动画', tip: '是否有旋转动画' },
      propType: 'bool',
    },
    {
      name: 'icon.style',
      title: '图标样式',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'icon.style',
          title: {
            label: '图标样式',
            tip: 'icon.style | 用于设置 Drawer 头部的样式',
          },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },

  ],
  "configure": {

    "supports": {
      "style": true,
      events: [
        {
          name: 'onClick',
          description:"点击 MenuItem 调用此函数",

          template:
            "onClick({item,key,keyPath,domEvent},${extParams}){\n// 点击 MenuItem 调用此函数\nconsole.log('onClick',item,key,keyPath,domEvent);}",
        },
        {
          name: 'onDeselect',
          description:"取消选中时调用",

          template:
            "onDeselect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 取消选中时调用，仅在 multiple 生效\nconsole.log('onDeselect',item,key,keyPath,selectedKeys,domEvent);}",
        },
        {
          name: 'onOpenChange',
          description:"展开/关闭的回调",

          template:
            "onOpenChange(openKeys,${extParams}){\n// SubMenu 展开/关闭的回调\nconsole.log('onOpenChange',openKeys);}",
        },
        {
          name: 'onSelect',
          description:"被选中时调用",

          template:
            "onSelect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 被选中时调用\nconsole.log('onSelect',item,key,keyPath,selectedKeys,domEvent);}",
        },
      ],
    },
    "component": {}
  }
};



