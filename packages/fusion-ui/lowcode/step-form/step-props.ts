import { hideProp } from '../utils';

export default [
  {
    name: '!items',
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
                  important: true,
                  setter: 'IconSetter',
                },
                {
                  name: 'title',
                  title: '标题',
                  important: true,
                  setter: 'StringSetter',
                },
                {
                  name: 'status',
                  title: {
                    label: '状态',
                    tip: '步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`',
                  },
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: { options: ['wait', 'process', 'finish'] },
                  },
                },
                {
                  name: 'content',
                  title: {
                    label: '内容',
                    tip: 'content|内容填充, shape为 arrow 时无效',
                  },
                  condition: hideProp,
                  setter: 'TextAreaSetter',
                  description: '内容填充, shape为 arrow 时无效',
                },
                {
                  name: 'percent',
                  title: '百分比',
                  setter: 'NumberSetter',
                  description: '百分比',
                },
                {
                  name: 'disabled',
                  title: '是否禁用',
                  setter: 'BoolSetter',
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
    getValue(target) {
      // const node = target.node;
      // const children = node.children;
      const map = target.node.children.map((child) => {
        const stepItemProps = child.getPropValue('stepItemProps') || {};
        const primaryKey = stepItemProps.primaryKey ? stepItemProps.primaryKey : child.id;
        return {
          ...stepItemProps,
          primaryKey,
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
            child.setPropValue('stepItemProps', map[primaryKey]);
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
                componentName: 'ProForm',
                props: {
                  columns: 1,
                  primaryKey,
                  stepItemProps: map[primaryKey],
                },
                children: [...new Array(3).keys()].map((item) => ({
                  componentName: 'FormInput',
                  props: {
                    formItemProps: {
                      primaryKey: String(Math.floor(Math.random() * 10000) + item),
                      label: '表单项',
                      size: 'medium',
                      device: 'desktop',
                      fullWidth: true,
                    },
                    placeholder: '请输入',
                  },
                })),
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
  {
    name: 'current',
    setter: (target) => {
      return {
        componentName: 'MixedSetter',
        props: {
          setters: [
            {
              componentName: 'SelectSetter',
              props: () => {
                const items = target.getProps().getPropValue('!items') || [];
                return {
                  options: items.map((item, index: number) => {
                    return {
                      title: `第 ${index + 1} 步: ${item.title}`,
                      value: `${index}`,
                    };
                  }),
                };
              },
            },
            'ExpressionSetter',
          ],
        },
      };
    },
    setValue: (target, value) => {
      target.parent.setPropValue('current', +value);
    },
    title: '当前步骤',
    defaultValue: 0,
  },
  {
    name: 'shape',
    title: '类型',
    setter: (target) => {
      const options =
        target.getProps().getPropValue('direction') === 'ver'
          ? ['circle', 'dot']
          : ['circle', 'arrow', 'dot'];
      return {
        componentName: 'RadioGroupSetter',
        props: {
          options,
        },
      };
    },
    defaultValue: 'circle',
  },
  {
    name: 'direction',
    condition: (target) => {
      return target.getProps().getPropValue('shape') !== 'arrow';
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          { value: 'hoz', title: '横向' },
          { value: 'ver', title: '纵向' },
        ],
      },
    },
    title: '展示方向',
    defaultValue: 'hoz',
  },
  {
    name: 'showAll',
    condition: (target) => {
      return target.getProps().getPropValue('direction') === 'ver';
    },
    title: '展示所有表单',
    setter: {
      componentName: 'BoolSetter',
    },
  },
  {
    name: 'labelPlacement',
    condition: hideProp,
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
    name: 'readOnly',
    setter: 'BoolSetter',
    title: '是否只读',
  },
  {
    name: 'animation',
    setter: 'BoolSetter',
    title: '开启动效',
    defaultValue: true,
  },
];

export const operations = {
  name: 'operations',
  display: 'block',
  title: '操作项',
  getValue: (target, value) => {
    return value || [];
  },
  setter: {
    componentName: 'MixedSetter',
    props: {
      setters: [
        {
          componentName: 'SlotSetter',
          defaultValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'content',
                      display: 'inline',
                      title: '文本',
                      setter: 'StringSetter',
                      important: true,
                      extraProps: {
                        supportVariable: true,
                      },
                    },
                    {
                      name: 'action',
                      display: 'inline',
                      title: '操作',
                      important: true,
                      setValue: (target, value) => {
                        const actionNameMap = {
                          submit: '提交',
                          reset: '重置',
                          custom: '自定义',
                        };
                        const actionName = actionNameMap[value] || '自定义';
                        target.parent.setPropValue('content', actionName);
                      },
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '提交',
                              value: 'submit',
                              action: 'submit',
                            },
                            {
                              title: '重置',
                              value: 'reset',
                              action: 'reset',
                            },
                            {
                              title: '上一步',
                              value: 'previous',
                              action: 'previous',
                            },
                            {
                              title: '下一步',
                              value: 'next',
                              action: 'next',
                            },
                            {
                              title: '自定义',
                              value: 'custom',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'type',
                      display: 'inline',
                      title: '样式',
                      important: true,
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '主要',
                              value: 'primary',
                            },
                            {
                              title: '次要',
                              value: 'secondary',
                            },
                            {
                              title: '普通',
                              value: 'normal',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'behavior',
                      title: '交互设置',
                      display: 'block',
                      condition: (target) => {
                        const action = target.parent.getPropValue('action');
                        return !action || action === 'custom';
                      },
                      setter: {
                        componentName: 'BehaviorSetter',
                        props: {
                          actions: ['onClick'],
                        },
                      },
                    },
                    {
                      name: 'onClick',
                      display: 'inline',
                      title: '点击事件',
                      condition: hideProp,
                      setter: 'FunctionSetter',
                      extraProps: {
                        supportVariable: true,
                      },
                    },
                    {
                      name: 'htmlType',
                      condition: hideProp,
                    },
                    {
                      name: '!autoSubmit',
                      display: 'inline',
                      virtual: true,
                      title: '自动提交',
                      setter: {
                        componentName: 'BoolSetter',
                      },
                      extraProps: {
                        setValue: (target, value) => {
                          target.parent.setPropValue('htmlType', value ? 'submit' : '');
                        },
                        getValue: (target, value) => {
                          return value === 'submit';
                        },
                      },
                      condition: (target) => {
                        return target.parent.getPropValue('action') !== 'submit';
                      },
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  content: '提交',
                  action: 'submit',
                  type: 'secondary',
                };
              },
            },
          },
        },
      ],
    },
  },
};
