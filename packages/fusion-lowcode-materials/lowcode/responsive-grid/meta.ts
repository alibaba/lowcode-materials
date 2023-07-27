module.exports = {
  group: '原子组件',
  componentName: 'ResponsiveGrid',
  title: '布局容器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
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
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'layout',
        title: '布局',
        defaultValue: '6:6',
        // setter: {
        //   componentName: 'NewArraySetter',
        //   props: {
        //     itemSetter: {
        //       componentName: 'NumberSetter',
        //     }
        //   }
        // },
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
        name: 'gap',
        title: '列间距',
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
  category: '布局容器类',
};
