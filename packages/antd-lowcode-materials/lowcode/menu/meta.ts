import { uuid } from '../_utils/utils';

import snippets from './snippets';
import { ComponentMetadata, Configure, DynamicSetter, FieldConfig, SettingTarget } from "@alilc/lowcode-types";

//todo 这是不够完善
let ItemsSetter: DynamicSetter = () => {
  return {
    componentName: 'ArraySetter',
    props: {
      itemSetter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'key',
                description: "必须保存同节点下唯一",
                isRequired: true,
                title: 'key',
                setter: 'StringSetter',
                initialValue: (val: any) => val || uuid(),
              },
              {
                name: 'label',
                title: '菜单项标题',
                isRequired: true,
                setter: ['StringSetter', "node"],
              },
              {
                name: 'danger',
                title: '展示错误状态样式',
                setter: 'BoolSetter',
              },
              {
                name: 'title',
                title: '设置收缩时展示的悬浮标题',
                setter: 'StringSetter',
              },
              {
                name: 'disabled',
                title: '是否禁用',
                setter: 'BoolSetter',
              },
              {
                name: 'icon',
                title: { label: '图标', tip: 'icon | 设置按钮的图标组件' },
                propType: 'node',
                setter: {
                  componentName: 'SlotSetter',
                  initialValue: {
                    type: 'JSSlot',
                    value: [
                      {
                        componentName: 'Icon',
                        props: {
                          type: 'SmileOutlined',
                          size: 20,
                          rotate: 0,
                          spin: false,
                        },
                      },
                    ],
                  },
                },
              },
              {
                "name": "children",
                setter: ItemsSetter,
              }


            ],
          },
        },
        initialValue: () => {
          return {
            key: 'item-' + uuid(),
            label: '菜单项标题',
            children: [],
          };
        },
      },

    }
  }
}
export default {
  snippets,
  componentName: 'Menu',
  title: '导航菜单',
  category: '导航',
  props: [
    {
      name: 'items',
      title: '菜单项',
      setter: ItemsSetter,
    } as FieldConfig,
    {
      name: 'defaultOpenKeys',
      title: {
        label: '初始展开菜单项',
        tip: '初始展开的 SubMenu 菜单项 key 数组',
      },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'defaultSelectedKeys',
      title: { label: '初始选中的菜单项', tip: '初始选中的菜单项 key 数组' },
      propType: { type: 'arrayOf', value: 'string' },
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
      propType: { type: 'oneOf', value: ['vertical', 'horizontal', 'inline'] },
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
      propType: { type: 'arrayOf', value: 'string' },
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
      propType: { type: 'arrayOf', value: 'string' },
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
      defaultValue: "click"
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
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          template: "onClick({item,key,keyPath,domEvent},${extParams}){\n// 点击 MenuItem 调用此函数\nconsole.log('onClick',item,key,keyPath,domEvent);}",
        },
        {
          name: 'onDeselect',
          template: "onDeselect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 取消选中时调用，仅在 multiple 生效\nconsole.log('onDeselect',item,key,keyPath,selectedKeys,domEvent);}",
        },
        {
          name: 'onOpenChange',
          template: "onOpenChange(openKeys,${extParams}){\n// SubMenu 展开/关闭的回调\nconsole.log('onOpenChange',openKeys);}",
        },
        {
          name: 'onSelect',
          template: "onSelect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 被选中时调用\nconsole.log('onSelect',item,key,keyPath,selectedKeys,domEvent);}",
        },
      ],
    },
  },
} as unknown as (ComponentMetadata & Configure);
