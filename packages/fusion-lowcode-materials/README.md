<h2><img width="50" src="https://img.alicdn.com/tfs/TB1YsoiHVzqK1RjSZFCXXbbxVXa-159-99.svg"> Fusion Design For Lowcode</h2>

[![NPM version][npm-image-fusion]][npm-url-fusion]

### [在线示例 / DEMO](https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.2/build/lowcode/index.html)

### 使用 / Usage
#### NPM
```js
const { material } from '@alilc/lowcode-engine';
const assets = require('@alilc/lowcode-materials/dist/assets.json');

// in GeneralWorkbench init
material.setAssets(assets);
```

#### CDN
```js
// in GeneralWorkbench init
const assets = await (await fetch(`https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.2.1/dist/assets.json`)).json();
material.setAssets(assets);
```

[npm-image-fusion]: https://img.shields.io/npm/v/@alilc/lowcode-materials.svg?style=flat-square
[npm-url-fusion]: http://npmjs.org/package/@alilc/lowcode-materials
