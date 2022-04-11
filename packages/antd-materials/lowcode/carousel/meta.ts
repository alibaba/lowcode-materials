import { uuid } from '../_utils/utils';

export default {
  componentName: 'Carousel',
  title: '走马灯',
  category: '数据展示',
  props: [
    {
      name: 'afterChange',
      title: { label: '切换面板的回调', tip: '切换面板的回调' },
      propType: 'func',
    },
    {
      name: 'autoplay',
      title: { label: '是否自动切换', tip: '是否自动切换' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'beforeChange',
      title: { label: '切换面板的回调', tip: '切换面板的回调' },
      propType: 'func',
    },
    {
      name: 'dotPosition',
      title: {
        label: '指示点位置',
        tip: '面板指示点位置，可选 `top` `bottom` `left` `right`',
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'bottom', 'left', 'right'],
      },
    },
    {
      name: 'dots',
      title: {
        label: '显示指示点',
        tip: '是否显示面板指示点',
      },
      propType: { type: 'oneOfType', value: ['bool', 'object'] },
    },
    {
      name: 'easing',
      title: { label: '动画效果', tip: '动画效果' },
      propType: 'string',
    },
    {
      name: 'effect',
      title: { label: '动画效果函数', tip: '动画效果函数' },
      propType: { type: 'oneOf', value: ['scrollx', 'fade'] },
    },
    {
      name: 'items',
      title: '折叠项',
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            initialValue: () => {
              return {
                key: uuid(),
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target, fieldValue) {
          console.log('getValue', target.getNode().children.length);
          const map = target.getNode().children.map(child => {
            const key = child.getPropValue('key')
              ? String(child.getPropValue('key'))
              : child.id;
            return { key };
          });
          return map;
        },
        setValue(target, value) {
          const node = target.getNode();
          const map = {};
          if (!Array.isArray(value)) {
            value = [];
          }
          value.forEach(item => {
            const tabItem = Object.assign({}, item);
            map[item.key] = tabItem;
          });

          node.mergeChildren(
            child => {
              const key = String(child.getPropValue('key'));
              if (Object.hasOwnProperty.call(map, key)) {
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
                    componentName: 'Card',
                    props: map[key],
                  });
                }
              }
              return items;
            },
            (child1, child2) => {
              const a = value.findIndex(
                item => String(item.key) === String(child1.getPropValue('key')),
              );
              const b = value.findIndex(
                item => String(item.key) === String(child2.getPropValue('key')),
              );
              return a - b;
            },
          );
        },
      },
    },
  ],
  configure: {
    supports: { style: true },
    component: {
      isContainer: true,
    },
  },
};
