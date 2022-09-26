import snippets from './snippets.design';
import { parseData } from '../utils/parse-data';

export default {
  group: '原子组件',
  componentName: 'Collapse',
  title: '折叠面板',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: 'latest',
    exportName: 'Collapse',
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
        name: 'disabled',
        title: {
          label: '状态',
          tip: 'disabled | 是否禁用',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '普通',
                value: false,
              },
              {
                label: '禁用',
                value: true,
              },
            ],
          },
        },
        defaultValue: false,
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
          const list = parseData(value).filter((node) => node.type === 'node');
          const defaultExpandedKeys: any[] = [];
          const dataSource = list.map((item, index) => {
            if (item.state === 'active') {
              defaultExpandedKeys.push(`panel_${index}`);
            }
            return {
              key: `panel_${index}`,
              title: item.value,
              content: item.children.map(({ type, value: v }) => (type === 'node' ? v : '')),
              disabled: item.state === 'disabled',
            };
          });
          target.parent.setPropValue('defaultExpandedKeys', defaultExpandedKeys);
          target.parent.setPropValue('dataSource', dataSource);
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
  category: '信息展示',
  snippets,
};
