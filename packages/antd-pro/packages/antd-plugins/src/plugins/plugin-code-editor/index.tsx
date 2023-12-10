import { ILowCodePluginContext } from '@alilc/lowcode-engine'

const plugin = (ctx: ILowCodePluginContext) => ({
  name: 'PluginCodeEditor',
  width: 600,
  // 依赖的插件（插件名数组）
  dep: [],
  // 插件的初始化函数，在引擎初始化之后会立即调用
  init() {
    // TODO
  }
})

plugin.pluginName = 'PluginCodeEditor'

export default plugin
