import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Carousel',
  title: '走马灯',
  category: '数据展示',
  props: [
    {
      name: 'autoplay',
      title: { label: '是否自动切换', tip: '是否自动切换' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'autoplaySpeed',
      title: { label: '毫秒间隔', tip: '自动切换毫秒间隔' },
      propType: 'number',
      defaultValue: 3000,
    },
    {
      name: 'speed',
      title: { label: '动效时间', tip: '切换动效的时间（毫秒）	' },
      propType: 'number',
      defaultValue: 500,
    },
    {
      name: 'fade',
      title: { label: '切换动效', tip: '使用渐变切换动效	' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'infinite',
      title: { label: '无限循环', tip: '是否无限循环切换（实现方式是复制两份 children 元素，如果子元素有副作用则可能会引发 bug）	' },
      propType: 'bool',
      defaultValue: true,
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
      propType: { type: 'oneOfType', value: ['bool'] },
    },
    {
      name: 'waitForAnimate',
      title: {
        label: '切换动画',
        tip: '是否等待切换动画',
      },
      propType: { type: 'oneOfType', value: ['bool'] },
      defaultValue: false,
    },
    {
      name: 'easing',
      title: { label: '动画效果', tip: '动画效果' },
      propType: 'string',
      defaultValue: 'linear',

    },
    {
      name: 'effect',
      title: { label: '动画效果函数', tip: '动画效果函数' },
      propType: { type: 'oneOf', value: ['scrollx', 'fade'] },
    },
    // {
    //   name: 'items',
    //   title: '折叠项',
    //   setter: {
    //     componentName: 'ArraySetter',
    //     props: {
    //       itemSetter: {
    //         componentName: 'ObjectSetter',
    //         initialValue: () => {
    //           return {
    //             key: uuid(),
    //           };
    //         },
    //       },
    //     },
    //   },
    //   extraProps: {
    //     getValue(target, fieldValue) {
    //       console.log('getValue', target.node.children.length);
    //       const map = target.node.children.map((child) => {
    //         const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
    //         return { key };
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
    //                 componentName: 'Card',
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
  ],
  configure: {
    supports: { style: true },
    events:['afterChange','beforeChange'],
    component: {
      isContainer: true,
    },
  },
};
