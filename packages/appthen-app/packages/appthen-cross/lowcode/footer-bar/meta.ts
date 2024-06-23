import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const FooterBarMeta: ExtendIPublicTypeComponentMetadata = {
  componentName: 'FooterBar',
  title: '底部标签',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'FooterBar',
    main: '',
    destructuring: true,
    subName: '',
  },
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': '文字颜色',
          },
        },
        name: 'color',
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#666',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectedColor',
            'zh-CN': '选中颜色',
          },
        },
        name: 'selectedColor',
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#3e5bec',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'list',
            'zh-CN': '按钮列表',
          },
        },
        name: 'list',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'text',
                          'zh-CN': '文字',
                        },
                      },
                      name: 'text',
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: '文字',
                      },
                      isRequired: true,
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'name',
                          'zh-CN': '标识(字母)',
                        },
                      },
                      name: 'name',
                      setter: {
                        componentName: 'StringSetter',
                      },
                      isRequired: true,
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'iconPath',
                          'zh-CN': '图标',
                        },
                      },
                      name: 'iconPath',
                      setter: {
                        componentName: 'ImageSetter',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'selectedIconPath',
                          'zh-CN': '选中图标',
                        },
                      },
                      name: 'selectedIconPath',
                      setter: {
                        componentName: 'ImageSetter',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'icon width',
                          'zh-CN': '图标宽度',
                        },
                      },
                      name: 'width',
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: 25
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'icon height',
                          'zh-CN': '图标高度',
                        },
                      },
                      name: 'height',
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: 25
                      },
                    },
                    // {
                    //   title: {
                    //     label: {
                    //       type: 'i18n',
                    //       'en-US': 'style',
                    //       'zh-CN': '图标样式',
                    //     },
                    //   },
                    //   name: 'style',
                    //   setter: {
                    //     componentName: 'StyleSetter',
                    //     props: {
                    //       showModuleList: ['layout'],
                    //     },
                    //   },
                    // },
                    // {
                    //   title: {
                    //     label: {
                    //       type: 'i18n',
                    //       'en-US': 'styleSelected',
                    //       'zh-CN': 'styleSelected',
                    //     },
                    //   },
                    //   name: 'styleSelected',
                    //   setter: {
                    //     componentName: 'ObjectSetter',
                    //     props: {
                    //       config: {
                    //         extraSetter: {
                    //           componentName: 'MixedSetter',
                    //           isRequired: false,
                    //           props: {},
                    //         },
                    //       },
                    //     },
                    //     isRequired: false,
                    //     initialValue: {},
                    //   },
                    // },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'badge',
                          'zh-CN': '徽标提示',
                        },
                      },
                      name: 'badge',
                      setter: {
                        componentName: 'StringSetter',
                      },
                    },
                    // {
                    //   title: {
                    //     label: {
                    //       type: 'i18n',
                    //       'en-US': 'dot',
                    //       'zh-CN': '红点提示',
                    //     },
                    //   },
                    //   name: 'dot',
                    //   setter: {
                    //     componentName: 'BoolSetter',
                    //   },
                    // },
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    isRequired: false,
                    props: {},
                  },
                },
              },
            },
          },
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'current',
            'zh-CN': '当前项',
          },
          tip: 'current | 当前项',
        },
        name: 'current',
        description: '当前项',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
              },
              {
                componentName: 'NumberSetter',
              },
            ],
          },
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description: '点击按钮',
          // @ts-ignore
          template: "onTabChange(e, ${extParams}) {\n  console.log('onTabChange');\n}",
        },
      ],
    },
    component: {
      nestingRule: {
        parentWhitelist: ['Page', 'Component'],
      },
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '底部标签',
    screenshot: '',
    schema: {
      componentName: 'FooterBar',
      props: {
        list: [
          {
            text: '首页',
            name: 'home',
            width: 24,
            height: 24,
          },
          {
            text: '发现',
            name: 'find',
            width: 24,
            height: 24,
          },
          {
            text: '我的',
            name: 'my',
            width: 24,
            height: 24,
          },
        ],
      },
    },
  },
];

export default {
  ...FooterBarMeta,
  snippets,
};
