import React, { useEffect, useState } from 'react'
import { ILowCodePluginContext, project } from '@alilc/lowcode-engine'
import { InputNumber } from 'antd'
import { MobileSVG, PadSVG, PcSVG } from './icons'
import './index.less'

const devices = [{ key: 'desktop' }, { key: 'tablet' }, { key: 'phone' }]

export const SimulatorPane: React.FC = () => {
  const [device, setDevice] = useState('desktop')
  const [currentWidth, setCurrentWidth] = useState(0)

  useEffect(() => {
    project.onSimulatorRendererReady(() => {
      const width =
        document.querySelector('.lc-simulator-canvas')?.clientWidth ||
        currentWidth ||
        0
      setCurrentWidth(width)
    })
  }, [])

  const change = (device: string) => {
    const simulator = project.simulatorHost
    // 切换画布
    simulator?.set('device', device)
    document.querySelector<HTMLElement>('.lc-simulator-canvas').style.width = ''
    setTimeout(() => {
      const width =
        document.querySelector('.lc-simulator-canvas')?.clientWidth ||
        currentWidth ||
        0
      setDevice(device)
      setCurrentWidth(width)
    }, 0)
  }

  function renderItemSVG(device: string) {
    switch (device) {
      case 'desktop':
        return <PcSVG />
      case 'phone':
        return <MobileSVG />
      case 'tablet':
        return <PadSVG />
      default:
        return <PcSVG />
    }
  }

  return (
    <div className="lp-simulator-pane">
      {devices.map((item) => {
        return (
          <span
            key={item.key}
            className={`lp-simulator-pane-item ${
              device === item.key ? 'actived' : ''
            }`}
            onClick={() => change(item.key)}
          >
            {renderItemSVG(item.key)}
          </span>
        )
      })}
      <div className="lp-simulator-width-setter">
        <InputNumber
          addonAfter="px"
          value={currentWidth}
          placeholder="请输入"
          onChange={(value) => {
            setCurrentWidth(value)
          }}
          onPressEnter={(event) => {
            const target = event.target as HTMLInputElement
            const value = +target?.value || 0
            document.querySelector<HTMLElement>(
              '.lc-simulator-canvas'
            ).style.width = `${value}px`
            setCurrentWidth(value)
          }}
        />
      </div>
    </div>
  )
}

const plugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'SimulatorPane',
    // 插件的初始化函数，在引擎初始化之后会立刻调用
    init() {
      // 往引擎增加工具条
      ctx.skeleton.add({
        area: 'top',
        name: 'SimulatorPane',
        type: 'Widget',
        props: {
          description: '切换画布尺寸',
          align: 'center'
        },
        content: <SimulatorPane />
      })
    }
  }
}

plugin.pluginName = 'LowcodePluginSimulatorResizer'

export default plugin
