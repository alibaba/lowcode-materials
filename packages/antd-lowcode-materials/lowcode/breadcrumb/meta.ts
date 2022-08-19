import snippets from './snippets';

export default {
  snippets,
  componentName: 'Breadcrumb',
  title: '面包屑',
  category: '导航',
  props: [
    {
      title: '基础',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'routes',
          title: { label: '路由栈信息', tip: 'router 的路由栈信息' },
          propType: {
            type: 'arrayOf',
            value: {
              type: 'shape',
              value: [
                { name: 'path', propType: 'string' },
                { name: 'breadcrumbName', propType: 'string' },
              ],
            },
          },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'path',
                        title: { label: '路由路径', tip: 'path | 路由路径' },
                        propType: 'string',
                        setter: 'StringSetter',
                        isRequired: true
                      },
                      {
                        name: 'breadcrumbName',
                        title: {
                          label: '路由名称',
                          tip: 'breadcrumbName | 路由名称',
                        },
                        propType: 'string',
                        setter: 'StringSetter',
                        isRequired: true
                      },
                    ],
                  },
                },
                initialValue: {
                  path: 'path',
                  breadcrumbName: 'breadcrumbName',
                },
              },
            },
          },
        },
        {
          name: 'params',
          title: { label: '路由的参数', tip: '路由的参数' },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'separator',
          title: { label: '分隔符自定义', tip: '分隔符自定义' },
          propType: { type: 'oneOfType', value: ['string', 'node'] },
          setter: [
            'StringSetter',
            {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [],
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: '扩展',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'itemRender',
          title: {
            label: '自定义渲染',
            tip: 'itemRender | 自定义渲染',
          },
          propType: { type: 'oneOfType', value: ['func', 'node'] },
          setter: [
            {
              componentName: 'SlotSetter',
              title: '自定义渲染插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['route', 'params', 'routes', 'paths'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'itemRender(route, params, routes, paths,${extParams}){\n// 自定义渲染\nreturn `${route.breadcrumbName}`}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
  ],
  configure: { supports: { style: true } },
};
