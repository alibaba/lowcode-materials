import { ILowCodePluginContext } from '@alilc/lowcode-engine'
import { PreviewModal } from './components/PreviewModal'

const LowcodePluginPreview = (ctx: ILowCodePluginContext) => {
  return {
    // 插件名，注册环境下唯一
    name: 'LowcodePluginPreview',
    // 依赖的插件（插件名数组）
    dep: [],
    // 插件对外暴露的数据和方法
    exports() {
      return {
        data: '你可以把插件的数据这样对外暴露',
        func: () => {
          console.log('方法也是一样')
        }
      }
    },
    // 插件的初始化函数，在引擎初始化之后会立刻调用
    init() {
      const { skeleton } = ctx

      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right'
        },
        content: <PreviewModal />
      })
    }
  }
}

LowcodePluginPreview.pluginName = 'LowcodePluginPreview'

export default LowcodePluginPreview
