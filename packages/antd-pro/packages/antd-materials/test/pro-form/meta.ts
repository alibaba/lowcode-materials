
import proform from '../utils/form'

const ProFormMeta = {
  "componentName": "ProForm",
  "title": "高级表单",
  group: '高级组件',
  category: '表单类',
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'ProForm',
    main: '',
    destructuring: true,
    subName: ''
  },
  "configure": {
    "props":[
     ...proform
    ],
    "supports": {
      "className": true,
      "style": true,
      "events": [
        {
          "name": "onValuesChange"
        },
        {
          "name": "onFinishFailed"
        },
        {
          "name": "onFinish",
          "description": "表单结束后调用"
        },
        {
          "name": "onInit",
          "description": "@name 表单初始化成功，比如布局，label等计算完成"
        },
        {
          "name": "onReset",
          "description": ""

        }
      ]
    },
    component: { isContainer: true },

  }
};
const snippets = [
  {
    "title": "高级表单",
    "screenshot": "",
    "schema": {
      "componentName": "ProForm",
      "props": {

        render: {
          type: 'JSSlot',
          value: [
            {
              componentName: 'Button',
              props: {
                type: 'link',
                children: '重置',
                htmlType: 'button',
                size: 'small',
                shape: 'default',
                block: false,
                danger: false,
                ghost: false,
                disabled: false,
                icon: ''
              }
            },
            {
              componentName: 'Button',
              props: {
                type: 'info',
                children: '提交',
                htmlType: 'button',
                size: 'small',
                shape: 'default',
                block: false,
                danger: false,
                ghost: false,
                disabled: false,
                icon: ''
              }
            },
          ]
        },
        
        // "omitNil": "true",
        // "grid": "false",
        // "colProps": "{ xs: 24 }",
        "rowProps": "{ gutter: 8 }"
      }
    }
  }
];

export default {
  ...ProFormMeta,
  snippets
};
