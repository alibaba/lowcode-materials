import {
  event,
  ILowCodePluginContext,
  plugins,
  project,
  RegisteredSetter
} from '@alilc/lowcode-engine'
import AliLowCodeEngineExt from '@alilc/lowcode-engine-ext'
// import PluginCodeGen from '@alilc/lowcode-plugin-code-generator'
import ComponentsPane from '@alilc/lowcode-plugin-components-pane'
import Inject, { injectAssets } from '@alilc/lowcode-plugin-inject'
import ManualPlugin from '@alilc/lowcode-plugin-manual'
import SchemaPlugin from '@alilc/lowcode-plugin-schema'
import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en'
import {
  PluginFormily,
  PluginSave,
  PluginSimulatorResizer,
  PluginUndoRedo
} from '@seada/antd-plugins'
import {
  BoolSetter,
  NumberSetter,
  RadioGroupSetter,
  SelectSetter,
  SlotSetter,
  StringSetter,
  TextAreaSetter
} from '@seada/antd-setters'
import assets from '../../assets/assets.json'
import { getPageSchema, saveSchema } from './helper'
import CodeEditor from '@alilc/lowcode-plugin-code-editor'
import LowcodePluginPreview from './plugins/plugin-preview/index'

export default async function registerPlugins() {
  await plugins.register(ManualPlugin)

  await plugins.register(Inject as any)

  SchemaPlugin.pluginName = 'SchemaPlugin'
  await plugins.register(SchemaPlugin)

  const editorInit = (ctx: ILowCodePluginContext) => {
    return {
      name: 'editor-init',
      async init() {
        // 修改面包屑组件的分隔符属性setter
        // const assets = await (
        //   await fetch(
        //     `https://alifd.alicdn.com/npm/@alilc/lowcode-materials/build/lowcode/assets-prod.json`
        //   )
        // ).json();
        // 设置物料描述
        const { material, project } = ctx

        material.setAssets(await injectAssets(assets))

        const pageSchema = getPageSchema()

        // 加载 schema
        project.openDocument(pageSchema)
      }
    }
  }
  editorInit.pluginName = 'editorInit'
  await plugins.register(editorInit)

  await plugins.register(PluginUndoRedo)

  await plugins.register(PluginSimulatorResizer)

  await plugins.register(PluginFormily)

  const builtinPluginRegistry = (ctx: ILowCodePluginContext) => {
    return {
      name: 'builtin-plugin-registry',
      async init() {
        const { skeleton } = ctx

        // 注册组件面板
        const componentsPane = skeleton.add({
          area: 'leftArea',
          type: 'PanelDock',
          name: 'componentsPane',
          content: ComponentsPane,
          contentProps: {},
          props: {
            align: 'top',
            icon: 'zujianku',
            description: '组件库'
          }
        })
        componentsPane?.disable?.()
        project.onSimulatorRendererReady(() => {
          componentsPane?.enable?.()
        })
      }
    }
  }
  builtinPluginRegistry.pluginName = 'builtinPluginRegistry'
  await plugins.register(builtinPluginRegistry)

  // 设置内置 setter 和事件绑定、插件绑定面板
  const setterRegistry = (ctx: ILowCodePluginContext) => {
    const { setterMap, pluginMap } = AliLowCodeEngineExt

    setterMap['BoolSetter'] = BoolSetter
    setterMap['NumberSetter'] = {
      component: NumberSetter,
      isDynamic: false
    } as RegisteredSetter
    setterMap['TextAreaSetter'] = {
      component: TextAreaSetter,
      isDynamic: false
    } as RegisteredSetter
    setterMap['StringSetter'] = {
      component: StringSetter,
      isDynamic: false
    } as RegisteredSetter
    setterMap['SelectSetter'] = {
      component: SelectSetter,
      isDynamic: false
    } as RegisteredSetter
    // setterMap['EventsSetter'] = {
    //   component: EventsSetter,
    //   isDynamic: false
    // } as RegisteredSetter
    setterMap['RadioGroupSetter'] = {
      component: RadioGroupSetter,
      isDynamic: false
    } as RegisteredSetter

    setterMap.SlotSetter = SlotSetter as any

    return {
      name: 'ext-setters-registry',
      async init() {
        const { setters, skeleton } = ctx
        // 注册setterMap
        setters.registerSetter(setterMap as any)
        // 注册插件
        // 注册事件绑定面板
        skeleton.add({
          area: 'centerArea',
          type: 'Widget',
          content: pluginMap.EventBindDialog,
          name: 'eventBindDialog',
          props: {}
        })

        // 注册变量绑定面板
        skeleton.add({
          area: 'centerArea',
          type: 'Widget',
          content: pluginMap.VariableBindDialog,
          name: 'variableBindDialog',
          props: {}
        })
      }
    }
  }
  setterRegistry.pluginName = 'setterRegistry'
  await plugins.register(setterRegistry)

  // 注册中英文切换
  await plugins.register(ZhEnPlugin)

  // await plugins.register(PluginCodeGen)
  // await plugins.register(PluginCodeGenerator)

  CodeEditor.pluginName = 'CodeEditor'
  await plugins.register(CodeEditor)

  await plugins.register(PluginSave)
  event.on('common:save', () => {
    saveSchema()
  })

  await plugins.register(LowcodePluginPreview)
}
