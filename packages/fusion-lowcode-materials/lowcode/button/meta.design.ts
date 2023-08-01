import snippets from './snippets.design';

export default [
  {
    group: '原子组件',
    componentName: 'Button',
    title: '按钮',
    icon: 'https://img.alicdn.com/tfs/TB1rT0gPQL0gK0jSZFAXXcA9pXa-200-200.svg',
    docUrl: '',
    screenshot: '',
    npm: {
      package: '@alilc/lowcode-materials',
      version: '{{version}}',
      exportName: 'Button',
      main: '',
      destructuring: true,
      subName: '',
    },
    props: [
      {
        name: 'children',
        title: '内容',
        propType: 'string',
      },
      {
        name: 'icon',
        propType: 'string',
        description: '自定义内联样式',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '按钮类型',
            en_US: 'Button Type',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: type | 说明: 按钮类型',
            en_US: 'prop: type | description: button type',
          },
        },
        propType: {
          type: 'oneOf',
          value: ['primary', 'secondary', 'normal'],
        },
        description: '按钮的类型',
        defaultValue: 'normal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '按钮尺寸',
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 按钮尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        propType: {
          type: 'oneOf',
          value: ['small', 'medium', 'large'],
        },
        description: '按钮的尺寸',
        defaultValue: 'medium',
      },
      {
        name: 'iconSize',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '图标尺寸',
            en_US: 'Icon Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: iconSize | 说明: 图标尺寸',
            en_US: 'prop: iconSize | description: icon size',
          },
        },
        propType: {
          type: 'oneOf',
          value: ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'],
        },
        defaultValue: 'small',
        description: '按钮中 Icon 的尺寸，用于替代 Icon 的默认大小',
      },
      {
        name: 'ghost',
        title: {
          type: 'i18n',
          zh_CN: '幽灵按钮',
          en_US: 'ghost',
        },
        propType: {
          type: 'oneOf',
          value: [true, false, 'light', 'dark'],
        },
        description: '是否为幽灵按钮',
        defaultValue: false,
      },
      {
        name: 'loading',
        title: 'loading',
        propType: 'bool',
        description: '设置按钮的载入状态',
        defaultValue: false,
      },
      {
        name: 'text',
        title: {
          type: 'i18n',
          zh_CN: '文本按钮',
          en_US: 'text',
        },
        propType: 'bool',
        description: '是否为文本按钮',
        defaultValue: false,
      },
      {
        name: 'warning',
        title: 'warning',
        propType: 'bool',
        description: '是否为警告按钮',
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          type: 'i18n',
          zh_CN: '禁用',
          en_US: 'disabled',
        },
        propType: 'bool',
        description: '是否禁用',
        defaultValue: false,
      },
      {
        name: 'onClick',
        title: 'onClick',
        propType: 'func',
        description: '点击按钮的回调\n@param {Object} e Event Object',
      },
      {
        name: 'className',
        propType: 'string',
      },
      {
        name: 'onMouseUp',
        propType: 'func',
      },
      {
        name: 'style',
        propType: 'object',
        description: '自定义内联样式',
      },
    ],
    configure: {
      props: [
        {
          name: 'children',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '内容',
              en_US: 'Content',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: children | 说明: 按钮文本',
              en_US: 'prop: children | description: button content',
            },
          },
          setter: 'StringSetter',
        },
        {
          name: 'icon',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '图标',
              en_US: 'Icon',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: icon | 说明: 图标类型',
              en_US: 'prop: icon | description: icon type',
            },
          },
          setter: 'IconSetter',
          supportVariable: false,
          setValue: (target, value) => {
            target.node.children.importSchema(
              value && {
                componentName: 'Icon',
                props: { type: value, style: { marginRight: 5 } },
              },
              true,
            );
          },
        },
        {
          name: '!type',
          title: {
            type: 'i18n',
            zh_CN: '类型',
            en_US: 'type',
          },
          getValue: (target) => {
            const parentTarget = target.parent;
            const isTextButton = parentTarget.getPropValue('text');
            const isWarningButton = parentTarget.getPropValue('warning');
            const ghostConfig = parentTarget.getPropValue('ghost');
            if (isTextButton) {
              return 'text';
            } else if (isWarningButton) {
              return 'warning';
            } else if (typeof ghostConfig !== 'undefined' && ghostConfig !== false) {
              return 'ghost';
            } else {
              return 'normal';
            }
          },
          setValue: (target, value) => {
            const parentTarget = target.parent;
            parentTarget.setPropValue('text', false);
            parentTarget.setPropValue('warning', false);
            parentTarget.setPropValue('ghost', false);
            switch (value) {
              case 'normal':
                break;
              case 'text':
                parentTarget.setPropValue('text', true);
                break;
              case 'warning':
                parentTarget.setPropValue('warning', true);
                break;
              case 'ghost':
                parentTarget.setPropValue('ghost', true);
                break;
              default:
                break;
            }
          },
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '普通按钮',
                  value: 'normal',
                },
                {
                  title: '文本按钮',
                  value: 'text',
                },
                {
                  title: '提示按钮',
                  value: 'warning',
                },
                {
                  title: '幽灵按钮',
                  value: 'ghost',
                },
                // {
                //   title: "按钮组",
                //   value: "group"
                // },
              ],
            },
          },
          defaultValue: 'normal',
        },
        {
          name: 'type',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '形式',
              en_US: 'Button Type',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: type | 说明: 按钮类型',
              en_US: 'prop: type | description: button type',
            },
          },
          condition: (target) => target?.parent?.getPropValue('!type') !== 'ghost',
          setter: {
            componentName: 'RadioGroupSetter',
            props: (target) => {
              const _type = target?.parent?.getPropValue('!type');
              let options = [
                {
                  label: '主要',
                  value: 'primary',
                },
                {
                  label: '次要',
                  value: 'secondary',
                },
                {
                  label: '普通',
                  value: 'normal',
                },
              ];
              if (_type === 'warning') {
                options = [
                  {
                    label: '主要',
                    value: 'primary',
                  },
                  {
                    label: '普通',
                    value: 'normal',
                  },
                ];
              }
              return { options };
            },
          },
          defaultValue: 'normal',
        },
        {
          name: 'ghost',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '形式',
              en_US: 'Button Type',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: type | 说明: 按钮类型',
              en_US: 'prop: type | description: button type',
            },
          },
          condition: (target) => target?.parent?.getPropValue('!type') === 'ghost',
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  label: 'Light',
                  value: 'light',
                },
                {
                  label: 'Dark',
                  value: 'dark',
                },
              ],
            },
          },
        },
        {
          name: 'size',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '尺寸',
              en_US: 'Button Size',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: size | 说明: 按钮尺寸',
              en_US: 'prop: size | description: button size',
            },
          },
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  label: '小',
                  value: 'small',
                },
                {
                  label: '中',
                  value: 'medium',
                },
                {
                  label: '大',
                  value: 'large',
                },
              ],
            },
          },
          defaultValue: 'medium',
        },
        {
          name: '!status',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '状态',
              en_US: 'Button Status',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: 虚拟属性 | 说明: 按钮状态',
              en_US: 'prop: virtual | description: button status',
            },
          },
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '普通',
                  value: 'normal',
                },
                // {
                //   title: "悬停",
                //   value: 'hover'
                // },
                // {
                //   title: "激活",
                //   value: "active"
                // },
                {
                  title: '禁用',
                  value: 'disabled',
                },
                {
                  title: '加载',
                  value: 'loading',
                },
              ],
            },
          },
          getValue: (target) => {
            const parentTarget = target.parent;
            const loading = parentTarget.getPropValue('loading');
            const disabled = parentTarget.getPropValue('disabled');
            if (loading) {
              return 'loading';
            } else if (disabled) {
              return 'disabled';
            } else {
              return 'normal';
            }
          },
          setValue: (target, value) => {
            const parentTarget = target.parent;
            parentTarget.setPropValue('loading', false);
            parentTarget.setPropValue('disabled', false);
            switch (value) {
              case 'normal':
                break;
              case 'loading':
                parentTarget.setPropValue('loading', true);
                break;
              case 'disabled':
                parentTarget.setPropValue('disabled', true);
                break;
              default:
                break;
            }
          },
          defaultValue: 'normal',
        },
      ],
    },
    category: '通用',
    snippets,
  },
];
