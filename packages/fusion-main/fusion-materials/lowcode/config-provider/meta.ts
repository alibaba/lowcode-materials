module.exports = {
    group: '原子组件',
    componentName: 'ConfigProvider',
    title: '包裹组件',
    docUrl: '',
    screenshot: '',
    npm: {
      package: '@alifd/next',
      version: '{{version}}',
      exportName: 'ConfigProvider',
      main: '',
      destructuring: true,
    },
    props: [
        {
            name: '国际化',
            title: 'locale',
            defaultValue:'zh-cn',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: '中文',
                    value: 'zh-cn',
                  },
                  {
                    label: '英文',
                    value: 'en-us',
                  },
                ],
              },
            },
          },
    ],
    category: '基础',
  };
  