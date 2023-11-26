module.exports = {
  group: '精选组件',
  componentName: 'Video',
  title: '视频',
  npm: {
    package: '@alifd/fusion-ui',
    version: 'latest',
    exportName: 'Video',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'src',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '视频链接',
          en_US: 'Video Address',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: src | 说明: 视频链接',
          en_US: 'prop: src | description: Video address',
        },
      },
      propType: 'string',
      defaultValue: 'https://fusion.alicdn.com/fusion-site-2.0/fusion.mp4',
    },
    {
      name: 'autoPlay',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '自动播放',
          en_US: 'autoPlay',
        },
      },
      propType: 'bool',
      setter: {
        componentName: 'BoolSetter',
      },
    },
    {
      name: 'loop',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '循环播放',
          en_US: 'loop',
        },
      },
      propType: 'bool',
    },
    {
      name: 'muted',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '静音',
          en_US: 'muted',
        },
      },
      propType: 'bool',
    },
    {
      name: 'controls',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '控制条',
          en_US: 'controls',
        },
      },
      propType: 'bool',
    },
    {
      name: 'poster',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '默认图URL',
          en_US: 'poster',
        },
      },
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'autoPlay',
          title: '自动播放',
          setter: {
            componentName: 'BoolSetter',
          },
          extraProps: {
            setValue: (target, value) => {
              if (value) {
                target.node.setPropValue('muted', true);
              }
            },
          },
        },
        {
          name: 'muted',
          title: '静音',
          setter: {
            componentName: 'BoolSetter',
          },
          condition: (target) => {
            return !target.parent.getPropValue('autoPlay');
          },
        },
      ],
    },
  },
  icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Rc4H6E1KHhpdjKn0n_!!6000000001139-55-tps-56-56.svg',
  category: '信息展示',
  snippets: require('./snippets'),
};
