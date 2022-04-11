export default {
  componentName: 'PageHeader',
  title: '页头',
  category: '导航',
  props: [
    {
      name: 'title',
      title: { label: '标题', tip: '自定义标题文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'subTitle',
      title: { label: '二级标题', tip: '自定义的二级标题文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'ghost',
      title: { label: 'ghost风格', tip: 'ghost风格' },
      propType: 'bool',
      defaultValue: true,
    },
    // {
    //   name: 'backIcon',
    //   title: {
    //     label: '返回按钮',
    //     tip: '自定义 back icon ，如果为 false 不渲染 back icon',
    //   },
    //   propType: { type: 'oneOfType', value: ['node', 'bool'] },
    // },
    {
      name: 'tags',
      title: { label: 'tag 列表', tip: 'title 旁的 tag 列表' },
      propType: 'node',
    },
    {
      name: 'extra',
      title: { label: '操作区', tip: '操作区，位于 title 行的行尾' },
      propType: 'node',
    },
    {
      name: 'footer',
      title: { label: '页脚', tip: 'PageHeader 的页脚，一般用于渲染 TabBar' },
      propType: 'node',
    },
    {
      name: 'avatar',
      title: { label: '头像', tip: '标题栏旁的头像' },
      propType: 'object',
      supportVariable: false,
      setter: [
        {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'src',
                  title: { label: '地址', tip: '头像地址' },
                  setter: {
                    componentName: 'StringSetter',
                  },
                },
              ],
            },
          },
        },
        'JsonSetter',
      ],
    },
    {
      name: 'breadcrumb',
      title: { label: '面包屑的配置', tip: '面包屑的配置' },
      propType: 'object',
      supportVariable: false,
      setter: [
        {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'routes',
                  title: { label: '路由栈信息', tip: '路由栈信息' },
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'ObjectSetter',
                        initialValue: {
                          path: 'path',
                          breadcrumbName: 'pathName',
                        },
                        isRequired: true,
                        props: {
                          config: {
                            items: [
                              {
                                name: 'path',
                                defaultValue: 'path',
                                title: { label: '路径', tip: 'path | 路径' },
                                setter: 'StringSetter',
                              },
                              {
                                name: 'breadcrumbName',
                                defaultValue: 'pathName',
                                title: {
                                  label: '名称',
                                  tip: 'breadcrumbName | 名称',
                                },
                                setter: 'StringSetter',
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
        'JsonSetter',
      ],
    },
    {
      name: 'onBack',
      title: { label: '返回按钮的点击事件', tip: '返回按钮的点击事件' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onBack',
          template:
            "onBack(${extParams}){\n// 返回按钮的点击事件\nconsole.log('onBack');}",
        },
      ],
    },
  },
};
