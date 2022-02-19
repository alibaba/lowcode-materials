import { getDataFromPlainText } from '../split-button/adaptor';

const plainData = 'Edit Document\n\tUndo\n\tRedo\n\tCut\n\tCopy\n\tPaste';
const { label, children, selectedKeys } = getDataFromPlainText(plainData);

const splitButtonProps = {
  prefix: 'next-',
  type: 'normal',
  size: 'medium',
  label: label,
  defaultSelectedKeys: [],
  autoWidth: true,
  popupTriggerType: 'click',
  plainData,
};

if (selectedKeys && selectedKeys.length) {
  splitButtonProps.selectedKeys = selectedKeys;
}
const menuButtonProps = splitButtonProps;

const snippets = [
  {
    title: '按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png',
    schema: {
      componentName: 'Button',
      props: {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        htmlType: 'button',
        component: 'button',
        children: '取消',
      },
    },
  },
  {
    title: '分隔按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_split-button.png',
    schema: {
      componentName: 'SplitButton',
      props: splitButtonProps,
      children,
    },
  },
  {
    title: '菜单按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_menu-button.png',
    schema: {
      componentName: 'MenuButton',
      props: menuButtonProps,
      children,
    },
  },
];

export default snippets;
