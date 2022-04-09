export default [
  {
    title: '下拉菜单',
    screenshot: 'dropdown-1.png',
    schema: {
      componentName: 'Dropdown',
      props: {
        overlay: {
          type: 'JSSlot',
          value: [
            {
              componentName: 'Menu',
              props: {
                items: [
                  {
                    key: 'timeLinei5wd',
                    category: 'Item',
                    title: '菜单名',
                  },
                ],
              },
              children: [
                {
                  componentName: 'Menu.Item',
                  id: 'node_ocky01yzdq3',
                  props: {
                    key: 'timeLinei5wd',
                    category: 'Item',
                    title: '菜单名',
                    children: '菜单名',
                  },
                },
              ],
            },
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
                    children: 'Hover me',
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
