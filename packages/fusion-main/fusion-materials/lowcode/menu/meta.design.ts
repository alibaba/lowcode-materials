import snippets from './snippets.design';
import { getDataFromPlainText } from './adaptor';

export default {
  group: '原子组件',
  componentName: 'Menu',
  title: '菜单',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Menu',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'dataSource',
      propType: 'array',
      description: '使用数据模型构建',
    },
    {
      name: 'defaultExpandedKeys',
      propType: {
        type: 'arrayOf',
        value: 'string',
      },
      description: '默认展开keys',
    },
    {
      name: 'expandedKeys',
      propType: {
        type: 'arrayOf',
        value: 'string',
      },
      description: '受控展开keys',
    },
    {
      name: 'onExpand',
      propType: 'func',
      description: '展开状态发升变化时候的回调',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '所有禁用',
    },
    {
      name: 'className',
      propType: 'string',
      description: '扩展class',
    },
    {
      name: 'style',
      propType: 'object',
      description: '组件接受行内样式',
    },
    {
      name: 'accordion',
      propType: 'bool',
      description: '手风琴模式，一次只能打开一个',
      defaultValue: false,
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: '!mode',
        title: '模式',
        setValue: (target, value) => {
          const parentTarget = target.parent;
          switch (value) {
            case 'single':
              parentTarget.setPropValue('selectMode', 'single');
              break;
            case 'multiple':
              parentTarget.setPropValue('selectMode', 'multiple');
              break;
            case 'arrowLeft':
              parentTarget.setPropValue('isSelectIconRight', false);
              break;
            case 'arrowRight':
              parentTarget.setPropValue('isSelectIconRight', true);
              break;
            default:
              break;
          }
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '单选框',
                value: 'single',
              },
              {
                title: '复选框',
                value: 'multiple',
              },
              {
                title: '箭头在左',
                value: 'arrowLeft',
              },
              {
                title: '箭头在右',
                value: 'arrowRight',
              },
            ],
          },
        },
        defaultValue: 'single',
      },
      {
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '内联',
                value: 'inline',
              },
              {
                label: '弹出',
                value: 'popup',
              },
            ],
          },
        },
        title: '子菜单模式',
        defaultValue: 'inline',
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'plainData',
        display: 'block',
        title: '内容',
        tip: {
          title: '数据格式',
          url: '',
        },
        setValue: (target, value) => {
          const { children, selectedKeys } = getDataFromPlainText(value);
          if (children) {
            target.node.children.importSchema(children);
          }
          if (selectedKeys) {
            target.parent.setPropValue('selectedKeys', selectedKeys);
          }
        },
        setter: {
          componentName: 'MagicEditorSetter',
          props: {
            toolbar: ['normal', 'active', 'disable'],
            disableIcon: true,
          },
        },
      },
    ],
  },
  icon: '',
  category: '信息输入',
  snippets,
};
