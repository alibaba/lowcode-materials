import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Steps',
  title: '步骤条',
  category: '导航',
  props: [
    {
      name: 'steps',
      title: '步骤配置',
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
                    name: 'title',
                    title: '标题',
                    setter: 'StringSetter',
                  },
                  // {
                  //   name: 'icon',
                  //   title: '自定义图标',
                  //   setter: {
                  //     componentName: 'SlotSetter',
                  //     title: '操作区域插槽',
                  //     initialValue: {
                  //       type: 'JSSlot',
                  //       value: [],
                  //     },
                  //   },                  
                  // },
                  {
                    name: 'subTitle',
                    title: '子标题',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'description',
                    title: '详细描述',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'disabled',
                    title: '禁用',
                    setter: 'BoolSetter',
                    initialValue: false,
                  },
                  {
                    name: 'status',
                    title: { label: '状态', tip: '选择框大小' },
                    setter: {
                      componentName: 'RadioGroupSetter',
                      props: {
                        options: [
                          {
                            title: 'null',
                            value: null,
                          },
                          {
                            title: 'wait',
                            value: 'wait',
                          },
                          {
                            title: 'process',
                            value: 'process',
                          },
                          {
                            title: 'finish',
                            value: 'finish',
                          },
                          {
                            title: 'error',
                            value: 'error',
                          },
                        ],
                      },
                    },
                    propType: {
                      type: 'oneOf',
                      value: ['wait', 'process', 'finish', 'error'],
                    },
                    defaultValue: 'wait',
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: `Steps${uuid()}`,
                title: '步骤',
                disabled: false,
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target, fieldValue) {
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            return {
              key,
              title: child.getPropValue('title'),
              subTitle: child.getPropValue('subTitle'),
              description: child.getPropValue('description'),
              disabled: child.getPropValue('disabled'),
              status: child.getPropValue('status'),
            };
          });
          return map;
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
                child.setPropValue('title', map[key].title);
                child.setPropValue('subTitle', map[key].subTitle);
                child.setPropValue('description', map[key].description);
                child.setPropValue('disabled', map[key].disabled);
                child.setPropValue('status', map[key].status);

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
                    componentName: 'Steps.Step',
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
      name: 'className',
      title: { label: '步骤条类名', tip: '步骤条类名' },
      propType: 'string',
    },
    {
      name: 'type',
      title: {
        label: '类型',
        tip: '步骤条类型，有 `default` 和 `navigation` 两种',
      },
      propType: { type: 'oneOf', value: ['default', 'navigation'] },
      defaultValue: 'default',
    },
    {
      name: 'current',
      title: {
        label: '当前步骤',
        tip: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态',
      },
      propType: 'number',
    },
    {
      name: 'direction',
      title: {
        label: '步骤条方向',
        tip: '指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向',
      },
      propType: {
        type: 'oneOf',
        value: ['horizontal', 'vertical'],
      },
    },
    {
      name: 'labelPlacement',
      title: {
        label: '标签放置位置',
        tip: '指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方',
      },
      propType: {
        type: 'oneOf',
        value: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal',
    },
    {
      name: 'progressDot',
      title: {
        label: '点状步骤条',
        tip: '点状步骤条，可以设置为一个 func',
      },
      propType: { type: 'oneOfType', value: ['bool', 'func'] },
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: '指定大小',
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'small'],
      },
      defaultValue: 'default',
    },
    {
      name: 'status',
      title: {
        label: '当前步骤状态',
        tip: '指定当前步骤的状态，可选 `wait` `process` `finish` `error`',
      },
      propType: {
        type: 'oneOf',
        value: ['wait', 'process', 'finish', 'error'],
      },
      defaultValue: 'process',
    },
    {
      name: 'initial',
      title: {
        label: '起始序号',
        tip: '起始序号，从 0 开始记数',
      },
      propType: 'number',
      defaultValue: 0,
    },
    {
      name: 'onChange',
      title: { label: '点击切换步骤时触发', tip: '点击切换步骤时触发' },
      propType: 'func',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { childWhitelist: ['Steps.Step'] },
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"点击切换步骤时触发",

          template:
            "onChange(current,${extParams}){\n// 点击切换步骤时触发\nconsole.log('onChange',current);}",
        },
      ],
    },
  },
};
