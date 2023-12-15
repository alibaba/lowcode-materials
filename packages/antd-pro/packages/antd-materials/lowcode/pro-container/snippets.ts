import { Snippet } from '@alilc/lowcode-types'

export const snippets: Snippet[] = [
  {
    title: '页容器',
    screenshot: require('./__screenshots__/container.jpg'),
    schema: {
      componentName: 'ProContainer',
      props: {
        fixedHeader: true,
        header: {
          title: '页面标题',
          subTitle: '子标题',
          extra: [
            {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'default',
                    children: '次要按钮',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false
                  }
                }
              ]
            },
            {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'default',
                    children: '次要按钮',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false
                  }
                }
              ]
            },
            {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'primary',
                    children: '主要按钮',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false
                  }
                }
              ]
            }
          ],
          breadcrumb: {
            routes: [
              {
                path: '/1',
                breadcrumbName: '一级页面'
              },
              {
                path: '/2',
                breadcrumbName: '二级页面'
              },
              {
                path: '/3',
                breadcrumbName: '当前页面'
              }
            ]
          }
        },
        tabProps: {
          type: 'editable-card',
          hideAdd: true
        },
        tabList: [
          {
            tab: '基本信息',
            key: 'base',
            closable: false
          },
          {
            tab: '详细信息',
            key: 'info'
          },
          {
            tab: '禁用',
            key: '3',
            disabled: true
          }
        ]
      }
    }
  }
]
