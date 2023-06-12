import { hideProp } from '../utils';

const meta = {
  components: [
    {
      componentName: 'Anchor',
      group: '精选组件',
      title: '电梯容器',
      category: '布局容器类',
      docUrl: '',
      screenshot:
        'https://img.alicdn.com/imgextra/i3/O1CN01aDpmze26zlTZVDhtR_!!6000000007733-2-tps-112-112.png',
      devMode: 'proCode',
      npm: {
        package: '@alifd/fusion-ui',
        version: '1.0.24-5',
        exportName: 'Anchor',
        main: 'lib/index.js',
        destructuring: true,
        subName: '',
      },
      configure: {
        props: [
          {
            title: {
              label: { type: 'i18n', 'en-US': 'dataSource', 'zh-CN': '锚点列表数据源' },
              tip: 'dataSource | 锚点列表数据源',
            },
            name: 'dataSource',
            description: '锚点列表数据源',
            setter: {
              componentName: 'ArraySetter',
              props: {
                itemSetter: {
                  componentName: 'ObjectSetter',
                  props: {
                    config: {
                      items: [
                        {
                          title: { label: { type: 'i18n', 'en-US': 'htmlId', 'zh-CN': 'htmlId' } },
                          name: 'htmlId',
                          setter: {
                            componentName: 'StringSetter',
                            isRequired: true,
                            initialValue: '',
                          },
                        },
                        {
                          title: { label: { type: 'i18n', 'en-US': 'label', 'zh-CN': 'label' } },
                          name: 'label',
                          setter: {
                            componentName: 'StringSetter',
                            isRequired: true,
                            initialValue: '',
                          },
                        },
                        {
                          title: {
                            label: { type: 'i18n', 'en-US': 'children', 'zh-CN': 'children' },
                          },
                          name: 'children',
                          setter: {
                            componentName: 'ArraySetter',
                            props: {
                              itemSetter: {
                                componentName: 'ObjectSetter',
                                props: {},
                                isRequired: false,
                                initialValue: {},
                              },
                            },
                            initialValue: [],
                          },
                        },
                      ],
                    },
                  },
                },
              },
              isRequired: true,
              initialValue: [],
            },
          },
          {
            title: {
              label: { type: 'i18n', 'en-US': 'container', 'zh-CN': '容器，默认是 win' },
              tip: 'container | 容器，默认是 window',
            },
            condition: hideProp,
            name: 'container',
            setter: { componentName: 'FunctionSetter', isRequired: false },
          },
          {
            title: {
              label: { type: 'i18n', 'en-US': 'direction', 'zh-CN': '锚点方向' },
              tip: 'direction | 锚点方向',
            },
            name: 'direction',
            defaultValue: 'ver',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                dataSource: [
                  { label: 'ver', value: 'ver' },
                  { label: 'hoz', value: 'hoz' },
                ],
                options: [
                  { label: 'ver', value: 'ver' },
                  { label: 'hoz', value: 'hoz' },
                ],
              },
              initialValue: 'ver',
            },
          },
          {
            title: {
              label: { type: 'i18n', 'en-US': 'hasAffix', 'zh-CN': '固定在顶部' },
              tip: 'hasAffix | direction="hoz" 生效',
            },
            condition: (target) => {
              return target.getProps().getPropValue('direction') === 'hoz';
            },
            name: 'hasAffix',
            setter: { componentName: 'BoolSetter', isRequired: false, initialValue: false },
          },
          {
            title: {
              label: { type: 'i18n', 'en-US': 'affixProps', 'zh-CN': '固钉配置' },
              tip: 'affixProps | hasAffix={true} 后使用',
            },
            condition: (target) => {
              const hasAffix = target.getProps().getPropValue('hasAffix');
              return typeof hasAffix === 'boolean' && hasAffix;
            },
            name: 'affixProps',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: { type: 'i18n', 'en-US': 'container', 'zh-CN': 'container' },
                      },
                      name: 'container',
                      setter: { componentName: 'FunctionSetter', isRequired: false },
                    },
                    {
                      title: {
                        label: { type: 'i18n', 'en-US': 'offsetTop', 'zh-CN': 'offsetTop' },
                      },
                      name: 'offsetTop',
                      setter: { componentName: 'NumberSetter', isRequired: false, initialValue: 0 },
                    },
                    {
                      title: {
                        label: { type: 'i18n', 'en-US': 'offsetBottom', 'zh-CN': 'offsetBottom' },
                      },
                      name: 'offsetBottom',
                      setter: { componentName: 'NumberSetter', isRequired: false, initialValue: 0 },
                    },
                    {
                      title: { label: { type: 'i18n', 'en-US': 'onAffix', 'zh-CN': 'onAffix' } },
                      name: 'onAffix',
                      setter: { componentName: 'FunctionSetter' },
                    },
                    {
                      title: {
                        label: { type: 'i18n', 'en-US': 'useAbsolute', 'zh-CN': 'useAbsolute' },
                      },
                      name: 'useAbsolute',
                      setter: {
                        componentName: 'BoolSetter',
                        isRequired: false,
                        initialValue: false,
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
        supports: { className: true, style: true },
        component: {},
      },
    },
  ],
};

export default meta;
