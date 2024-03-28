import { common, config, plugins, skeleton } from '@alilc/lowcode-engine'
import { message, Spin } from 'antd'
import 'antd/dist/antd.css'
import React, { useEffect, useRef, useState } from 'react'
import './index.less'
import registerPlugins from './plugin'

const preference = new Map()

const Workbench = common.skeletonCabin.Workbench

preference.set('DataSourcePane', {
  importPlugins: [],
  dataSourceTypes: [
    {
      type: 'fetch'
    },
    {
      type: 'jsonp'
    }
  ]
})

const Designer: React.FC = () => {
  const isInited = useRef<boolean>(false)
  /** 插件是否已初始化成功，因为必须要等插件初始化后才能渲染 Workbench */
  const [hasPluginInited, setHasPluginInited] = useState(false)

  useEffect(() => {
    // 防止热更新重新注册插件报错
    if (isInited.current) return
    async function initPlugins() {
      try {
        await registerPlugins()
        config.setConfig({
          // designMode: 'live',
          // locale: 'zh-CN',
          enableCondition: true,
          enableCanvasLock: true,
          // 默认绑定变量
          supportVariableGlobally: true,
          // simulatorUrl 在当 engine-core.js 同一个父路径下时是不需要配置的！！！
          // 这里因为用的是 alifd cdn，在不同 npm 包，engine-core.js 和 react-simulator-renderer.js 是不同路径
          simulatorUrl: [
            'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/css/react-simulator-renderer.css',
            'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/js/react-simulator-renderer.js'
          ]
        })

        await plugins.init(preference)
        setHasPluginInited(true)
        isInited.current = true
      } catch (err) {
        console.error(err)
        message.error('插件初始化失败')
      }
    }
    initPlugins()
  }, [])

  if (!hasPluginInited) {
    return <Spin />
  }

  return <Workbench skeleton={skeleton} />
}

export default Designer
