import { operationConfig } from '../common';
import { IComponentDescription, ISnippet } from '../types';
import { hideProp } from '../utils';

import stepProps, { operations } from './step-props';

const snippets: ISnippet[] = [
  {
    title: '步骤表单',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN01HFWZfM24k4gYve7im_!!6000000007428-55-tps-56-56.svg',
    schema: {
      componentName: 'StepForm',
      props: {
        current: 0,
        operations: [
          {
            content: '上一步',
            action: 'previous',
            type: 'secondary',
          },
          {
            content: '下一步',
            action: 'next',
            type: 'primary',
          },
        ],
      },
      children: [
        {
          componentName: 'ProForm',
          props: {
            stepItemProps: {
              title: 'StepItem',
            },
          },
          children: [...new Array(3).keys()].map((item) => ({
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
        {
          componentName: 'ProForm',
          props: {
            stepItemProps: {
              title: 'StepItem',
            },
          },
          children: [
            {
              componentName: 'ProFormItem',
              props: {
                primaryKey: String(Math.floor(Math.random() * 10000)),

                label: '表单项',
                size: 'medium',
                device: 'desktop',
              },
            },
            {
              componentName: 'ProFormItem',
              props: {
                primaryKey: String(Math.floor(Math.random() * 10000)),

                label: '表单项',
                size: 'medium',
                device: 'desktop',
              },
            },
            {
              componentName: 'ProFormItem',
              props: {
                primaryKey: String(Math.floor(Math.random() * 10000)),

                label: '表单项',
                size: 'medium',
                device: 'desktop',
              },
            },
          ],
        },
      ],
    },
  },
];

const ProFormMeta: IComponentDescription[] = [
  {
    componentName: 'StepForm',
    category: '表单类',
    title: '步骤表单',
    group: '精选组件',
    docUrl: '',
    screenshot: '',
    devMode: 'procode',
    npm: {
      package: '@alifd/fusion-ui',
      version: '0.1.4',
      exportName: 'StepForm',
      main: 'lib/index.js',
      destructuring: true,
      subName: '',
    },
    configure: {
      component: {
        isContainer: false,
      },
      supports: {
        style: true,
        events: ['saveField', 'onSubmit', 'onChange'],
      },
      props: [...stepProps, operationConfig, operations],
    },
    snippets,
  },
  {
    componentName: 'Step.Item',
    title: '步骤项',
    docUrl: '',
    screenshot: '',
    npm: {
      package: '@alifd/next',
      version: '{{version}}',
      exportName: 'Step',
      main: '',
      destructuring: true,
      subName: 'Item',
    },
    props: [
      {
        name: 'icon',
        propType: 'string',
        description: '图标',
      },
      {
        name: 'title',
        propType: {
          type: 'instanceOf',
          value: 'node',
        },
        defaultValue: '步骤项',
        description: '标题',
      },
      {
        name: 'content',
        title: {
          label: '内容',
          tip: 'content|内容填充, shape为 arrow 时无效',
        },
        propType: {
          type: 'instanceOf',
          value: 'node',
        },
        description: '内容填充, shape为 arrow 时无效',
      },
      {
        name: 'status',
        title: {
          label: '状态',
          tip: 'status|步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`',
        },
        propType: {
          type: 'oneOf',
          value: ['wait', 'process', 'finish'],
        },
        description:
          '步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`',
      },
      {
        name: 'percent',
        propType: 'number',
        description: '百分比',
      },
      {
        name: 'disabled',
        propType: 'bool',
        description: '是否禁用',
      },
      {
        name: 'onClick',
        propType: 'func',
        description: '点击步骤时的回调\n@param {Number} index 节点索引',
      },
      {
        name: 'className',
        propType: 'string',
        description: '自定义样式',
      },
      {
        name: 'style',
        propType: 'object',
      },
    ],
    configure: {
      props: {
        isExtends: true,
        override: [
          {
            name: 'icon',
            title: {
              label: '图标',
              tip: 'icon|图标',
            },
            setter: {
              componentName: 'IconSetter',
            },
          },
          {
            name: 'title',
            setter: {
              componentName: 'StringSetter',
            },
            defaultValue: '步骤项',
            title: '标题',
          },
          {
            name: 'content',
            condition: hideProp,
            title: {
              label: '内容',
              tip: 'content|内容',
            },
            setter: {
              componentName: 'TextAreaSetter',
            },
          },
          {
            name: 'status',
            title: {
              label: '状态',
              tip: 'status|状态',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '等待',
                    value: 'wait',
                  },
                  {
                    title: '进行中',
                    value: 'process',
                  },
                  {
                    title: '结束',
                    value: 'finish',
                  },
                  {
                    title: '默认',
                    value: '',
                  },
                ],
              },
            },
          },
        ],
      },
    },
    category: 'null',
    icon: '',
  },
];

export default ProFormMeta;
