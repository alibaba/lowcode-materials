export default {
  group: '原子组件',
  componentName: 'Breadcrumb',
  title: '面包屑',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Breadcrumb',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      description: '样式类名的品牌前缀',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '面包屑子节点，需传入 Breadcrumb.Item',
    },
    {
      name: 'maxNode',
      propType: {
        type: 'oneOfType',
        value: [
          'number',
          {
            type: 'oneOf',
            value: ['auto'],
          },
        ],
      },
      description: '面包屑最多显示个数，超出部分会被隐藏, 设置为 auto 会自动根据父元素的宽度适配。',
      defaultValue: 100,
    },
    {
      name: 'separator',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '分隔符，可以是文本或 Icon',
    },
    {
      name: 'component',
      propType: {
        type: 'oneOfType',
        value: ['string', 'func'],
      },
      description: '设置标签类型',
      defaultValue: 'nav',
    },
    {
      name: 'className',
      propType: 'any',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['Breadcrumb.Item'],
      },
    },
    props: [
      {
        name: 'maxNode',
        title: {
          label: '最大节点数',
          tip: '默认 100',
        },
        setter: 'NumberSetter',
      },
      {
        name: '!items',
        title: '内容',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'primaryKey',
                      title: '面包屑项编号',
                      condition: () => false,
                      initialValue: (val) => {
                        if (val) return val;
                        return String(Math.floor(Math.random() * 10000));
                      },
                      setter: 'StringSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'children',
                      title: '标题',
                      important: true,
                      initialValue: {
                        zh_CN: '',
                        en_US: '',
                        type: 'i18n',
                      },
                      setter: 'StringSetter',
                    },
                    {
                      name: 'link',
                      title: '链接',
                      initialValue: {
                        zh_CN: '',
                        en_US: '',
                        type: 'i18n',
                      },
                      setter: 'StringSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'target',
                      title: '打开方式',
                      initialValue: {
                        zh_CN: '',
                        en_US: '',
                        type: 'i18n',
                      },
                      setter: {
                        componentName: 'RadioGroupSetter',
                        initialValue: '_self',
                        props: {
                          options: [
                            {
                              title: '新开页面',
                              value: '_blank',
                            },
                            {
                              title: '当前页面',
                              value: '_self',
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  children: 'Title',
                  target: '_self',
                };
              },
            },
          },
        },
        extraProps: {
          virtual: () => true,
          getValue: (target, value) => {
            console.log('getValue: ', target, value);
            return target.getNode().children.map((child) => {
              return {
                primaryKey: String(child.getPropValue('primaryKey')),
                children: child.getPropValue('children'),
                link: child.getPropValue('link'),
                target: child.getPropValue('target'),
              };
            });
          },
          setValue: (target, value) => {
            console.log('setValue: ', target, value);
            const node = target.getNode();
            const map = {};
            if (!Array.isArray(value)) {
              value = [];
            }
            value.forEach((item) => {
              const BreadcrumbItem = Object.assign({}, item);
              map[item.primaryKey] = BreadcrumbItem;
            });
            node.mergeChildren(
              (child) => {
                const primaryKey = String(child.getPropValue('primaryKey'));
                console.log(child.id + '----' + primaryKey);
                if (Object.hasOwnProperty.call(map, primaryKey)) {
                  child.setPropValue('children', map[primaryKey].children);
                  child.setPropValue('link', map[primaryKey].link);
                  child.setPropValue('target', map[primaryKey].target);
                  delete map[primaryKey];
                  return false;
                }
                return true;
              },
              () => {
                const items = [];
                for (const primaryKey in map) {
                  if (Object.hasOwnProperty.call(map, primaryKey)) {
                    items.push({
                      componentName: 'Breadcrumb.Item',
                      props: map[primaryKey],
                    });
                  }
                }
                console.log('adder: ', items);
                return items;
              },
              (child1, child2) => {
                const a = value.findIndex(
                  (item) => String(item.primaryKey) === String(child1.getPropValue('primaryKey')),
                );
                const b = value.findIndex(
                  (item) => String(item.primaryKey) === String(child2.getPropValue('primaryKey')),
                );
                console.log('a: ', a);
                console.log('b: ', b);
                return a - b;
              },
            );
          },
          onChange: () => {
            console.log('onChange: ', arguments);
          },
        },
      },
    ],
    supports: {
      style: true,
    },
  },
  icon: '',
  category: '导航',
  snippets: require('./snippets'),
};
