import { ILowCodePluginContext } from '@alilc/lowcode-engine'
import { FormilySchemaSetter } from '@seada/antd-setters'

const LowcodePluginFormily = (ctx: ILowCodePluginContext) => {
  return {
    // 插件名，注册环境下唯一
    name: 'LowcodePluginFormily',
    // 依赖的插件（插件名数组）
    dep: [],
    // 插件的初始化函数，在引擎初始化之后会立刻调用
    init() {
      const { setters, project } = ctx
      setters.registerSetter({ FormilySchemaSetter })

      project.onChangeDocument((doc) => {
        doc.onAddNode((node) => {
          node.setPropValue('__component_name', node.componentName)
        })
      })

      // 设置component name属性
      project.currentDocument?.onAddNode((node) => {
        node.setPropValue('__component_name', node.componentName)
      })
    }
  }
}

LowcodePluginFormily.pluginName = 'LowcodePluginFormily'

export default LowcodePluginFormily
