import React from 'react'
import { Button } from 'antd'
import { ILowCodePluginContext } from '@alilc/lowcode-engine'

const plugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'PluginSave',
    dep: [],
    // 插件对外暴露的插件和方法
    exports() {
      return {}
    },
    // 插件的初始化函数，在引擎初始化之后会立即调用
    init() {
      const { event, skeleton, hotkey } = ctx
      skeleton.add({
        name: 'PluginSave',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right'
        },
        content: (
          <Button
            onClick={(e) => {
              e.preventDefault()
              // 抛出一个 save 事件，让业务自己去实现
              event.emit('save')
            }}
          >
            保存
          </Button>
        )
      })
      hotkey.bind('command+s', (e) => {
        e.preventDefault()
        event.emit('save')
      })
    }
  }
}

plugin.pluginName = 'PluginSave'

export default plugin
