module.exports = {
  group: '原子组件',
  componentName: 'Link',
  title: '链接',
  npm: {
    package: '@ali/ali-lowcode-materials',
    version: 'latest',
    exportName: 'Link',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'href',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '超链接',
          en_US: 'Link',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性：href | 说明：超链接地址',
          en_US: 'prop: href | description: link address',
        },
      },
      propType: 'string',
      defaultValue: 'https://fusion.design',
    },
    {
      name: 'children',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '链接文案',
          en_US: 'Text',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性：children | 说明：超链接文案',
          en_US: 'prop: children | description: text of the link',
        },
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      defaultValue: '这是一个超链接',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'target',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '页面目标',
          en_US: 'Target',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性：target | 说明：跳转页面目标',
          en_US: 'prop: target | description: target of new page',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['_blank', '_self'],
      },
    },
  ],
  configure: {
    supports: {
      style: true,
      events: ['onClick'],
    },
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'children',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '链接文案',
            en_US: 'Text',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性：children | 说明：超链接文案',
            en_US: 'prop: children | description: text of the link',
          },
        },
        setter: 'StringSetter',
        defaultValue: '这是一个超链接',
      },
      {
        name: '!configType',
        title: '配置方式',
        defaultValue: 'link',
        condition: () => {
          return AliLowCodeEngine.setters.getSetter('BehaviorSetter');
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '交互配置',
                value: 'behavior',
              },
              {
                label: '链接配置',
                value: 'link',
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
          const configType = target.parent.getPropValue('!configType');
          console.log('configType: ', configType);
          return configType === 'behavior' && AliLowCodeEngine.setters.getSetter('BehaviorSetter');
        },
        setter: {
          componentName: 'BehaviorSetter',
          props: (target) => {
            return {
              actions: ['onClick'],
              type: 'link',
            };
          },
        },
      },
      {
        name: 'target',
        condition: () => false,
        title: {
          label: {
            type: 'i18n',
            zh_CN: '页面目标',
            en_US: 'Target',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性：target | 说明：跳转页面目标',
            en_US: 'prop: target | description: target of new page',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                value: '_self',
                title: '当前页面',
              },
              {
                value: '_blank',
                title: '新开页面',
              },
            ],
          },
        },
        condition: (target) => {
          const configType = target.parent.getPropValue('!configType');
          return !configType || configType === 'link';
        },
      },
      {
        name: 'href',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '跳转链接',
            en_US: 'Link',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性：href | 说明：超链接地址',
            en_US: 'prop: href | description: link address',
          },
        },
        setter: 'StringSetter',
        condition: (target) => {
          const configType = target.parent.getPropValue('!configType');
          return !configType || configType === 'link';
        },
      },
    ],
  },
  icon: 'https://img.alicdn.com/imgextra/i4/O1CN01aGiT9s1ScmzUSmn4s_!!6000000002268-55-tps-56-56.svg',
  category: '通用',
  snippets: require('./snippets'),
};
