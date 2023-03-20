// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/EditTable/index.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ExpandTable/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/Filter/index.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/GroupTable/index.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/LineChart/basic.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/LineChart/slider.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PageHeader/basic.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PageHeader/breadcrumb.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PieChart/basic.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PieChart/percent.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDialog/basic.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDialog/large-content.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDrawer/basic.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProForm/basic.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProForm/operations.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProTable/basic.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProTable/service.ts?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/StepForm/basic.tsx?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/TabContainer/basic.tsx?dumi-raw-code';

export default {
  'BarChart-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/guojia/Desktop/WorkApp/\u4F4E\u4EE3\u7801\u5F00\u6E90\u57DF/lowcode-materials/packages/fusion-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _react = _interopRequireDefault(await import("react"));
    var _fusionUi = await import("@alifd/fusion-ui");
    var props = {
      data: [{
        year: '1991',
        value: 72345678
      }, {
        year: '1992',
        value: 4321132
      }, {
        year: '1993',
        value: 33121112.5
      }, {
        year: '1994',
        value: 45227221
      }, {
        year: '1995',
        value: 4321221.9
      }, {
        year: '1996',
        value: 6322121
      }, {
        year: '1997',
        value: 78312213
      }, {
        year: '1998',
        value: 4192312
      }, {
        year: '1999',
        value: 6212332
      }, {
        year: '2000',
        value: 3192312
      }],
      xField: 'value',
      yField: 'year',
      color: '#0079f2',
      label: {
        visible: true,
        position: 'middle'
      }
    };
    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("div", null, "basic demo", /*#__PURE__*/_react["default"].createElement(_fusionUi.BarChart, props));
    };
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\n\nimport { BarChart } from '@alifd/fusion-ui';\n\nconst props = {\n  data: [\n    { year: '1991', value: 72345678 },\n    { year: '1992', value: 4321132 },\n    { year: '1993', value: 33121112.5 },\n    { year: '1994', value: 45227221 },\n    { year: '1995', value: 4321221.9 },\n    { year: '1996', value: 6322121 },\n    { year: '1997', value: 78312213 },\n    { year: '1998', value: 4192312 },\n    { year: '1999', value: 6212332 },\n    { year: '2000', value: 3192312 },\n  ],\n  xField: 'value',\n  yField: 'year',\n  color: '#0079f2',\n  label: {\n    visible: true,\n    position: 'middle',\n  },\n};\n\nexport default () => {\n  return (\n    <div>\n      basic demo\n      <BarChart {...props} />\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"BarChart-demo"},
  },
  'ColumnChart-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/guojia/Desktop/WorkApp/\u4F4E\u4EE3\u7801\u5F00\u6E90\u57DF/lowcode-materials/packages/fusion-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _react = _interopRequireDefault(await import("react"));
    var _fusionUi = await import("@alifd/fusion-ui");
    var props = {
      data: [{
        year: '1991',
        value: 72345678
      }, {
        year: '1992',
        value: 4321132
      }, {
        year: '1993',
        value: 33121112.5
      }, {
        year: '1994',
        value: 45227221
      }, {
        year: '1995',
        value: 4321221.9
      }, {
        year: '1996',
        value: 6322121
      }, {
        year: '1997',
        value: 78312213
      }, {
        year: '1998',
        value: 4192312
      }, {
        year: '1999',
        value: 6212332
      }, {
        year: '2000',
        value: 3192312
      }],
      xField: 'year',
      yField: 'value',
      color: '#0079f2',
      label: {
        visible: true,
        position: 'middle'
      }
    };
    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("div", null, "basic demo", /*#__PURE__*/_react["default"].createElement(_fusionUi.ColumnChart, props));
    };
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\n\nimport { ColumnChart } from '@alifd/fusion-ui';\n\nconst props = {\n  data: [\n    { year: '1991', value: 72345678 },\n    { year: '1992', value: 4321132 },\n    { year: '1993', value: 33121112.5 },\n    { year: '1994', value: 45227221 },\n    { year: '1995', value: 4321221.9 },\n    { year: '1996', value: 6322121 },\n    { year: '1997', value: 78312213 },\n    { year: '1998', value: 4192312 },\n    { year: '1999', value: 6212332 },\n    { year: '2000', value: 3192312 },\n  ],\n  xField: 'year',\n  yField: 'value',\n  color: '#0079f2',\n  label: {\n    visible: true,\n    position: 'middle',\n  },\n};\n\nexport default () => {\n  return (\n    <div>\n      basic demo\n      <ColumnChart {...props} />\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"ColumnChart-demo"},
  },
  'DonutChart-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/guojia/Desktop/WorkApp/\u4F4E\u4EE3\u7801\u5F00\u6E90\u57DF/lowcode-materials/packages/fusion-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _react = _interopRequireDefault(await import("react"));
    var _fusionUi = await import("@alifd/fusion-ui");
    var props = {
      legend: {
        position: 'top-left'
      },
      data: [{
        year: '1991',
        value: 72345678
      }, {
        year: '1992',
        value: 4321132
      }, {
        year: '1993',
        value: 33121112.5
      }, {
        year: '1994',
        value: 45227221
      }, {
        year: '1995',
        value: 4321221.9
      }, {
        year: '1996',
        value: 6322121
      }, {
        year: '1997',
        value: 78312213
      }, {
        year: '1998',
        value: 2192312
      }, {
        year: '1999',
        value: 6212332
      }, {
        year: '2000',
        value: 1192312
      }],
      angleField: 'value',
      colorField: 'year',
      label: {
        visible: true,
        type: 'spider'
      },
      color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9']
    };
    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_fusionUi.DonutChart, props));
    };
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\n\nimport { DonutChart } from '@alifd/fusion-ui';\n\nconst props = {\n  legend: {\n    position: 'top-left',\n  },\n  data: [\n    { year: '1991', value: 72345678 },\n    { year: '1992', value: 4321132 },\n    { year: '1993', value: 33121112.5 },\n    { year: '1994', value: 45227221 },\n    { year: '1995', value: 4321221.9 },\n    { year: '1996', value: 6322121 },\n    { year: '1997', value: 78312213 },\n    { year: '1998', value: 2192312 },\n    { year: '1999', value: 6212332 },\n    { year: '2000', value: 1192312 },\n  ],\n  angleField: 'value',\n  colorField: 'year',\n  label: {\n    visible: true,\n    type: 'spider',\n  },\n  color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9'],\n};\n\nexport default () => {\n  return (\n    <div>\n      <DonutChart {...props} />\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"DonutChart-demo"},
  },
  'DonutChart-demo-1': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/guojia/Desktop/WorkApp/\u4F4E\u4EE3\u7801\u5F00\u6E90\u57DF/lowcode-materials/packages/fusion-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _react = _interopRequireDefault(await import("react"));
    var _fusionUi = await import("@alifd/fusion-ui");
    var props = {
      legend: {
        position: 'top-left'
      },
      data: [{
        year: '1991',
        value: 72345678
      }, {
        year: '1992',
        value: 4321132
      }, {
        year: '1993',
        value: 33121112.5
      }, {
        year: '1994',
        value: 45227221
      }, {
        year: '1995',
        value: 4321221.9
      }, {
        year: '1996',
        value: 6322121
      }, {
        year: '1997',
        value: 78312213
      }, {
        year: '1998',
        value: 2192312
      }, {
        year: '1999',
        value: 6212332
      }, {
        year: '2000',
        value: 1192312
      }],
      angleField: 'value',
      colorField: 'year',
      color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9']
    };
    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_fusionUi.DonutChart, props));
    };
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { DonutChart } from '@alifd/fusion-ui';\n\nconst props = {\n  legend: {\n    position: 'top-left',\n  },\n  data: [\n    { year: '1991', value: 72345678 },\n    { year: '1992', value: 4321132 },\n    { year: '1993', value: 33121112.5 },\n    { year: '1994', value: 45227221 },\n    { year: '1995', value: 4321221.9 },\n    { year: '1996', value: 6322121 },\n    { year: '1997', value: 78312213 },\n    { year: '1998', value: 2192312 },\n    { year: '1999', value: 6212332 },\n    { year: '2000', value: 1192312 },\n  ],\n  angleField: 'value',\n  colorField: 'year',\n  color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9'],\n};\n\nexport default () => {\n  return (\n    <div>\n      <DonutChart {...props} />\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"DonutChart-demo-1"},
  },
  'docs-edittable': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_elbaTtidE" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/EditTable/index.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"16.14.0"}},"componentName":"EditTable","identifier":"docs-edittable"},
  },
  'docs-expandtable': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_elbaTdnapxE" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ExpandTable/index.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"16.14.0"}},"componentName":"ExpandTable","identifier":"docs-expandtable"},
  },
  'docs-filter': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_retliF" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/Filter/index.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"componentName":"Filter","identifier":"docs-filter"},
  },
  'docs-grouptable': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_elbaTpuorG" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/GroupTable/index.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"16.14.0"}},"componentName":"GroupTable","identifier":"docs-grouptable"},
  },
  'linechart-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/LineChart/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"linechart-basic"},
  },
  'linechart-slider': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/LineChart/slider.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"linechart-slider"},
  },
  'pageheader-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PageHeader/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"pageheader-basic"},
  },
  'pageheader-breadcrumb': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PageHeader/breadcrumb.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"identifier":"pageheader-breadcrumb"},
  },
  'piechart-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PieChart/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"piechart-basic"},
  },
  'piechart-percent': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/PieChart/percent.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode10}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"piechart-percent"},
  },
  'prodialog-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDialog/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode11}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"identifier":"prodialog-basic"},
  },
  'prodialog-large-content': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDialog/large-content.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode12}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"identifier":"prodialog-large-content"},
  },
  'prodrawer-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProDrawer/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"identifier":"prodrawer-basic"},
  },
  'proform-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProForm/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode14}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"identifier":"proform-basic"},
  },
  'proform-operations': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProForm/operations.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode15}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"identifier":"proform-operations"},
  },
  'protable-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/ProTable/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode16},"service.ts":{"import":"./service","content":rawCode17}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"},"qs":{"version":"6.11.1"}},"transform":"true","identifier":"protable-basic"},
  },
  'stepform-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/StepForm/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode18}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"transform":"true","identifier":"stepform-basic"},
  },
  'tabcontainer-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/guojia/Desktop/WorkApp/低代码开源域/lowcode-materials/packages/fusion-ui/docs/src/TabContainer/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode19}},"dependencies":{"react":{"version":"16.14.0"}},"transform":"true","identifier":"tabcontainer-basic"},
  },
  'anchorForm-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/guojia/Desktop/WorkApp/\u4F4E\u4EE3\u7801\u5F00\u6E90\u57DF/lowcode-materials/packages/fusion-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _react = _interopRequireDefault(await import("react"));
    var _fusionUi = await import("@alifd/fusion-ui");
    var anchorFormProps = {
      showAnchor: true,
      enableRandomHtmlId: true,
      anchorProps: {
        direction: 'hoz',
        hasAffix: true
      },
      operationConfig: {
        align: 'center'
      },
      operations: [{
        content: '提交',
        action: 'submit',
        type: 'secondary'
      }, {
        content: '重置',
        action: 'reset',
        type: 'secondary'
      }]
    };
    var childFormProps = [1, 2, 3, 4, 5, 6, 7, 8].map(function (item) {
      return {
        columns: 2,
        mode: 'independent',
        anchorItemProps: {
          label: "Tab-".concat(item)
        },
        cardSectionProps: {
          noBullet: true,
          tagGroup: [{
            label: '操作',
            color: 'orange'
          }, {
            label: '操作',
            color: 'green'
          }, {
            label: '操作',
            color: 'blue'
          }]
        }
      };
    });
    var formInputProps = {
      formItemProps: {
        label: '表单项',
        size: 'medium',
        device: 'desktop',
        fullWidth: true
      },
      placeholder: '请输入'
    };
    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("div", null, "basic demo", /*#__PURE__*/_react["default"].createElement(_fusionUi.TabContainer, null, /*#__PURE__*/_react["default"].createElement(_fusionUi.TabContainer.Item, {
        title: "123"
      }, /*#__PURE__*/_react["default"].createElement(_fusionUi.AnchorForm, anchorFormProps, /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[0], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps)), /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[1], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps)), /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[2], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps)), /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[3], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps)))), /*#__PURE__*/_react["default"].createElement(_fusionUi.TabContainer.Item, {
        title: "456"
      }, /*#__PURE__*/_react["default"].createElement(_fusionUi.AnchorForm, anchorFormProps, /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[4], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps)), /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[5], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps)), /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[6], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps)), /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, childFormProps[7], /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps), /*#__PURE__*/_react["default"].createElement(_fusionUi.FormInput, formInputProps))))));
    };
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { AnchorForm, ChildForm, FormInput, TabContainer } from '@alifd/fusion-ui';\n\nconst anchorFormProps = {\n  showAnchor: true,\n  enableRandomHtmlId: true,\n  anchorProps: {\n    direction: 'hoz',\n    hasAffix: true,\n  },\n  operationConfig: {\n    align: 'center',\n  },\n  operations: [\n    {\n      content: '提交',\n      action: 'submit',\n      type: 'secondary',\n    },\n    {\n      content: '重置',\n      action: 'reset',\n      type: 'secondary',\n    },\n  ],\n};\n\nconst childFormProps = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => ({\n  columns: 2,\n  mode: 'independent',\n  anchorItemProps: {\n    label: `Tab-${item}`,\n  },\n  cardSectionProps: {\n    noBullet: true,\n    tagGroup: [\n      {\n        label: '操作',\n        color: 'orange',\n      },\n      {\n        label: '操作',\n        color: 'green',\n      },\n      {\n        label: '操作',\n        color: 'blue',\n      },\n    ],\n  },\n}));\n\nconst formInputProps = {\n  formItemProps: {\n    label: '表单项',\n    size: 'medium',\n    device: 'desktop',\n    fullWidth: true,\n  },\n  placeholder: '请输入',\n};\n\nexport default () => {\n  return (\n    <div>\n      basic demo\n      <TabContainer>\n        <TabContainer.Item title=\"123\">\n          <AnchorForm {...anchorFormProps}>\n            <ChildForm {...childFormProps[0]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n            <ChildForm {...childFormProps[1]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n            <ChildForm {...childFormProps[2]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n            <ChildForm {...childFormProps[3]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n          </AnchorForm>\n        </TabContainer.Item>\n        <TabContainer.Item title=\"456\">\n          <AnchorForm {...anchorFormProps}>\n            <ChildForm {...childFormProps[4]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n            <ChildForm {...childFormProps[5]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n            <ChildForm {...childFormProps[6]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n            <ChildForm {...childFormProps[7]}>\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n              <FormInput {...formInputProps} />\n            </ChildForm>\n          </AnchorForm>\n        </TabContainer.Item>\n      </TabContainer>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"anchorForm-demo"},
  },
  'areaChart-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/guojia/Desktop/WorkApp/\u4F4E\u4EE3\u7801\u5F00\u6E90\u57DF/lowcode-materials/packages/fusion-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _react = _interopRequireDefault(await import("react"));
    var _fusionUi = await import("@alifd/fusion-ui");
    var props = {
      data: [{
        year: '1991',
        value: 72345678
      }, {
        year: '1992',
        value: 4321132
      }, {
        year: '1993',
        value: 33121112.5
      }, {
        year: '1994',
        value: 45227221
      }, {
        year: '1995',
        value: 4321221.9
      }, {
        year: '1996',
        value: 6322121
      }, {
        year: '1997',
        value: 78312213
      }, {
        year: '1998',
        value: 4192312
      }, {
        year: '1999',
        value: 6212332
      }, {
        year: '2000',
        value: 3192312
      }],
      xField: 'year',
      yField: 'value',
      color: '#0079f2',
      label: {
        visible: true
      }
    };
    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement(_fusionUi.AreaChart, props);
    };
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { AreaChart } from '@alifd/fusion-ui';\n\nconst props = {\n  data: [\n    { year: '1991', value: 72345678 },\n    { year: '1992', value: 4321132 },\n    { year: '1993', value: 33121112.5 },\n    { year: '1994', value: 45227221 },\n    { year: '1995', value: 4321221.9 },\n    { year: '1996', value: 6322121 },\n    { year: '1997', value: 78312213 },\n    { year: '1998', value: 4192312 },\n    { year: '1999', value: 6212332 },\n    { year: '2000', value: 3192312 },\n  ],\n  xField: 'year',\n  yField: 'value',\n  color: '#0079f2',\n  label: {\n    visible: true,\n  },\n};\n\nexport default () => {\n  return <AreaChart {...props} />;\n};"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"areaChart-demo"},
  },
  'childForm-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/guojia/Desktop/WorkApp/\u4F4E\u4EE3\u7801\u5F00\u6E90\u57DF/lowcode-materials/packages/fusion-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _react = _interopRequireDefault(await import("react"));
    var _next = await import("@alifd/next");
    var _fusionUi = await import("@alifd/fusion-ui");
    var ProFormItem = _fusionUi.ProForm.Item;
    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement(_fusionUi.ChildForm, {
        operations: [{
          action: 'submit',
          type: 'primary',
          content: '提交'
        }, {
          action: 'reset',
          type: 'secondary',
          content: '重置'
        }, {
          action: 'custom',
          type: 'secondary',
          content: 'abc'
        }],
        emptyContent: "\u6DFB\u52A0\u8868\u5355\u9879",
        operationConfig: {
          align: 'operation-align-center'
        },
        labelAlign: "top",
        placeholderStyle: {
          border: 0,
          color: '#0088FF',
          background: '#d8d8d836',
          height: '38px',
          gridArea: 'span 4 / span 4'
        },
        columns: 3,
        placeholder: "\u8BF7\u5728\u53F3\u4FA7\u9762\u677F\u6DFB\u52A0\u8868\u5355\u9879+",
        labelCol: {
          fixedSpan: 4
        }
      }, /*#__PURE__*/_react["default"].createElement(ProFormItem, {
        required: true,
        name: "email",
        size: "medium",
        componentProps: {
          componentName: 'Input'
        },
        label: "\u8868\u5355\u9879",
        device: "desktop",
        primaryKey: "9815"
      }, /*#__PURE__*/_react["default"].createElement(_next.Input, {
        autoComplete: "off",
        size: "medium",
        hasBorder: true
      })), /*#__PURE__*/_react["default"].createElement(ProFormItem, {
        size: "medium",
        componentProps: {
          componentName: 'Input'
        },
        label: "\u8868\u5355\u9879",
        device: "desktop",
        primaryKey: "1961"
      }, /*#__PURE__*/_react["default"].createElement(_next.Input, {
        autoComplete: "off",
        size: "medium",
        hasBorder: true
      })), /*#__PURE__*/_react["default"].createElement(ProFormItem, {
        size: "medium",
        componentProps: {
          componentName: 'Input'
        },
        label: "\u8868\u5355\u9879",
        device: "desktop",
        primaryKey: "6067"
      }, /*#__PURE__*/_react["default"].createElement(_next.Input, {
        autoComplete: "off",
        size: "medium",
        hasBorder: true
      })));
    };
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Input } from '@alifd/next';\nimport { ChildForm, ProForm } from '@alifd/fusion-ui';\n\nconst ProFormItem = ProForm.Item;\n\nexport default () => {\n  return (\n    <ChildForm\n      operations={[\n        { action: 'submit', type: 'primary', content: '提交' },\n        { action: 'reset', type: 'secondary', content: '重置' },\n        { action: 'custom', type: 'secondary', content: 'abc' },\n      ]}\n      emptyContent=\"添加表单项\"\n      operationConfig={{ align: 'operation-align-center' }}\n      labelAlign=\"top\"\n      placeholderStyle={{\n        border: 0,\n        color: '#0088FF',\n        background: '#d8d8d836',\n        height: '38px',\n        gridArea: 'span 4 / span 4',\n      }}\n      columns={3}\n      placeholder=\"请在右侧面板添加表单项+\"\n      labelCol={{ fixedSpan: 4 }}\n    >\n      <ProFormItem\n        required\n        name=\"email\"\n        size=\"medium\"\n        componentProps={{ componentName: 'Input' }}\n        label=\"表单项\"\n        device=\"desktop\"\n        primaryKey=\"9815\"\n      >\n        <Input autoComplete=\"off\" size=\"medium\" hasBorder={true} />\n      </ProFormItem>\n      <ProFormItem\n        size=\"medium\"\n        componentProps={{ componentName: 'Input' }}\n        label=\"表单项\"\n        device=\"desktop\"\n        primaryKey=\"1961\"\n      >\n        <Input autoComplete=\"off\" size=\"medium\" hasBorder={true} />\n      </ProFormItem>\n      <ProFormItem\n        size=\"medium\"\n        componentProps={{ componentName: 'Input' }}\n        label=\"表单项\"\n        device=\"desktop\"\n        primaryKey=\"6067\"\n      >\n        <Input autoComplete=\"off\" size=\"medium\" hasBorder={true} />\n      </ProFormItem>\n    </ChildForm>\n  );\n};"}},"dependencies":{"react":{"version":">=16.0.0"},"@alifd/next":{"version":"1.26.15","css":"@alifd/next/dist/next.css"},"@alifd/meet-react":{"version":"^2.0.0"},"moment":{"version":"^2.22.1"},"react-dom":{"version":">=16.0.0"}},"identifier":"childForm-demo"},
  },
};
