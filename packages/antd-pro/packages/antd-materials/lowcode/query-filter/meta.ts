

const QueryFilterMeta = {
  "componentName": "QueryFilter",
  "title": "查询请求",
  "docUrl": "",
  group: '高级组件',
  category: '表单类',
  "screenshot": "",
  "devMode": "proCode",
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'QueryFilter',
    main: '',
    destructuring: true,
    subName: ''
  },
  "configure": {
    "props":[
      {
        title: '搜索设置',
        display: 'block',
        type: 'group',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'searchText',
                'zh-CN': '搜索文字'
              },
              tip: 'searchText | 查询按钮的文本'
            },
            name: 'searchText',
            setter: {
              componentName: 'StringSetter',
              isRequired: false,
              initialValue: ''
            },
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'resetText',
                'zh-CN': '重置文字'
              },
              tip: 'resetText | 重置按钮的文本'
            },
            name: 'resetText',
            setter: {
              componentName: 'StringSetter',
              isRequired: false,
              initialValue: ''
            }
          },
          {
            name: 'labelWidth',
            title: {
              label: '标签宽度',
              tip: 'labelWidth | 标签宽度'
            },
            propType: 'number',
            setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
          },
          {
            name: 'span',
            title: {
              label: '所占列数',
              tip: 'span | 所占列数'
            },
            propType: 'number',
            setter: 'NumberSetter',
          },
          {
            name: 'defaultCollapsed',
            title: {
              label: '默认是否收起',
              tip: 'defaultCollapsed | 默认是否收起'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: true,
          }
        
        ]
      },

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
    "title": "搜索查询",
    "screenshot": "https://cdn.appthen.com/editor/antd/img/appthen-search.svg",
    "schema": {
      "componentName": "QueryFilter",
      "props": {
        // "omitNil": "true",
        // "grid": "false",
        // "colProps": "{ xs: 24 }",
        // "rowProps": "{ gutter: 8 }"
      }
    }
  }
];

export default {
  ...QueryFilterMeta,
  snippets
};
