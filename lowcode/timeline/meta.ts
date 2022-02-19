module.exports = {
  group: '原子组件',
  componentName: 'Timeline',
  title: '时间轴',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Timeline',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'fold',
      propType: {
        type: 'arrayOf',
        value: {
          type: 'exact',
          value: [
            {
              name: 'foldArea',
              propType: {
                type: 'arrayOf',
                value: 'number',
              },
            },
            {
              name: 'foldShow',
              propType: 'bool',
            },
          ],
        },
      },
      description: '自定义折叠选项 示例`[{foldArea: [startIndex, endIndex], foldShow: boolean}]`',
      defaultValue: [],
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['Timeline.Item'],
      },
    },
    props: [
      {
        name: 'items',
        title: '时间轴数据',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      setter: 'StringSetter',
                      supportVariable: true,
                      title: '标题',
                    },
                    {
                      name: 'icon',
                      title: '图标',
                      setter: 'IconSetter',
                      supportVariable: true,
                      description: '图标',
                    },
                    {
                      name: 'state',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: ['done', 'process', 'error', 'success'],
                        },
                      },
                      title: '节点状态',
                      defaultValue: 'done',
                    },
                    {
                      name: 'time',
                      setter: 'DateSetter',
                      supportVariable: true,
                      title: '右侧时间',
                    },
                    {
                      name: 'timeLeft',
                      setter: 'DateSetter',
                      supportVariable: true,
                      title: '左侧时间',
                    },
                    {
                      name: 'content',
                      setter: 'TextAreaSetter',
                      supportVariable: true,
                      title: '右侧内容',
                    },
                    {
                      name: 'animation',
                      setter: 'BoolSetter',
                      supportVariable: true,
                      title: '启用动画',
                      defaultValue: true,
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  title: 'TimelineItem',
                };
              },
            },
          },
        },
        extraProps: {
          getValue(target, fieldValue) {
            // const node = target.node;
            // const children = node.children;
            const map = target.node.children.map((child) => {
              const primaryKey = child.getPropValue('primaryKey')
                ? String(child.getPropValue('primaryKey'))
                : child.id;
              return {
                primaryKey: primaryKey,
                icon: child.getPropValue('icon'),
                title: child.getPropValue('title'),
                state: child.getPropValue('state'),
                time: child.getPropValue('time'),
                timeLeft: child.getPropValue('timeLeft'),
                content: child.getPropValue('content'),
                animation: child.getPropValue('animation'),
              };
            });
            return map;
          },
          setValue(target, value) {
            const node = target.node;
            const map = {};
            if (!Array.isArray(value)) {
              value = [];
            }
            value.forEach((item) => {
              const tabitem = Object.assign({}, item);
              map[item.primaryKey] = tabitem;
            });

            node.children.mergeChildren(
              (child) => {
                const primaryKey = String(child.getPropValue('primaryKey'));
                if (Object.hasOwnProperty.call(map, primaryKey)) {
                  child.setPropValue('icon', map[primaryKey].icon);
                  child.setPropValue('title', map[primaryKey].title);
                  child.setPropValue('content', map[primaryKey].content);
                  child.setPropValue('state', map[primaryKey].state);
                  child.setPropValue('time', map[primaryKey].time);
                  child.setPropValue('timeLeft', map[primaryKey].timeLeft);
                  child.setPropValue('animation', map[primaryKey].animation);
                  delete map[primaryKey];
                  return false;
                }
                return true;
              },
              () => {
                const items = [];
                for (const primaryKey in map) {
                  if (Object.hasOwnProperty.call(map, primaryKey)) {
                    items.push({
                      componentName: 'Timeline.Item',
                      props: map[primaryKey],
                    });
                  }
                }
                return items;
              },
              (child1, child2) => {
                const a = value.findIndex(
                  (item) => String(item.primaryKey) === String(child1.getPropValue('primaryKey')),
                );
                const b = value.findIndex(
                  (item) => String(item.primaryKey) === String(child2.getPropValue('primaryKey')),
                );
                return a - b;
              },
            );
          },
        },
      },
    ],
  },
  icon: '',
  category: '信息展示',
  snippets: require('./snippets'),
};
