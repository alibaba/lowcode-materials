
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProCardMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProCard",
  "title": "ProCard",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProCard",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tabs",
            "zh-CN": "标签栏配置"
          },
          "tip": "tabs | 标签栏配置"
        },
        "name": "tabs",
        "description": "标签栏配置",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headStyle",
            "zh-CN": "标题样式"
          },
          "tip": "headStyle | 标题样式"
        },
        "name": "headStyle",
        "description": "标题样式",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bodyStyle",
            "zh-CN": "内容样式"
          },
          "tip": "bodyStyle | 内容样式"
        },
        "name": "bodyStyle",
        "description": "内容样式",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headerBordered",
            "zh-CN": "页头是否有分割线"
          },
          "tip": "headerBordered | 页头是否有分割线"
        },
        "name": "headerBordered",
        "description": "页头是否有分割线",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "卡片标题"
          },
          "tip": "title | 卡片标题"
        },
        "name": "title",
        "description": "卡片标题",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "subTitle",
            "zh-CN": "副标题"
          },
          "tip": "subTitle | 副标题"
        },
        "name": "subTitle",
        "description": "副标题",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tooltip",
            "zh-CN": "标题说明"
          },
          "tip": "tooltip | 标题说明"
        },
        "name": "tooltip",
        "description": "标题说明",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tip",
            "zh-CN": "@deprecate"
          },
          "tip": "tip | @deprecated 你可以使用 tooltip，这个更改是为了与 antd 统一"
        },
        "name": "tip",
        "description": "@deprecated 你可以使用 tooltip，这个更改是为了与 antd 统一",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "extra",
            "zh-CN": "右上角自定义区域"
          },
          "tip": "extra | 右上角自定义区域"
        },
        "name": "extra",
        "description": "右上角自定义区域",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "layout",
            "zh-CN": "布局，center "
          },
          "tip": "layout | 布局，center 代表垂直居中"
        },
        "name": "layout",
        "description": "布局，center 代表垂直居中",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "center",
                "value": "center"
              }
            ],
            "options": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "center",
                "value": "center"
              }
            ]
          },
          "initialValue": "default"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "卡片类型"
          },
          "tip": "type | 卡片类型"
        },
        "name": "type",
        "description": "卡片类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "inner",
                "value": "inner"
              }
            ],
            "options": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "inner",
                "value": "inner"
              }
            ]
          },
          "initialValue": "default"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "direction",
            "zh-CN": "指定 Flex 方向"
          },
          "tip": "direction | 指定 Flex 方向，仅在嵌套子卡片时有效"
        },
        "name": "direction",
        "description": "指定 Flex 方向，仅在嵌套子卡片时有效",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "column",
                "value": "column"
              },
              {
                "label": "row",
                "value": "row"
              }
            ],
            "options": [
              {
                "label": "column",
                "value": "column"
              },
              {
                "label": "row",
                "value": "row"
              }
            ]
          },
          "initialValue": "column"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "wrap",
            "zh-CN": "是否自动换行，仅在嵌"
          },
          "tip": "wrap | 是否自动换行，仅在嵌套子卡片时有效"
        },
        "name": "wrap",
        "description": "是否自动换行，仅在嵌套子卡片时有效",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "尺寸"
          },
          "tip": "size | 尺寸"
        },
        "name": "size",
        "description": "尺寸",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "small",
                "value": "small"
              }
            ],
            "options": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "small",
                "value": "small"
              }
            ]
          },
          "initialValue": "default"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "加载中"
          },
          "tip": "loading | 加载中"
        },
        "name": "loading",
        "description": "加载中",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "colSpan",
            "zh-CN": "栅格布局宽度，24 "
          },
          "tip": "colSpan | 栅格布局宽度，24 栅格，支持指定宽度或百分，需要支持响应式 colSpan={{ xs: 12, sm: 6 }}"
        },
        "name": "colSpan",
        "description": "栅格布局宽度，24 栅格，支持指定宽度或百分，需要支持响应式 colSpan={{ xs: 12, sm: 6 }}",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "gutter",
            "zh-CN": "栅格间距"
          },
          "tip": "gutter | 栅格间距"
        },
        "name": "gutter",
        "description": "栅格间距",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
                        },
                        {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "extraSetter": {
                                "componentName": "MixedSetter",
                                "isRequired": false,
                                "props": {}
                              }
                            }
                          },
                          "isRequired": false,
                          "initialValue": {}
                        }
                      ]
                    }
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "actions",
            "zh-CN": "操作按钮"
          },
          "tip": "actions | 操作按钮"
        },
        "name": "actions",
        "description": "操作按钮",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "SlotSetter",
                    "props": {
                      "mode": "node"
                    },
                    "isRequired": false,
                    "initialValue": {
                      "type": "JSSlot",
                      "value": []
                    }
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "split",
            "zh-CN": "拆分卡片方式"
          },
          "tip": "split | 拆分卡片方式"
        },
        "name": "split",
        "description": "拆分卡片方式",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              }
            ],
            "options": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              }
            ]
          },
          "initialValue": "vertical"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bordered",
            "zh-CN": "是否有边框"
          },
          "tip": "bordered | 是否有边框"
        },
        "name": "bordered",
        "description": "是否有边框",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "hoverable",
            "zh-CN": "鼠标移过时可浮起"
          },
          "tip": "hoverable | 鼠标移过时可浮起"
        },
        "name": "hoverable",
        "description": "鼠标移过时可浮起",
        "defaultValue": "false",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ghost",
            "zh-CN": "幽灵模式，即是否取消"
          },
          "tip": "ghost | 幽灵模式，即是否取消卡片内容区域的 padding 和 背景颜色。"
        },
        "name": "ghost",
        "description": "幽灵模式，即是否取消卡片内容区域的 padding 和 背景颜色。",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "collapsible",
            "zh-CN": "是否可折叠"
          },
          "tip": "collapsible | 是否可折叠"
        },
        "name": "collapsible",
        "description": "是否可折叠",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "collapsed",
            "zh-CN": "受控 collaps"
          },
          "tip": "collapsed | 受控 collapsed 属性"
        },
        "name": "collapsed",
        "description": "受控 collapsed 属性",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "collapsibleIconRender",
            "zh-CN": "折叠按钮自定义节点"
          },
          "tip": "collapsibleIconRender | 折叠按钮自定义节点"
        },
        "name": "collapsibleIconRender",
        "description": "折叠按钮自定义节点",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultCollapsed",
            "zh-CN": "配置默认是否折叠"
          },
          "tip": "defaultCollapsed | 配置默认是否折叠"
        },
        "name": "defaultCollapsed",
        "description": "配置默认是否折叠",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCollapse",
            "zh-CN": "收起卡片的事件"
          },
          "tip": "onCollapse | 收起卡片的事件"
        },
        "name": "onCollapse",
        "description": "收起卡片的事件",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefixCls",
            "zh-CN": "前缀"
          },
          "tip": "prefixCls | 前缀"
        },
        "name": "prefixCls",
        "description": "前缀",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ref",
            "zh-CN": "ProCard 的 "
          },
          "tip": "ref | ProCard 的 ref"
        },
        "name": "ref",
        "description": "ProCard 的 ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "checked",
            "zh-CN": "是否展示选中样式"
          },
          "tip": "checked | 是否展示选中样式"
        },
        "name": "checked",
        "description": "是否展示选中样式",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChecked",
            "zh-CN": "选中改变"
          },
          "tip": "onChecked | 选中改变"
        },
        "name": "onChecked",
        "description": "选中改变",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "boxShadow",
            "zh-CN": "card的阴影"
          },
          "tip": "boxShadow | card的阴影"
        },
        "name": "boxShadow",
        "description": "card的阴影",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProCard",
    "screenshot": "",
    "schema": {
      "componentName": "ProCard",
      "props": {
        "hoverable": "false"
      }
    }
  }
];

export default {
  ...ProCardMeta,
  snippets
};
