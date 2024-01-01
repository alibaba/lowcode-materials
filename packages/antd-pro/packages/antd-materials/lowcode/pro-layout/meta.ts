
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ProLayoutMeta: ComponentMetadata = {
  "componentName": "ProLayout",
  "title": "中台布局",
  "docUrl": "",
  "screenshot": "",
  group: '高级组件',
  category: '布局类',
  "devMode": "proCode",
  "npm": {
    "package": "@disscode/antd-pro",
    "version": "1.0.0-rc.30",
    "exportName": "ProLayout",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
   "props":[
    

    {
      title: '菜单配置',
      display: 'block',
      type: 'group',
      items: [
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "menuExtraRender",
              "zh-CN": "标题下方"
            },
            "tip": "menuExtraRender | @name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框"
          },
          "name": "menuExtraRender",
          "description": "@name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框",
          "setter": {
            "componentName": "SlotSetter",
            initialValue: {
              type: 'JSSlot',
              params: ['menuProps'],
              value: []
            }
          }
        },
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "layout",
              "zh-CN": "菜单模式"
            },
            "tip": "layout 的菜单模式,side：右侧导航，top：顶部导航"
          },
          "name": "layout",
          "description": "@name layout 的布局方式",
          "setter": {
            "componentName": "SelectSetter",
            "props": {
              "options": [
                {
                  "label": "左侧模式",
                  "value": "side"
                },
                {
                  "label": "顶部模式",
                  "value": "top"
                },
                {
                  "label": "混合模式",
                  "value": "mix"
                },
              ]
            }
    
            
          }
        },
    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "links",
          "zh-CN": "左侧菜单"
        },
        "tip": "links | @name 侧边菜单底部的一些快捷链接"
      },
      "name": "links",
      "description": "@name 侧边菜单底部的一些快捷链接",
      "setter": {
        "componentName": "ArraySetter",
        "props": {
          "itemSetter": {
            "componentName": "SlotSetter",
            "props": {
              "mode": "node"
            },
            
            "initialValue": {
              "type": "JSSlot",
              "value": []
            }
          }
        },
        "initialValue": []
      }
    },
    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "route",
          "zh-CN": "路由信息"
        }
      },
      "name": "route",
      "setter": {
        "componentName": "JsonSetter",
        
      }
    },
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "menu",
              "zh-CN": "菜单配置"
            },
            "tip": "menu | @name menu 相关的一些配置，可以配置菜单的行为"
          },
          "name": "menu",
          "description": "@name menu 相关的一些配置，可以配置菜单的行为",
          "setter": {
            "componentName": "ObjectSetter",
            "props": {
              "config": {
                "items": [
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "locale",
                        "zh-CN": "国际化"
                      }
                    },
                    "name": "locale",
                    "setter": {
                      "componentName": "BoolSetter",
                      "initialValue": false
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "defaultOpenAll",
                        "zh-CN": "菜单项打开"
                      }
                    },
                    "name": "defaultOpenAll",
                    "setter": {
                      "componentName": "BoolSetter",
                      
                      "initialValue": false
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "ignoreFlatMenu",
                        "zh-CN": "忽略折叠菜单"
                      }
                    },
                    "name": "ignoreFlatMenu",
                    "setter": {
                      "componentName": "BoolSetter",
                      
                      "initialValue": false
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "loading",
                        "zh-CN": "loading"
                      }
                    },
                    "name": "loading",
                    "setter": {
                      "componentName": "BoolSetter",
                      
                      "initialValue": false
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "onLoadingChange",
                        "zh-CN": "onLoadingChange"
                      }
                    },
                    "name": "onLoadingChange",
                    "setter": {
                      "componentName": "FunctionSetter"
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "params",
                        "zh-CN": "params"
                      }
                    },
                    "name": "params",
                    "setter": {
                      "componentName": "ObjectSetter",
                      "props": {
                        "config": {
                          "extraSetter": {
                            "componentName": "MixedSetter",
                            
                            "props": {}
                          }
                        }
                      },
                      
                      "initialValue": {}
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "request",
                        "zh-CN": "request"
                      }
                    },
                    "name": "request",
                    "setter": {
                      "componentName": "FunctionSetter",
                      props: {
                        template:
                          'expandedRowRender(params,defaultMenuDat,${extParams}){\n// \n`}'
                      }
                    }
                  },
                  {
                    "title": {
                      "label": {
                        "type": "i18n",
                        "en-US": "type",
                        "zh-CN": "type"
                      }
                    },
                    "name": "type",
                    "setter": {
                      "componentName": "RadioGroupSetter",
                      "props": {
                        "dataSource": [
                          {
                            "label": "sub",
                            "value": "sub"
                          },
                          {
                            "label": "group",
                            "value": "group"
                          }
                        ],
                        "options": [
                          {
                            "label": "sub",
                            "value": "sub"
                          },
                          {
                            "label": "group",
                            "value": "group"
                          }
                        ]
                      },
                      "initialValue": "sub"
                    }
                  },
                ],
                "extraSetter": {
                  "componentName": "MixedSetter",
                  
                  "props": {}
                }
              }
            }
          }
        },

    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "menuRender",
          "zh-CN": "菜单渲染"
        },
        "tip": "menuRender | @name 虽然叫menuRender，但是其实是整个 SiderMenu 面板的渲染函数"
      },
      "name": "menuRender",
      "description": "@name 虽然叫menuRender，但是其实是整个 SiderMenu 面板的渲染函数",
      "setter": {
        "componentName": "MixedSetter",
        "props": {
          "setters": [
            {
              "componentName": "FunctionSetter"
            },

          ]
        }
      },
    },
    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "menuFooterRender",
          "zh-CN": "底部菜单"
        },
        "tip": "在 layout 底部渲染一个块"
      },
      "name": "menuFooterRender",
      "description": "@name 侧边菜单底部的配置，可以增加一些底部操作",
      "setter": {
        "componentName": "SlotSetter",
        title: '展开行插槽',
        initialValue: {
          type: 'JSSlot',
          params: ['menuProps'],
          value: []
        }
      },
      
    },
    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "menuHeaderRender",
          "zh-CN": "header菜单"
        },
        "tip": "渲染 logo 和 title, 优先级比 headerTitleRender 更高	"
      },
      "name": "menuHeaderRender",
      "description": "@name 菜单 logo 和 title 区域的渲染",
      "setter": {
        "componentName": "MixedSetter",
        "props": {
          "setters": [
            {
              "componentName": "SlotSetter",
              initialValue: {
                type: 'JSSlot',
                params: ['logo','title'],
                value: []
              }
            },

          ]
        }
      }
    },

    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "appListRender",
          "zh-CN": "自定义应用"
        },
        "tip": "自定义跨站点导航列表的 render 方法	"
      },
      "name": "appListRender",
      "description": "@name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框",
      "setter": {
        "componentName": "SlotSetter",
        initialValue: {
          type: 'JSSlot',
          params: ['props'],
          value: []
        }
      }
    },


    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "siderWidth",
          "zh-CN": "菜单的宽度"
        },
        "tip": "siderWidth | 菜单的宽度"
      },
      "name": "siderWidth",
      "description": "菜单的宽度",
      "setter": {
        "componentName": "NumberSetter",
        
        "initialValue": 208
      }
    },

      ]
    },
    {
      title: '头部配置',
      display: 'block',
      type: 'group',
      items: [


    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "appList",
          "zh-CN": "应用列表"
        }
      },
      "name": "appList",
      "setter": {
        "componentName": "JsonSetter",
        
      }
    },
    // {
    //   "title": {
    //     "label": {
    //       "type": "i18n",
    //       "en-US": "actionsRender",
    //       "zh-CN": "自定义操作列表"
    //     },
    //     "tip": "侧边菜单底部的一些快捷链接"
    //   },
    //   "name": "actionsRender",
    //   "description": "@name 侧边菜单底部的一些快捷链接",
    //   "setter": {
    //     "componentName": "ArraySetter",
    //     "props": {
    //       "itemSetter": {
    //         "componentName": "SlotSetter",
    //         "props": {
    //           "mode": "node"
    //         },
            
    //         "initialValue": {
    //           "type": "JSSlot",
    //           "value": []
    //         }
    //       }
    //     },
    //     "initialValue": []
    //   }
    // },
    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "headerContentRender",
          "zh-CN": "自定义header内容"
        },
        "tip": "headerContentRender | @name 顶部区域的渲染，包含内部的 menu"
      },
      "name": "headerContentRender",
      "description": "@name 顶部区域的渲染，包含内部的 menu",
      "setter": {
        "componentName": "MixedSetter",
        "props": {
          "setters": [
            {
              "componentName": "SlotSetter",
              initialValue: {
                type: 'JSSlot',
                params: ['ProLayoutProps'],
                value: []
              }
            },


          ]
        }
      }
    },
    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "headerRender",
          "zh-CN": "自定义头部"
        }
      },
      "name": "headerRender",
      "setter": {
        "componentName": "MixedSetter",
        "props": {
          "setters": [
            {
              "componentName": "SlotSetter",
              initialValue: {
                type: 'JSSlot',
                params: ['ProLayoutProps'],
                value: []
              }
            }
          ]
        }
      }
    },
    {
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "headerTitleRender",
          "zh-CN": "自定义标题"
        },
        "tip": "自定义头标题的方法，mix 模式和 top 模式下生效	"

      },
      "name": "headerTitleRender",
      "setter": {
        "componentName": "MixedSetter",
        "props": {
          "setters": [
            {
              "componentName": "SlotSetter",
              initialValue: {
                type: 'JSSlot',
                params: ['logo','title','props'],
                value: []
              }
            },

          ]
        }
      }
    },
      ]
    },
    {
      title: '内容区域',
      display: 'block',
      type: 'group',
      items: [
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "contentWidth",
              "zh-CN": "内容模式"
            },
            "tip": "layout 的内容模式,Fluid：自适应，Fixed：定宽 1200px"
          },
          "name": "contentWidth",
          "description": "@name layout of content: `Fluid` or `Fixed`, only works when layout is top",
          "setter": {
            "componentName": "RadioGroupSetter",
            "props": {
              "dataSource": [
                {
                  "label": "Fluid",
                  "value": "Fluid"
                },
                {
                  "label": "Fixed",
                  "value": "Fixed"
                }
              ],
              "options": [
                {
                  "label": "Fluid",
                  "value": "Fluid"
                },
                {
                  "label": "Fixed",
                  "value": "Fixed"
                }
              ]
            },
            "initialValue": "Fluid"
          }
        },
        {
          name: 'contentStyle',
          title: '内容样式',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'contentStyle',
              title: {
                label: '样式设置',
                tip: 'contentStyle | 用于设置 Drawer 弹出层的样式',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "content",
              "zh-CN": "内容区域"
            },
            "tip": "layout区域设置"
          },
          "name": "content",
          "setter": {
            "componentName": "SlotSetter",
            title: '展开行插槽',
            initialValue: {
              type: 'JSSlot',
              value: []
            }
          },
          
        },
      ]
    },
    {
      title: 'footer配置',
      display: 'block',
      type: 'group',
      items: [
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "footerRender",
              "zh-CN": "页脚"
            },
            "tip": "menuExtraRender | @name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框"
          },
          "name": "footerRender",
          "setter": {
            "componentName": "SlotSetter",
            initialValue: {
              type: 'JSSlot',
              params: ['props'],
    
              value: []
            }
          }
        },
      ]
    },


    {
      title: '工具配置',
      display: 'block',
      type: 'group',
      items: [
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "devops",
              "zh-CN": "开发模式"
            }
          },
          "name": "devops",
          "setter": {
            "componentName": "BoolSetter",
          }
        },

        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "menuExtraRender",
              "zh-CN": "配置设置"
            },
            "tip": "dev模式 设置"
          },
          "name": "settingsdata",
          "setter": {
            "componentName": "JsonSetter",
          }
        },
        {
          "title": {
            "label": {
              "type": "i18n",
              "en-US": "token",
              "zh-CN": "token"
            }
          },
          "name": "token",
          "setter": {
            "componentName": "JsonSetter",
            
            "initialValue": {}
          }
        },
      ]
    },







   ],
    "supports": {
      "style": true,
      "className": true,
      events:[
        'menuDataRender',
        'postMenuData',
        'onMenuHeaderClick',
       "onPageChange"
      ]
    },
    "component": {
      "isContainer": true
    }
  }
};

const snippets: Snippet[] = [
  {
    "title": "中台布局",
    "screenshot": "https://cdn.itq168.com/img/layout.svg",
    "schema": {
      "componentName": "ProLayout",
      "props": {
        avatarProps:{},
        // avatarProps: {
        //     src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        //     size: 'small',
        //     title: 'disscode',
        //   },
        devops:false,
        layout:'mix',
        route:{
          path: '/',
          routes: [
            {
              path: '/welcome',
              name: '欢迎',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: '管理页',
              access: 'canAdmin',
              component: './Admin',
              routes: [
                {
                  path: '/admin/sub-page1',
                  name: '一级页面',
                  icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page2',
                  name: '二级页面',
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page3',
                  name: '三级页面',
                  component: './Welcome',
                },
              ],
            },
            {
              name: '列表页',
              path: '/list',
              component: './ListTableList',
              routes: [
                {
                  path: '/list/sub-page',
                  name: '列表页面',
                  routes: [
                    {
                      path: 'sub-sub-page1',
                      name: '一一级列表页面',
                      component: './Welcome',
                    },
                    {
                      path: 'sub-sub-page2',
                      name: '一二级列表页面',
                      component: './Welcome',
                    },
                    {
                      path: 'sub-sub-page3',
                      name: '一三级列表页面',
                      component: './Welcome',
                    },
                  ],
                },
                {
                  path: '/list/sub-page2',
                  name: '二级列表页面',
                  component: './Welcome',
                },
                {
                  path: '/list/sub-page3',
                  name: '三级列表页面',
                  component: './Welcome',
                },
              ],
            },
            {
              path: 'https://ant.design',
              name: 'Ant Design 官网外链',
            },
          ],
        },
        location: {
          pathname: '/',
        },
        appList: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            title: 'Ant Design',
            desc: '杭州市较知名的 UI 设计语言',
            url: 'https://ant.design',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
            title: 'AntV',
            desc: '蚂蚁集团全新一代数据可视化解决方案',
            url: 'https://antv.vision/',
            target: '_blank',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            title: 'Pro Components',
            desc: '专业级 UI 组件库',
            url: 'https://procomponents.ant.design/',
          },
          {
            icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
            title: 'umi',
            desc: '插件化的企业级前端应用框架。',
            url: 'https://umijs.org/zh-CN/docs',
          },
      
          {
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
            title: 'qiankun',
            desc: '可能是你见过最完善的微前端解决方案🧐',
            url: 'https://qiankun.umijs.org/',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '语雀',
            desc: '知识创作与分享工具',
            url: 'https://www.yuque.com/',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
            title: 'Kitchen ',
            desc: 'Sketch 工具集',
            url: 'https://kitchen.alipay.com/',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
            title: 'dumi',
            desc: '为组件开发场景而生的文档工具',
            url: 'https://d.umijs.org/zh-CN',
          },
        ],
      }
      }
    }
  
];

export default {
  ...ProLayoutMeta,
  snippets
};
