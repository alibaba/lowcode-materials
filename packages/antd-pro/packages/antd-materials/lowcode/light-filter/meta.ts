

const LightFilterMeta = {
  "componentName": "LightFilter",
  "title": "查询请求",
  "docUrl": "",
  group: '高级组件',
  category: '表单类',
  "screenshot": "",
  "devMode": "proCode",
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'LightFilter',
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
                'en-US': 'collapse',
                'zh-CN': '折叠'
              },
              tip: 'collapse |是否默认折叠全部字段	 '
            },
            name: 'collapse',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'collapseLabel',
                'zh-CN': '折叠区域的标签	'
              },
              tip: 'collapseLabel | 折叠区域的标签	'
            },
            name: 'collapseLabel',
            setter:             {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [],
              },
            },
          },

          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'placement',
                'zh-CN': '重置文字'
              },
              tip: 'placement | 弹出框位置'
            },
            name: 'placement',
            setter: {
              componentName: 'SelectSetter',
              isRequired: false,
              props: {
                options: [
                  {
                    title: '下面左边',
                    value: 'bottomLeft',
                  },
                  {
                    title: '下面右边',
                    value: 'bottomRight',
                  },
                  {
                    title: '上面左边',
                    value: 'topLeft',
                  },
                  {
                    title: '上面右边',
                    value: 'topRight',
                  },
                ],
              },
            }
          },

          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'split',
                'zh-CN': '每行分割线'
              },
              tip: 'split | 每一行是否有分割线'
            },
            name: 'split',
            setter:             {
              componentName: 'BoolSetter',
            },
          },
        
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
    "title": "查询请求",
    "screenshot": "https://cdn.appthen.com/assets/disscode-search%20(1).svg",
    "schema": {
      "componentName": "LightFilter",
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
  ...LightFilterMeta,
  snippets
};
