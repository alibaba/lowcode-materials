import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Timeline',
  title: '时间轴',
  category: '数据展示',
  props: [
    {
      name: 'steps',
      title: '步骤配置',
      propType: { type: 'oneOfType', value: ['json', 'node'] },

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
                  },
                  {
                    name: 'color',
                    title: '圆圈颜色',
                    setter: 'ColorSetter',
                  },
                  // {
                  //   name: 'dot',
                  //   title: '自定义时间轴点',
                  //   setter: 'node',
                  // },

                  {
                    name: 'children',
                    title: '设置内容',
                    setter: ['StringSetter','SlotSetter'],
                  },
                  {
                    name: 'label',
                    title: '设置标签',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'position',
                    title: {
                      label: '自定义节点位置',
                      tip: '自定义节点位置',
                    },
                    propType: {
                      type: 'oneOf',
                      value: ['left', 'right'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: '左',
                              value: 'left',
                            },
                            {
                              title: '右',
                              value: 'right',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: `timeLine${uuid()}`,
                label: '时间轴',
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target, fieldValue, a, b, c) {
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            const result = { key };
            ['color', 'dot', 'label', 'position'].forEach((propKey) => {
              result[propKey] = child.getPropValue(propKey);
            });
            return result;
          });
          return map.length === 0 ? fieldValue : map;
        },
        setValue(target, value) {
          const { node } = target;
          const map = {};

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
                ['color', 'dot', 'label', 'position'].forEach((propKey) => {
                  child.setPropValue(propKey, map[key][propKey]);
                });
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
                    componentName: 'Timeline.Item',
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
      name: 'mode',
      title: {
        label: '模式',
        tip: '通过设置 `mode` 可以改变时间轴和内容的相对位置',
      },
      propType: { type: 'oneOf', value: ['left', 'alternate', 'right'] },
    },
    {
      name: 'pending',
      title: {
        label: '存在最后节点',
        tip: '指定最后一个幽灵节点是否存在',
      },
      propType: 'bool',
    },
    {
      name: 'pendingDot',
      title: {
        label: '当最后一个幽灵节点存在時，指定其时间图点',
        tip: '当最后一个幽灵节点存在時，指定其时间图点',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'reverse',
      title: { label: '节点排序', tip: '节点排序' },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: { supports: { style: true } },
};
