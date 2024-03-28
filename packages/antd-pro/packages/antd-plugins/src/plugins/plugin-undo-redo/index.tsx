import React, { useState, useEffect, useRef } from 'react'
import { Button, Tooltip } from 'antd'
import { ILowCodePluginContext, project } from '@alilc/lowcode-engine'
import { History } from '@alilc/lowcode-shell'
import Icon from '@ant-design/icons'
import { BackSvg, NextSvg } from './icon'
import './index.less'

const UndoRedo: React.FC = () => {
  const [undoEnable, setUndoEnable] = useState<boolean>(false)
  const [redoEnable, setRedoEnable] = useState<boolean>(false)
  const historyRef = useRef<History>(null)

  useEffect(() => {
    project.onChangeDocument(({ history }) => {
      historyRef.current = history
      updateState(history.getState() || 0)

      history.onChangeState(() => {
        updateState(history.getState() || 0)
      })
    })
  }, [])

  const updateState = (state: number) => {
    setUndoEnable(!!(state & 1))
    setRedoEnable(!!(state & 2))
  }

  const handleClickBack = () => {
    historyRef.current?.back()
  }

  const handleClickNext = () => {
    historyRef.current?.forward()
  }

  return (
    <div className="undo-redo">
      <Tooltip title="后退">
        <Button disabled={!undoEnable} onClick={handleClickBack}>
          <Icon component={BackSvg} className="icon" />
        </Button>
      </Tooltip>
      <Tooltip title="前进">
        <Button disabled={!redoEnable} onClick={handleClickNext}>
          <Icon component={NextSvg} className="icon" />
        </Button>
      </Tooltip>
    </div>
  )
}

const plugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'PluginUndoRedo',
    dep: [],
    // 插件的初始化函数，在引擎初始化之后会立即调用
    init() {
      ctx.skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'undoRedo',
        content: UndoRedo,
        props: {
          align: 'right',
          width: 88
        }
      })
    }
  }
}

plugin.pluginName = 'PluginUndoRedo'

export default plugin
