export default [
  {
    title: '下拉菜单',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/dropdown-1.png',
    schema: {
      componentName: 'Dropdown',
      props: {
        overlay: {
          type: 'JSSlot',
          value: [

          ],
        },
      },
      children: [
        {
          componentName: 'Button',
          props: {
            type: 'link',
            children: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Typography.Text',
                  props: {
                    children: '下拉按钮',
                    style: {
                      color: 'inherit',
                    },
                  },
                },
                {
                  componentName: 'Icon',
                  props: {
                    type: 'DownOutlined',
                    size: 15,
                    style: {
                      marginLeft: 4,
                      verticalAlign: 'middle',
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
];
