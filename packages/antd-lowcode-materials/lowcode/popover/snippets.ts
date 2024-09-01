export default [
  {
    title: '气泡卡片',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/popover-1.jpg',
    schema: {
      componentName: 'Popover',
      props: {
        "title": "Appthen卡片显示",
        "content": "",
        "defaultOpen": false,
        "placement": "bottom",
        "autoAdjustOverflow": true,
        "arrowPointAtCenter": true,
        "color": "#ffffff",
        "trigger": "hover"
      },
      "children": [
        {
          "componentName": "Button",
          "id": "node_oclsmrrz9f2",
          "props": {
            "type": "primary",
            "children": "气泡卡片",
            "htmlType": "button",
            "shape": "default",
            "block": false,
            "danger": false,
            "ghost": false,
            "disabled": false
          },
          "hidden": false,
          "title": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": ""
        }
      ]
    },
  },
];
