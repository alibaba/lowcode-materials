import { IPublicTypeConfigure } from '@alilc/lowcode-types';

export const actionConfigure: NonNullable<IPublicTypeConfigure['props']> = [
  {
    type: 'field',
    name: 'cardProps.actionButtons',
    title: '操作配置',
    extraProps: {
      display: 'accordion',
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'children',
                  title: '名称',
                  display: 'inline',
                  initialValue: '操作',
                  important: true,
                  setter: 'StringSetter',
                },
                {
                  name: 'onClick',
                  title: '点击事件',
                  display: 'inline',
                  important: true,
                  setter: 'FunctionSetter',
                },
              ],
            },
          },
          initialValue: () => {
            return {
              children: '操作',
            };
          },
        },
      },
    },
  },
  {
    name: 'cardProps.text',
    title: {
      label: '文字模式',
      tip: '是否设定按钮为文字模式',
    },
    setter: 'BoolSetter',
  },
  {
    name: 'cardProps.visibleButtonCount',
    title: {
      label: '可见数量',
      tip: '超过会收起到”更多“菜单中',
    },
    extraProps: {
      defaultValue: 3,
    },
    setter: {
      componentName: 'NumberSetter',
      props: {
        max: 6,
        min: 1,
      },
    },
  },
];
