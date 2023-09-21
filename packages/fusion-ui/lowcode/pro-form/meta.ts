import { IComponentDescription, ISnippet } from '../types';
import { default as props, FormItemProps } from './common/props';

import { default as ComponentsMeta } from './components';

const snippets: ISnippet[] = [
  {
    title: '高级表单',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN016gn5DQ1FeXUNKdK22_!!6000000000512-55-tps-50-36.svg',
    schema: {
      componentName: 'ProForm',
      title: '高级表单',
      props: {
        placeholder: '请在右侧面板添加表单项+',
        placeholderStyle: {
          height: '38px',
          color: '#0088FF',
          background: '#d8d8d836',
          border: 0,
          gridArea: 'span 4 / span 4',
        },
        columns: 4,
        labelCol: {
          fixedSpan: 4,
        },
        labelAlign: 'top',
        emptyContent: '添加表单项',
      },
      children: [...new Array(8).keys()].map((item) => ({
        componentName: 'FormInput',
        props: {
          formItemProps: {
            primaryKey: String(Math.floor(Math.random() * 10000) + item),
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      })),
    },
  },
];

const ProFormMeta: IComponentDescription[] = [
  {
    componentName: 'ProForm',
    category: '表单类',
    title: '高级表单',
    group: '精选组件',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: {
      package: '@alifd/fusion-ui',
      version: '0.1.4',
      exportName: 'ProForm',
      main: 'lib/index.js',
      destructuring: true,
      subName: '',
    },
    configure: {
      component: {
        isContainer: true,
        isMinimalRenderUnit: true,
        nestingRule: {
          childWhitelist: new RegExp('form.*', 'i'),
        },
      },
      supports: {
        style: true,
        events: ['saveField', 'onSubmit', 'onChange'],
      },
      props,
    },
    snippets,
  },
  {
    componentName: 'ProFormItem',
    title: '表单项',
    docUrl: '',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN016gn5DQ1FeXUNKdK22_!!6000000000512-55-tps-50-36.svg',
    icon: 'https://img.alicdn.com/imgextra/i2/O1CN016gn5DQ1FeXUNKdK22_!!6000000000512-55-tps-50-36.svg',
    devMode: 'proCode',
    npm: {
      package: '@alifd/fusion-ui',
      version: '0.1.4',
      exportName: 'ProForm',
      main: 'lib/index.js',
      destructuring: true,
      subName: 'Item',
    },
    configure: {
      component: {
        disableBehaviors: ['copy'],
        nestingRule: {
          parentWhitelist: ['ProForm'],
        },
      },
      props: FormItemProps,
      supports: {
        style: true,
        events: ['onPressEnter', 'onClear', 'onChange', 'onKeyDown', 'onFocus', 'onBlur'],
      },
      advanced: {
        initialChildren: [
          {
            componentName: 'FormInput',
            props: {
              hasBorder: true,
              size: 'medium',
              autoComplete: 'off',
            },
          },
        ],
        callbacks: {
          onNodeRemove: (removedNode, currentNode) => {
            if (!removedNode || !currentNode) {
              return;
            }
            const { children } = currentNode;
            // 若无 children，则说明当前 P 组件内已为空，需要删除 FormItem 组件本身
            if (children && children.isEmptyNode) {
              currentNode.remove();
            }
          },
        },
      },
    },
  },
];

export default [...ProFormMeta, ...ComponentsMeta];
