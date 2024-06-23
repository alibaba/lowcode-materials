# Tag 标签

---

用于展示1个或多个文字标签，可点击切换选中、不选中的状态。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtTag } from 'disscode-lib'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~disscode-lib/dist/style/components/tag.scss";
```
:::

## 用法

:::demo
```html
<AtTag>标签</AtTag>
<AtTag type='primary' circle>标签</AtTag>
<AtTag size='small'>标签</AtTag>
```
:::

## 点击事件

:::demo
```html
<!-- 点击返回当前标签名字和是否选中 -->
<AtTag 
  name='tag-1' 
  type='primary' 
  circle 
  onClick={this.onClick.bind(this)}
>
  tag-1
</AtTag>
```
:::

## Tag 参数

| 参数     | 说明         | 类型    | 可选值        | 默认值 |
|:---------|:-------------|:--------|:--------------|:-------|
| size     | 大小尺寸     | String  | normal, small | normal |
| type     | 样式类型     | String  | primary       | -      |
| name     | 标签名字     | String  | -             | -      |
| circle   | 是否大圆角   | Boolean | -             | false  |
| active   | 是否为选中态 | Boolean | -             | false  |
| disabled | 是否为禁用态 | Boolean | -             | false  |

## Tag 事件

| 事件名称 | 说明                               | 返回参数     |
|:---------|:-----------------------------------|:-------------|
| onClick  | 点击标签时触发，返回标签名字和状态 | name, active |
