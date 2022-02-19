import { getDataFromPlainText } from './adaptor';
const plainData = 'Tab 1\nTab 2\nTab 3';
const { children } = getDataFromPlainText(plainData);

export default [
  {
    title: '普通型',
    screenshot: 'https://img.alicdn.com/tfs/TB1D0p2u.z1gK0jSZLeXXb9kVXa-112-64.png',
    schema: {
      componentName: 'Tab',
      props: {
        shape: 'pure',
        size: 'medium',
        excessMode: 'slide',
        plainData,
      },
      children,
    },
  },
];
