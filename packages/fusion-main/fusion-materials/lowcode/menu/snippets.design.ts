import { getDataFromPlainText } from './adaptor';

const plainData =
  '#Group1\noption1\n*option2\n\tsub option3\n\t-sub option4\n\tsub option5\n---\n#Group2\noption1\n*option2';
const { children, selectedKeys } = getDataFromPlainText(plainData);

const menuProps = {
  plainData,
};

if (selectedKeys && selectedKeys.length) {
  menuProps.selectedKeys = selectedKeys;
}

export default [
  {
    title: '菜单',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_dialog.png',
    schema: {
      componentName: 'Menu',
      props: {
        ...menuProps,
      },
      children,
    },
  },
];
