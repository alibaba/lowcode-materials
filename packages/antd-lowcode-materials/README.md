<h2><img width="30" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"> Ant Design For Lowcode</h2>

[![NPM version][npm-image-antd]][npm-url-antd]

### [在线示例 / DEMO](https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.2/build/lowcode/index.html)

### 使用 / Usage
#### NPM
```js
const { material } from '@alilc/lowcode-engine';
const assets = require('@alilc/antd-lowcode-materials/build/lowcode/assets-prod.json');

// in GeneralWorkbench init
material.setAssets(assets);
```

#### CDN
```js
// in GeneralWorkbench init
const assets = await (await fetch(`https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.2/build/lowcode/assets-prod.json`)).json();
material.setAssets(assets);
```

[npm-image-antd]: https://img.shields.io/npm/v/@alilc/antd-lowcode-materials.svg?style=flat-square
[npm-url-antd]: http://npmjs.org/package/@alilc/antd-lowcode-materials
