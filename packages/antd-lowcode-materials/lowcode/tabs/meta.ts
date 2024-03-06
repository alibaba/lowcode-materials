import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Tabs',
  title: '标签页',
  category: '数据展示',
  props: [
    {
      name: 'items',
      title: '标签项',
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'key',
                    title: 'key',
                    setter: 'StringSetter',
                    initialValue: (val) => val || uuid(),
                    supportVariable: true
                  },
                  {
                    name: 'closeIcon',
                    title: '自定义关闭图标',
                    setter: 'SlotSetter',
                  },
                  {
                    name: 'icon',
                    title: '自定义图标',
                    setter: 'SlotSetter',
                  },
                  {
                    name: 'destroyInactiveTabPane',
                    title: '隐藏销毁',
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'label',
                    title: '标题',
                    setter: 'StringSetter',
                    initialValue: '标签项',
                    supportVariable: true
                  },
                  // {
                  //   name: 'closeable',
                  //   title: '是否可删除',
                  //   condition(target) {
                  //     return target.getProps().getPropValue('type') === 'editable-card';
                  //   },
                  //   setter: 'BoolSetter',
                  //   initialValue: true,
                  // },
                  {
                    name: 'disabled',
                    title: '禁用',
                    setter: 'BoolSetter',
                    initialValue: false,
                    supportVariable: true
                  },
                  {
                    name: 'forceRender',
                    title: '隐藏时保留',
                    propType: 'bool',
                    setter: 'BoolSetter',
                    initialValue: false,
                    supportVariable: true
                  },
                  {
                    name: 'children',
                    title: '内容',
                    setter: {
                      componentName: 'SlotSetter',
                      initialValue: {
                        type: 'JSSlot',
                        value: [],
                      },
                    },
                  },

                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                label: '标签项',
                disabled: false,
                forceRender: false,
                children: {
                  type: 'JSSlot',
                  value: [],
                },
              };
            },
          },
        },
      }
    },
    // {
    //   name: 'tabs',
    //   title: '标签项',
    //   setter: {
    //     componentName: 'ArraySetter',
    //     props: {
    //       itemSetter: {
    //         componentName: 'ObjectSetter',
    //         props: {
    //           config: {
    //             items: [
    //               {
    //                 name: 'key',
    //                 title: 'key',
    //                 setter: 'StringSetter',
    //                 initialValue: (val) => val || uuid(),
    //                 supportVariable: true
    //               },
    //               {
    //                 name: 'tab',
    //                 title: '标题',
    //                 setter: 'StringSetter',
    //                 initialValue: '标签项',
    //                 supportVariable: true
    //               },
    //               // {
    //               //   name: 'closeable',
    //               //   title: '是否可删除',
    //               //   condition(target) {
    //               //     return target.getProps().getPropValue('type') === 'editable-card';
    //               //   },
    //               //   setter: 'BoolSetter',
    //               //   initialValue: true,
    //               // },
    //               {
    //                 name: 'disabled',
    //                 title: '禁用',
    //                 setter: 'BoolSetter',
    //                 initialValue: false,
    //                 supportVariable: true
    //               },
    //               {
    //                 name: 'forceRender',
    //                 title: '隐藏时保留',
    //                 propType: 'bool',
    //                 setter: 'BoolSetter',
    //                 initialValue: false,
    //                 supportVariable: true
    //               },
    //             ],
    //           },
    //         },
    //         initialValue: () => {
    //           return {
    //             key: uuid(),
    //             tab: '标签项',
    //             closeable: true,
    //             disabled: false,
    //             forceRender: false,
    //           };
    //         },
    //       },
    //     },
    //   },
    //   extraProps: {
    //     getValue(target, fieldValue) {
    //       const map = target.node.children.map((child) => {
    //         const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
    //         return {
    //           key,
    //           tab: child.getPropValue('tab'),
    //           closeable: child.getPropValue('closeable'),
    //           disabled: child.getPropValue('disabled'),
    //           forceRender: child.getPropValue('forceRender'),
    //         };
    //       });
    //       return map;
    //     },
    //     setValue(target, value) {
    //       const { node } = target;
    //       const map = {};

    //       if (!Array.isArray(value)) {
    //         value = [];
    //       }
    //       value.forEach((item) => {
    //         const tabItem = Object.assign({}, item);
    //         map[item.key] = tabItem;
    //       });

    //       node.children.mergeChildren(
    //         (child) => {
    //           const key = String(child.getPropValue('key'));
    //           if (Object.hasOwnProperty.call(map, key)) {
    //             child.setPropValue('tab', map[key].tab);
    //             child.setPropValue('closeable', map[key].closeable);
    //             child.setPropValue('disabled', map[key].disabled);
    //             child.setPropValue('forceRender', map[key].forceRender);
    //             delete map[key];
    //             return false;
    //           }
    //           return true;
    //         },
    //         () => {
    //           const items = [];
    //           for (const key in map) {
    //             if (Object.hasOwnProperty.call(map, key)) {
    //               items.push({
    //                 componentName: 'Tabs.TabPane',
    //                 props: map[key],
    //               });
    //             }
    //           }
    //           return items;
    //         },
    //         (child1, child2) => {
    //           const a = value.findIndex(
    //             (item) => String(item.key) === String(child1.getPropValue('key')),
    //           );
    //           const b = value.findIndex(
    //             (item) => String(item.key) === String(child2.getPropValue('key')),
    //           );
    //           return a - b;
    //         },
    //       );
    //     },
    //   },
    // },
    // {

    //   name: 'addIcon',
    //   title: { label: '自定义添加按钮', tip: '自定义添加按钮' },
    //   propType: 'node',
    // },
    {
      name: 'animated',
      title: {
        label: '切换动画',
        tip: '是否使用动画切换Tabs',
      },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
    // {
    //   name: 'renderTabBar',
    //   title: { label: '替换TabBar', tip: '替换TabBar，用于二次封装标签头' },
    //   propType: 'func',
    // },
    {
      name: 'defaultActiveKey',
      title: {
        label: '初始选中',
        tip: '初始化选中面板的key，如果没有设置activeKey',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'activeKey',
      title: { label: '当前激活tab面板', tip: '当前激活tab面板，注意配置了这个属性就需要自己处理点击切换' },
      propType: 'string',
    },
    {
      name: 'hideAdd',
      title: {
        label: '隐藏加号',
        tip: '是否隐藏加号图标，在`type="editable-card"`时有效',
      },
      condition(target) {
        return target.getProps().getPropValue('type') === 'editable-card';
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false,
      supportVariable: true
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: '大小，提供 `large` `default` 和 `small` 三种大小',
      },
      propType: {
        type: 'oneOf',
        value: ['large', 'default', 'small'],
      },
      defaultValue: 'default',
    },
    {
      name: 'centered',
      title: { label: '标签居中', tip: '标签居中展示' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'tabBarExtraContent',
      title: { label: '额外元素', tip: 'tab bar上额外的元素' },
      propType: 'node',
    },
    {
      name: 'tabBarGutter',
      title: { label: '标签间隙', tip: 'tabs之间的间隙' },
      propType: 'number',
      setter: 'NumberSetter',
      supportVariable: true
    },
    {
      name: 'moreIcon',
      title: { label: '折叠ICON', tip: '自定义折叠 icon	' },
      propType: 'node',
    },
    {
      name: 'destroyInactiveTabPane',
      title: { label: '隐藏销毁', tip: '隐藏销毁结构' },
      propType: 'bool',
    },
    // {
    //   name: 'tabBarStyle',
    //   title: { label: 'tab bar的样式对象', tip: 'tab bar的样式对象' },
    //   propType: 'object',
    // },
    {
      name: 'tabBarStyle',
      title: 'tab bar 的样式对象',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'tabBarStyle',
          title: {
            label: '样式设置',
            tip: 'tab bar 的样式对象	',
          },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
    {
      name: 'tabPosition',
      title: {
        label: '页签位置',
        tip: '页签位置',
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'right', 'bottom', 'left'],
      },
      defaultValue: 'top',
    },
    {
      name: 'type',
      title: {
        label: '页签样式',
        tip: '页签的基本样式，可选`line`、`card`、`editable-card`类型',
      },
      propType: {
        type: 'oneOf',
        value: ['line', 'card', 'editable-card'],
      },
      defaultValue: 'line',
    },
    {
      name: 'onChange',
      title: { label: '切换面板的回调', tip: '切换面板的回调' },
      propType: 'func',
    },
    {
      name: 'onEdit',
      title: {
        label: '新增删除回调',
        tip: '新增和删除页签的回调，在`type="editable-card"`时有效',
      },
      condition(target) {
        return target.getProps().getPropValue('type') === 'editable-card';
      },
      propType: 'func',
    },
    {
      name: 'onTabClick',
      title: { label: 'tab点击回调', tip: 'tab被点击的回调' },
      propType: 'func',
    },
    {
      name: 'onTabScroll',
      title: { label: 'tab滚动触发', tip: 'tab滚动时触发' },
      propType: 'func',
    },
    {
      name: 'keyboard',
      title: { label: '键盘切换', tip: '开启键盘切换功能' },
      propType: 'bool',
      defaultValue: true,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"切换面板的回调",
          template:
            "onChange(activeKey,${extParams}){\n// 切换面板的回调\nconsole.log('onChange',activeKey);}",
        },
        {
          name: 'onEdit',
          description:"新增和删除页签的回调",

          template:
            "onEdit(targetKey,action,${extParams}){\n// 新增和删除页签的回调\nconsole.log('onEdit',targetKey,action);}",
        },
        {
          name: 'onTabClick',
          description:"tab 被点击的回调",

          template:
            "onTabClick(key,event,${extParams}){\n// tab 被点击的回调\nconsole.log('onTabClick',key,event);}",
        },
        {
          name: 'onTabScroll',
          description:"tab 滚动时触发",

          template:
            "onTabScroll({direction},${extParams}){\n// tab 滚动时触发\nconsole.log('onTabScroll',direction);}",
        },
      ],
    },
    advanced: {
      // initialChildren: [
      //   {
      //     componentName: 'Tabs.TabPane',
      //     props: { key: 'item1', tab: 'Item 1' },
      //   },
      //   {
      //     componentName: 'Tabs.TabPane',
      //     props: { key: 'item2', tab: 'Item 2' },
      //   },
      // ],
    },
  },
};
