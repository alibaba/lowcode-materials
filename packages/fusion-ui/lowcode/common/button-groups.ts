import { IProps } from '../types/index';
import { hideProp } from '../utils';

export const buttonConfigureProps: IProps[] = [
  {
    name: 'children',
    title: '名称',
    display: 'inline',
    initialValue: '操作',
    isRequired: true,
    setter: 'StringSetter',
  },
  {
    name: 'type',
    title: '按钮样式',
    display: 'inline',
    isRequired: true,
    initialValue: 'primary',
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [
          {
            title: '普通按钮',
            value: 'normal',
          },
          {
            title: '主按钮',
            value: 'primary',
          },
          {
            title: '次按钮',
            value: 'secondary',
          },
        ],
      },
    },
  },
  {
    name: 'key',
    title: '标识',
    condition: hideProp,
    initialValue: (currentValue, defaultValue) =>
      currentValue || defaultValue || `data-${Math.random().toString(36).substr(-6)}`,
    setter: {
      componentName: 'StringSetter',
    },
  },
  {
    name: 'disabled',
    title: '是否禁用',
    display: 'inline',
    initialValue: false,
    setter: 'BoolSetter',
  },
  {
    name: 'hidden',
    title: '是否隐藏',
    display: 'inline',
    initialValue: false,
    setter: 'BoolSetter',
  },
  {
    name: 'actionType',
    title: '操作类型(TODO)',
    condition: hideProp,
    display: 'inline',
    initialValue: 'batch',
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [
          // {
          //   title: '批量',
          //   value: 'batch',
          // },
          {
            title: '表单弹窗',
            value: 'formDialog',
          },
          {
            title: '链接',
            value: 'link',
          },
          {
            title: '导入',
            value: 'import',
          },
          // {
          //   title: '同步',
          //   value: 'sync',
          // },
          {
            title: '导出',
            value: 'export',
          },
          // {
          //   title: '解析导出',
          //   value: 'analysisExport',
          // },
        ],
      },
    },
  },
  {
    name: 'onClick',
    title: '点击事件',
    setter: 'FunctionSetter',
  },
];
export const buttonGroupConfigureProp: IProps = {
  type: 'field',
  name: 'buttonGroup',
  title: '按钮组',
  extraProps: {
    display: 'accordion',
  },
  setter: {
    componentName: 'ObjectSetter',
    props: {
      config: {
        items: [
          {
            name: 'text',
            title: {
              label: '文字模式',
              tip: '是否设定按钮为文字模式',
            },
            setter: 'BoolSetter',
          },
          {
            name: 'visibleButtonCount',
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
          {
            name: 'dataSource',
            title: '按钮组',
            extraProps: {
              display: 'plain',
            },
            setter: {
              componentName: 'ArraySetter',
              props: {
                hideDescription: true,
                itemSetter: {
                  componentName: 'ObjectSetter',
                  props: {
                    config: {
                      items: buttonConfigureProps,
                    },
                  },
                  initialValue: () => ({
                    children: '操作',
                    type: 'normal',
                  }),
                },
              },
            },
          },
        ],
      },
    },
  },
};
