export default {
  group: '原子组件',
  componentName: 'Tag',
  title: '标签',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Tag',
    main: '',
    destructuring: true,
  },
  props: [
    {
      name: 'type',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标签类型',
          en_US: 'Tag Type',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: type | 说明: 标签的类型',
          en_US: 'prop: type | description: tag type',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['normal', 'primary'],
      },
      description: '标签的类型',
    },
    {
      name: 'size',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标签尺寸',
          en_US: 'Tag Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: size | 说明: 标签的尺寸（large 尺寸为兼容表单场景 large = medium）',
          en_US: 'prop: size | description: tag size',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '标签的尺寸（large 尺寸为兼容表单场景 large = medium）',
    },
    {
      name: 'color',
      propType: 'string',
      description:
        '标签颜色, 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效',
    },
    {
      name: 'animation',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '开启动效',
          en_US: 'Animation',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: animation | 说明: 是否开启动效',
          en_US: 'prop: animation | description: enable animation',
        },
      },
      propType: 'bool',
      description: '是否开启动效',
    },
    {
      name: 'afterAppear',
      propType: 'func',
      description: '标签出现动画结束后执行的回调',
    },
    {
      name: 'onClick',
      propType: 'func',
      description: '点击回调',
    },
    {
      name: 'children',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标签文本',
          en_US: 'Content',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: children | 说明: 标签文本内容',
          en_US: 'prop: children | description: tag content',
        },
      },
      propType: 'string',
      description: '内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: '!children',
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
        getValue: (target) => {
          const node = target.getNode();
          const children = node.propsData.children || [];
          return children.filter((item) => typeof item === 'string').join('');
        },
        setValue: (target, value) => {
          const node = target.getNode();
          let children = node.propsData.children || [];
          const hasTextChild = children.find((item) => typeof item === 'string');
          if (hasTextChild) {
            children = children.map((item) => {
              if (typeof item === 'string') {
                item = value;
              }
              return item;
            });
          } else {
            children.push(value);
          }
          node.setPropValue('children', children);
        },
      },
      {
        name: '!icon',
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
        getValue: (target) => {
          const node = target.getNode();
          const children = node.propsData.children || [];
          const iconObject = children.find((item) => typeof item === 'object');
          return iconObject && iconObject.props.type;
        },
        setValue: (target, value) => {
          const node = target.getNode();
          let children = node.propsData.children || [];
          const hasIconChild = children.find((item) => typeof item === 'object');
          if (hasIconChild) {
            children = children.map((item) => {
              if (typeof item === 'object') {
                item = {
                  ...item,
                  props: {
                    ...item.props,
                    type: value,
                  },
                };
              }
              return item;
            });
          } else {
            children.unshift({
              componentName: 'Icon',
              props: {
                type: value,
                style: {
                  marginRight: 4,
                },
              },
            });
          }
          node.setPropValue('children', children);
        },
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标签类型',
            en_US: 'Tag Type',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: type | 说明: 标签的类型',
            en_US: 'prop: type | description: tag type',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '普通',
                value: 'normal',
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
            zh_CN: '标签尺寸',
            en_US: 'Tag Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 标签的尺寸（large 尺寸为兼容表单场景 large = medium）',
            en_US: 'prop: size | description: tag size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '小', value: 'small' },
              { title: '中', value: 'medium' },
              { title: '大', value: 'large' },
            ],
          },
        },
      },
      {
        name: 'disabled',
        title: '状态',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '普通',
                value: false,
              },
              {
                label: '禁用',
                value: true,
              },
            ],
          },
        },
        defaultValue: false,
      },
    ],
  },
  icon: '',
  category: '信息展示',
  snippets: require('./snippets'),
};
