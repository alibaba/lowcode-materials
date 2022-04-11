import { getDataFromPlainText } from './adaptor';
const plainData =
  'Step 1\n\tOpen the door Put the elephant into the fridge\n*Step 2\n\tOpen the door Put the elephant into the fridge\nStep 3\n\tOpen the door Put the elephant into the fridge\nStep 4\n\tOpen the door Put the elephant into the fridge';
const { children } = getDataFromPlainText(plainData);

export default [
  {
    title: '步骤',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_step.png',
    schema: {
      componentName: 'Step',
      props: {
        prefix: 'next-',
        direction: 'hoz',
        labelPlacement: 'ver',
        shape: 'circle',
        animation: true,
      },
      children,
    },
  },
];
