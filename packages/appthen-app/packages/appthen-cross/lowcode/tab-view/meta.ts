import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { uuid } from '../__utils/uuid';

const TabViewMeta: IPublicTypeComponentMetadata = {
  componentName: 'TabView',
  title: '标签布局',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'TabView',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '导航',
  icon: 'rqetabbar',
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
            'zh-CN': '分页列表',
          },
        },
        name: 'list',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              initialValue: () => {
                return {
                  text: '按钮名称',
                  name: uuid(),
                  width: 24,
                  height: 24,
                  view: {
                    type: 'JSSlot',
                    title: '插槽容器',
                    value: [
                      {
                        componentName: 'View',
                        props: {
                          style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                          },
                        },
                        title: '页面容器',
                      },
                    ],
                  },
                }
              },
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'text',
                          'zh-CN': '按钮文字',
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
                        initialValue: 25,
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
                        initialValue: 25,
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'spacing',
                          'zh-CN': '增加间隙',
                        },
                      },
                      name: 'spacing',
                      setter: {
                        componentName: 'NumberSetter',
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
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'view',
                          'zh-CN': '分页内容',
                        },
                      },
                      name: 'view',
                      setter: {
                        componentName: 'SlotSetter',
                        initialValue: {
                          type: 'JSSlot',
                          value: [
                            {
                              componentName: 'View',
                              props: {
                                style: {
                                  flex: 1,
                                  display: 'flex',
                                  flexDirection: 'column',
                                },
                              },
                              title: '页面容器',
                            },
                          ],
                        },
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
        name: 'tabbarStyle',
        title: '底栏样式',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'tabbarStyle',
            title: {
              label: '样式设置',
              tip: '可用于设置 Footer 包裹内容部分的样式',
            },
            display: 'block',
            setter: {
              componentName: 'StyleSetter',
              props: {
                showModuleList: ['background', 'border', 'layout', 'position'],
              },
            },
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description: '标签页切换',
          // @ts-ignore
          template: "onTabChange(index, name, ${extParams}) {\n  console.log('onTabChange: ', index, name);\n}",
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
    title: '标签布局',
    screenshot: '',
    schema: {
      componentName: 'TabView',
      props: {
        list: [
          {
            text: '首页',
            name: 'home',
            width: 24,
            height: 24,
            view: {
              type: 'JSSlot',
              title: '插槽容器',
              value: [
                {
                  componentName: 'View',
                  props: {
                    style: {
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  },
                  title: '页面容器',
                },
              ],
            },
          },
          {
            text: '发现',
            name: 'find',
            width: 24,
            height: 24,
            view: {
              type: 'JSSlot',
              title: '插槽容器',
              value: [
                {
                  componentName: 'View',
                  props: {
                    style: {
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  },
                  title: '页面容器',
                },
              ],
            },
          },
          {
            text: '我的',
            name: 'my',
            width: 24,
            height: 24,
            view: {
              type: 'JSSlot',
              title: '插槽容器',
              value: [
                {
                  componentName: 'View',
                  props: {
                    style: {
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  },
                  title: '页面容器',
                },
              ],
            },
          },
        ],
      },
    },
  },
];

export default {
  ...TabViewMeta,
  snippets,
};
