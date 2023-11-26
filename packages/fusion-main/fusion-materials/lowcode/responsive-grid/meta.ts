module.exports = {
  group: '精选组件',
  componentName: 'ResponsiveGrid',
  title: '布局容器',
  docUrl: '',
  screenshot: 'http://cdn.itq168.com/img/20221028110307.png?imageslim',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'ResponsiveGrid',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'any',
    },
    {
      name: 'device',
      propType: {
        type: 'oneOf',
        value: ['phone', 'tablet', 'desktop'],
      },
      description: '设备，用来做自适应，默认为PC',
      defaultValue: 'desktop',
    },
    {
      name: 'columns',
      propType: 'number',
      description: '分为几列',
      defaultValue: 12,
    },
    // {
    //   name: 'style',
    //   propType: 'object',
    // },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'layout',
        title: '布局',
        defaultValue: '3:3:3:3',

        setter: {
          componentName: 'StringSetter',
        },
        extraProps: {
          setValue(target, value) {
            // 解析x:y:z的数据形式,排除不符合规范的传入
            let arrValue = value.split(':');
            arrValue = arrValue.filter((item) => {
              return item && item.trim(); // 去除空数组项
            });
            const flag = arrValue.find((item) => {
              return isNaN(Number(item));
            });
            if (flag) {
              return;
            }
            const { node } = target;
            node.children.mergeChildren(
              (child, index) => {
                child.setPropValue('colSpan', arrValue[index]);
                return index >= arrValue.length;
              },
              (children) => {
                let l = children.length;
                const items = [];
                while (l++ < arrValue.length) {
                  items.push({
                    componentName: 'ResponsiveGrid.Cell',
                    props: {
                      colSpan: arrValue[l - 1] || 1,
                    },
                  });
                }
                return items;
              },
              null,
            );
          },
        },
      },

      {
        name: 'device',
        title: {
          label: '设备类型',
        },
        supportVariable: true,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '电脑',
                value: 'desktop',
              },
              {
                label: '平板',
                value: 'tablet',
              },
              {
                label: '手机',
                value: 'phone',
              },
            ],
          },
        },
        defaultValue: '',
      },
      // {
      //   name: 'device',
      //   title: '设备类型',
      //   defaultValue: 0,
      //   setter: {
      //     componentName: 'MixedSetter',
      //     props: {
            
      //     },
      //   },
      // },
      {
        name: 'gap',
        title: '行列间距',
        defaultValue: 0,
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                props: {
                  defaultValue: 8,
                },
              },
              {
                componentName: 'JsonSetter',
                props: {
                  defaultValue: [8, 4],
                },
              },
              'ExpressionSetter',
            ],
          },
        },
      },
      {
        name: 'dense',
        title: '紧密模式',
        defaultValue: false,
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'style',
        setter: {
          componentName: 'StyleSetter',
        },
      },

    ],
  },
  icon: '',
  supports: { className: true, style: true},

  snippets: require('./snippets'),

  category: '布局容器类',
};
