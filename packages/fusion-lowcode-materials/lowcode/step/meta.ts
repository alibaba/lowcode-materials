import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Step',
  title: '步骤条',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Step',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'current',
      propType: 'number',
      description: '当前步骤',
      defaultValue: 0,
    },
    {
      name: 'direction',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '展示方向',
      defaultValue: 'hoz',
    },
    {
      name: 'labelPlacement',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '横向布局时( direction 为 hoz )的内容排列',
      defaultValue: 'ver',
    },
    {
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['circle', 'arrow', 'dot'],
      },
      description: '类型',
      defaultValue: 'circle',
    },
    {
      name: 'readOnly',
      propType: 'bool',
      description: '是否只读模式',
    },
    {
      name: 'animation',
      propType: 'bool',
      description: '是否开启动效',
      defaultValue: true,
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义样式名',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'items',
        title: '步骤项',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'icon',
                      title: '图标',
                      setter: 'IconSetter',
                      supportVariable: true,
                      description: '图标',
                    },
                    {
                      name: 'title',
                      title: '标题',
                      setter: 'StringSetter',
                      supportVariable: true,
                      description: '标题',
                    },
                    {
                      name: 'status',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: { options: ['wait', 'process', 'finish'] },
                      },
                      description:
                        '步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`',
                    },
                    {
                      name: 'content',
                      title: {
                        label: '内容',
                        tip: 'content|内容填充, shape为 arrow 时无效',
                      },
                      setter: 'TextAreaSetter',
                      supportVariable: true,
                      description: '内容填充, shape为 arrow 时无效',
                    },
                    {
                      name: 'percent',
                      title: '百分比',
                      setter: 'NumberSetter',
                      supportVariable: true,
                      description: '百分比',
                    },
                    {
                      name: 'disabled',
                      title: '是否禁用',
                      setter: 'BoolSetter',
                      supportVariable: true,
                      description: '是否禁用',
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  title: 'StepItem',
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
                primaryKey,
                icon: child.getPropValue('icon'),
                title: child.getPropValue('title'),
                status: child.getPropValue('status'),
                content: child.getPropValue('content'),
                percent: child.getPropValue('percent'),
                disabled: child.getPropValue('disabled'),
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
                  child.setPropValue('status', map[primaryKey].status);
                  child.setPropValue('percent', map[primaryKey].percent);
                  child.setPropValue('disabled', map[primaryKey].disabled);
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
                      componentName: 'Step.Item',
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
      {
        name: 'current',
        setter: (target) => {
          const items = target.parent.getPropValue('items') || [];
          return {
            componentName: 'MixedSetter',
            props: {
              setters: [
                {
                  componentName: 'NumberSetter',
                  props: {
                    min: 0,
                    max: items.length - 1,
                    defaultValue: 0,
                  },
                },
                'ExpressionSetter',
              ],
            },
          };
        },
        title: '当前步骤',
        defaultValue: 0,
      },
      {
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['hoz', 'ver'],
          },
        },
        title: '展示方向',
        defaultValue: 'hoz',
      },
      {
        name: 'labelPlacement',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['hoz', 'ver'],
          },
        },
        title: '内容排列',
        defaultValue: 'ver',
      },
      {
        name: 'shape',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['circle', 'arrow', 'dot'],
          },
        },
        title: '类型',
        defaultValue: 'circle',
      },
      {
        name: 'readOnly',
        setter: 'BoolSetter',
        supportVariable: true,
        title: '是否只读',
      },
      {
        name: 'animation',
        setter: 'BoolSetter',
        supportVariable: true,
        title: '开启动效',
        defaultValue: true,
      },
    ],
  },
  icon: '',
  category: '引导',
  snippets,
};
