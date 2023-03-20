// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/.dumi/theme/layout.tsx')})],
    "routes": [
      {
        "path": "/bar-chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'BarChart__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/BarChart/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/BarChart/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/bar-chart",
            "title": "BarChart"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/column-chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ColumnChart__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ColumnChart/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/ColumnChart/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/column-chart",
            "title": "ColumnChart"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/donut-chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'DonutChart__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/DonutChart/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/DonutChart/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "显示百分比",
              "heading": "显示百分比"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/donut-chart",
            "title": "DonutChart"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/edit-table",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'EditTable__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/EditTable/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/EditTable/index.md",
          "updatedTime": 1670561199000,
          "componentName": "EditTable",
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/edit-table",
            "title": "EditTable"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/expand-table",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ExpandTable__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ExpandTable/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/ExpandTable/index.md",
          "updatedTime": 1670561199000,
          "componentName": "ExpandTable",
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/expand-table",
            "title": "ExpandTable"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/filter",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'Filter__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/Filter/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/Filter/index.md",
          "updatedTime": 1670561199000,
          "componentName": "Filter",
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/filter",
            "title": "Filter"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/group-table",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'GroupTable__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/GroupTable/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/GroupTable/index.md",
          "updatedTime": 1670561199000,
          "componentName": "GroupTable",
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/group-table",
            "title": "GroupTable"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/line-chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'LineChart__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/LineChart/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/LineChart/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "缩略轴",
              "heading": "缩略轴"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/line-chart",
            "title": "LineChart"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/page-header",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'PageHeader__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PageHeader/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/PageHeader/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "面包屑用法",
              "heading": "面包屑用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/page-header",
            "title": "PageHeader"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/pie-chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'PieChart__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PieChart/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/PieChart/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "标签显示百分比",
              "heading": "标签显示百分比"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/pie-chart",
            "title": "PieChart"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/pro-dialog",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ProDialog__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDialog/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/ProDialog/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "长文本",
              "heading": "长文本"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/pro-dialog",
            "title": "ProDialog"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/pro-drawer",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ProDrawer__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDrawer/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/ProDrawer/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/pro-drawer",
            "title": "ProDrawer"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/pro-form",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ProForm__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProForm/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/ProForm/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "操作按钮用法",
              "heading": "操作按钮用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/pro-form",
            "title": "ProForm"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/pro-table",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ProTable__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProTable/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/ProTable/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/pro-table",
            "title": "ProTable"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/step-form",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'StepForm__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/StepForm/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/StepForm/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/step-form",
            "title": "StepForm"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/tab-container",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'TabContainer__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/TabContainer/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/TabContainer/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/tab-container",
            "title": "TabContainer"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/anchor-form",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'anchorForm__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/anchorForm/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/anchorForm/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/anchor-form",
            "title": "AnchorForm"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/area-chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'areaChart__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/areaChart/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/areaChart/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/area-chart",
            "title": "AreaChart"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      },
      {
        "path": "/child-form",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'childForm__index.md' */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/childForm/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/src/childForm/index.md",
          "updatedTime": 1670561199000,
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "何时使用",
          "hasPreviewer": true,
          "group": {
            "path": "/child-form",
            "title": "ChildForm"
          }
        },
        "title": "何时使用 - @alifd/fusion-ui"
      }
    ],
    "title": "@alifd/fusion-ui",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
