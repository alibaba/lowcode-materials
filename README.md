# [Fusion Materials](https://github.com/alibaba-fusion/next) for LowCode

## 体验地址/Demo

<https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.1/build/lowcode/index.html>

## 使用/Usage

### 引用 npm 包/npm

```
const { material } from '@alilc/lowcode-engine';
const assets = require('@alilc/lowcode-materials/dist/assets.json');

// in GeneralWorkbench init
material.setAssets(assets);
```

### 直接引用 cdn 文件/CDN

```
// in GeneralWorkbench init
const assets = await (await fetch(`https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.0/dist/assets.json`)).json();
material.setAssets(assets);
```

## 如何贡献/How-to-contribute

### 目录结构/Structure

```
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

### 常用命令/Commands

#### 低代码/LowCode

```
npm run lowcode:dev
npm run lowcode:build
```

#### 源码/ProCode

```
npm start
npm run build
```

### 贡献者/Contributors

- @荣彬
- @度城
- @屹凡
- @启剑
- @春希
- @梧忌
- @褚天
- @莫夭
- @金禅
