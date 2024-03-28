export default [
  {
    title: '步骤条',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/steps-1.png',
    schema: {
      componentName: 'Steps',
      props: {
        current: 1,
      },
      children: [
        {
          componentName: 'Steps.Step',
          props: {
            title: '完成',
            description: 'Appthen前端低代码',
          },
        },
        {
          componentName: 'Steps.Step',
          props: {
            title: '处理中',
            subTitle: '等待 00:00:08',
            description: 'Appthen前端低代码.',
          },
        },
        {
          componentName: 'Steps.Step',
          props: {
            title: '等待',
            description: 'Appthen前端低代码.',
          },
        },
      ],
    },
  },
];
