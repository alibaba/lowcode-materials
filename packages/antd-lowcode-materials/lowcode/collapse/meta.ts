import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Collapse',
  title: '折叠面板',
  category: '数据展示',
  props: [
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '带边框风格的折叠面板' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'accordion',
      title: { label: '手风琴模式', tip: '手风琴模式' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'collapsible',
      title: '可折叠触发区域',
      propType: {
        type: 'oneOf',
        value: ['-', 'header', 'disabled'],
      },
    },
    // {
    //   name: 'expandIcon',
    //   title: { label: '自定义切换图标', tip: '自定义切换图标' },
    //   propType: 'slot',
    // },
    {
      name: 'expandIconPosition',
      title: { label: '图标位置', tip: '设置图标位置' },
      propType: { type: 'oneOf', value: ['left', 'right'] },
    },
    {
      name: 'destroyInactivePanel',
      title: { label: '隐藏时销毁', tip: '销毁折叠隐藏的面板' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'ghost',
      title: { label: '透明无边框', tip: '使折叠面板透明且无边框' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'collapses',
      title: '折叠项',
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
                    initialValue: (val) => val || uuid()
                  },
                  {
                    name: 'header',
                    title: '面板头内容',
                    setter: 'StringSetter',
                    initialValue: '折叠项'
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                header: '折叠项',
                showArrow: true,
                collapsible: undefined,
                forceRender: false,
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target, fieldValue) {
          console.log('getValue', target.node.children.length);
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            return {
              key,
              header: child.getPropValue('header'),
              showArrow: child.getPropValue('showArrow'),
              collapsible: child.getPropValue('collapsible'),
              forceRender: child.getPropValue('forceRender'),
            };
          });
          return map;
        },
        setValue(target, value) {
          const { node } = target;
          const map = {};

          // console.log('setValue',value);

          if (!Array.isArray(value)) {
            value = [];
          }
          value.forEach((item) => {
            const tabItem = Object.assign({}, item);
            map[item.key] = tabItem;
          });

          node.children.mergeChildren(
            (child) => {
              const key = String(child.getPropValue('key'));
              if (Object.hasOwnProperty.call(map, key)) {
                child.setPropValue('header', map[key].header);
                child.setPropValue('showArrow', map[key].showArrow);
                child.setPropValue('collapsible', map[key].collapsible);
                child.setPropValue('forceRender', map[key].forceRender);
                delete map[key];
                return false;
              }
              return true;
            },
            () => {
              const items = [];
              for (const key in map) {
                if (Object.hasOwnProperty.call(map, key)) {
                  items.push({
                    componentName: 'Collapse.Panel',
                    props: map[key],
                  });
                }
              }
              return items;
            },
            (child1, child2) => {
              const a = value.findIndex(
                (item) => String(item.key) === String(child1.getPropValue('key')),
              );
              const b = value.findIndex(
                (item) => String(item.key) === String(child2.getPropValue('key')),
              );
              return a - b;
            },
          );
        },
      },
    },
    {
      name: 'defaultActiveKey',
      title: { label: '初始化选中面板的 key', tip: '初始化选中面板的 key' },
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          { type: 'arrayOf', value: 'string' },
          'number',
          { type: 'arrayOf', value: 'number' },
        ],
      },
    },
    {
      name: 'activeKey',
      title: {
        label: '当前激活 tab 面板的 key',
        tip: '当前激活 tab 面板的 key',
      },
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          { type: 'arrayOf', value: 'string' },
          'number',
          { type: 'arrayOf', value: 'number' },
        ],
      },
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"切换面板的回调",

          template: "onChange(${extParams}){\n// 切换面板的回调\nconsole.log('onChange');}",
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
};
