import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Descriptions',
  title: '描述列表',
  category: '数据展示',
  props: [
    {
      name: 'title',
      title: {
        label: '标题',
        tip: '描述列表的标题，显示在最顶部',
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'items',
      title: {
        label: '列表项',
        tip: '列表项',
      },
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
                    condition: () => false,
                  },
                  {
                    name: 'label',
                    title: '标题',
                    setter: 'StringSetter',
                    initialValue: '列表项',
                  },

                  {
                    name: 'span',
                    title: '所占列数',
                    setter: 'NumberSetter',
                    initialValue: 1,
                  },
                  {
                    name: 'children',
                    title: '内容',
                    setter: [
                      "StringSetter",
                      {
                        componentName: 'SlotSetter',
                        initialValue: {
                          type: 'JSSlot',
                          value: [],
                        },
                      },
                    ]
                  }
                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                label: '标签项',
                span: 1,
                children: {
                  type: 'JSSlot',
                  value: [],
                },
              };
            },
          },
        },
      },
      // extraProps: {
      //   getValue(target, fieldValue) {
      //     const map = target.node.children.map((child) => {
      //       const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
      //       return {
      //         key,
      //         label: child.getPropValue('label'),
      //         span: child.getPropValue('span'),
      //         children: child.getPropValue('children'),
      //       };
      //     });
      //     return map;
      //   },
      //   setValue(target, value) {
      //     const { node } = target;
      //     const map = {};

      //     if (!Array.isArray(value)) {
      //       value = [];
      //     }
      //     value.forEach((item) => {
      //       const tabItem = Object.assign({}, item);
      //       map[item.key] = tabItem;
      //     });

      //     node.children.mergeChildren(
      //       (child) => {
      //         const key = String(child.getPropValue('key'));
      //         if (Object.hasOwnProperty.call(map, key)) {
      //           child.setPropValue('label', map[key].label);
      //           child.setPropValue('span', map[key].span);
      //           child.setPropValue('children', map[key].children);
      //           delete map[key];
      //           return false;
      //         }
      //         return true;
      //       },
      //       () => {
      //         const items = [];
      //         for (const key in map) {
      //           if (Object.hasOwnProperty.call(map, key)) {
      //             items.push({
      //               componentName: 'Descriptions.Item',
      //               props: map[key],
      //             });
      //           }
      //         }
      //         return items;
      //       },
      //       (child1, child2) => {
      //         const a = value.findIndex(
      //           (item) => String(item.key) === String(child1.getPropValue('key')),
      //         );
      //         const b = value.findIndex(
      //           (item) => String(item.key) === String(child2.getPropValue('key')),
      //         );
      //         return a - b;
      //       },
      //     );
      //   },
      //   // getValue(target, fieldValue) {
      //   //   // const node = target.nodes[0];
      //   //   // const children = node.getChildren();
      //   //   const map = target.node.children.map(child => {
      //   //     return {
      //   //       key: child.getPropValue('key') || uuid(),
      //   //       label: child.getPropValue('label'),
      //   //       span: child.getPropValue('span'),
      //   //       children: child.getPropValue('children'),
      //   //     };
      //   //   });
      //   //   return map;
      //   // },
      //   // setValue(target, value) {
      //   //   const node = target.node;

      //   //   if (!Array.isArray(value)) {
      //   //     value = [];
      //   //   }

      //   //   node.children.mergeChildren(
      //   //     () => true,
      //   //     () => {
      //   //       return value.map(item => ({
      //   //         componentName: 'Descriptions.Item',
      //   //         props: Object.assign({}, item),
      //   //       }));
      //   //     }
      //   //   );
      //   // },
      // },
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否展示边框' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'column',
      title: {
        label: '列数',
        tip: '一行的列表项数量',
      },
      propType: 'number',
      defaultValue: 3,
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip:
          '设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效）',
      },
      propType: { type: 'oneOf', value: ['default', 'middle', 'small'] },
      defaultValue: 'middle',
    },
    {
      name: 'layout',
      title: { label: '布局方向', tip: '描述布局' },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical'] },
      defaultValue: 'horizontal',
    },
    {
      name: 'colon',
      title: {
        label: '展示冒号',
        tip: '配置 `Descriptions.Item` 的 `colon` 的默认值',
      },
      propType: 'bool',
      defaultValue: true,
    },
  ],
  configure: {
    supports: { style: true },
  },
};
