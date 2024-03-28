export default {
    componentName: 'NavFusion',
    title: 'NavFusion',
    docUrl: '',
    screenshot: '',
    npm: {
      package: '@alifd/next',
      version: '{{version}}',
      exportName: 'NavFusion',
      main: '',
      destructuring: true,
      subName: 'NavFusion',
    },
    props: [
      {
        name: 'prefix',
        propType: 'string',
        defaultValue: 'next-',
      }
    ],
    configure: {
      props: [],
    },
    category: '基础',
    snippets: [
        {
          title: 'NavFusion',
          screenshot:
            'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png',
          schema: {
            componentName: 'NavFusion',
            props: {
              "style.width":'100%',
              "style.height":'100px'
            },
          },
        },
      ],
  };
  