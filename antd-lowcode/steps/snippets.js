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
            title: 'Finished',
            description: 'This is a description.',
          },
        },
        {
          componentName: 'Steps.Step',
          props: {
            title: 'In Progress',
            subTitle: 'Left 00:00:08',
            description: 'This is a description.',
          },
        },
        {
          componentName: 'Steps.Step',
          props: {
            title: 'Waiting',
            description: 'This is a description.',
          },
        },
      ],
    },
  },
];
