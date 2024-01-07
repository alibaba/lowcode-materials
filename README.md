<h1 align="center">Lowcode Materials</h1>

<div align="center">

基于 [Fusion Design](https://fusion.design) 和 [Ant Design](https://ant.design) 设计规范的低代码基础物料库

</div>

## 介绍 / Introduce

物料（Material）是指能够被沉淀下来的前端能力，一般表现为组件、区块和模板。而低代码物料库，则是一套专门用于低代码开发模式（Lowcode）的物料，它除了包含物料组件，还有一套描述组件信息的低代码引擎物料协议。简单来说，低代码物料库包含了两个部分：

- 组件的实现，即组件的代码和样式
- 遵循[《低代码引擎物料协议规范》](https://lowcode-engine.cn/material)的物料协议

低代码物料应该配合[低代码引擎](https://lowcode-engine.cn/)使用，如果你还不了解低代码引擎，请先阅读相关文档。

在使用中遇到的任何问题，请在[lowcode-engine](https://github.com/alibaba/lowcode-engine)项目中反馈。

<h2><img width="50" src="https://img.alicdn.com/tfs/TB1YsoiHVzqK1RjSZFCXXbbxVXa-159-99.svg"> Fusion Design For Lowcode</h2>

[![NPM version][npm-image-fusion]][npm-url-fusion]

### [在线示例 / DEMO](https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.2.1/build/lowcode/index.html)

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
const assets = await fetch(
  `https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.2.1/dist/assets.json`,
).then((res) => res.json());
material.setAssets(assets);
```

[npm-image-fusion]: https://img.shields.io/npm/v/@alilc/lowcode-materials.svg?style=flat-square
[npm-url-fusion]: http://npmjs.org/package/@alilc/lowcode-materials

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
const assets = await fetch(
  `https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.2/build/lowcode/assets-prod.json`,
).then((res) => res.json());
material.setAssets(assets);
```

[npm-image-antd]: https://img.shields.io/npm/v/@alilc/antd-lowcode-materials.svg?style=flat-square
[npm-url-antd]: http://npmjs.org/package/@alilc/antd-lowcode-materials

## 如何贡献 / How-to-contribute

### 目录结构 / Structure

```
|-packages
    |-{package-name} // fusion 或 antd 低代码组件包
        |-lowcode // 组件低代码描述文件
            |-{component-name}
                |-meta.ts // 组件低代码描述协议
                |-meta.design.ts // 【可选】面向设计者的组件低代码描述，移除面向研发的高级配置能力，可做静态搭建和简单的交互
        |-src
            |-index.tsx // 组件库导出文件
            |-components // 组件库源码
                |-{component-name}
                |-index.tsx
                |-index.scss
    |-build.lowcode.js // 低代码调试和构建使用的配置文件
    |-build.json // 源码调试和构建使用的配置文件
```

### 常用命令 / Commands

#### 低代码 / LowCode

```bash
cd packages/fusion-lowcode-materilas
# OR `cd packages/antd-lowcode-materilas`
npm run lowcode:dev
npm run lowcode:build
```

#### 源码 / ProCode

```bash
npm start
npm run build
```

#### 其他命令 / Other Commands

```bash
# 更新 README 中的版本号
npm run update-readme
```

### 贡献者 / Contributors

因无法保留开源前的提交记录，这里列出开源前的贡献者（花名）：

@荣彬 @度城 @屹凡 @启剑 @春希 @梧忌 @褚天 @莫夭 @金禅 @默吉 @旅途 @斩鲌 @永元 @听鸿 @晓吉 @与白 @若泉 @独寒 @尤恩 @馨焱
