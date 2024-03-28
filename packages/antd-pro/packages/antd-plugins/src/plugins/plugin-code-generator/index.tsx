import React from 'react'
import CodeGenBtn from './components/CodeGenBtn'
import { ILowCodePluginContext } from '@alilc/lowcode-engine'

const plugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'PluginCodeGenerator',
    deo: [],
    init() {
      ctx.skeleton.add({
        name: 'CodeGenBtn',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right'
        },
        content: <CodeGenBtn />
      })
    }
  }
}

plugin.pluginName = 'PluginCodeGenerator'

export default plugin
