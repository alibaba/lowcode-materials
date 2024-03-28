import * as React from 'react'
import { Space, Button } from 'antd'
import { uuid } from '../'

const { useState, useImperativeHandle } = React

// 高级 modal (pro-drawer + pro-modal) 逻辑复用 hook
/**
 * ref 会被覆盖，导致无法选中组件
 * @deprecated
 */
export const useModal = (props, ref) => {
  const [visible, setvisible] = useState(props?.visible ?? false)

  const [footer, setFooter] = useState(props?.footer)

  const onCancel = (e?: any) => {
    props?.onCancel?.(e)
    props?.onClose?.(e)
    setvisible(false)
  }

  useImperativeHandle(ref, () => {
    return {
      show: () => {
        setvisible(true)
      },
      hide: () => {
        onCancel()
      },
      hidden: () => {
        onCancel()
      }
    }
  })

  const innerProps: any = {
    visible,
    footer,
    onCancel
  }

  if (props.__designMode === 'design') {
    // 低代码编辑态中强制显示，将控制权交给引擎侧
    innerProps.visible = true
  }

  const getActionHandler = (action) => {
    switch (action) {
      case 'submit':
        return props?.onOk
      case 'cancel':
        return onCancel
      default:
        return () => {
          console.log('TODO：自定义')
        }
    }
  }

  if (props?.operations.length === 0) {
    innerProps.footer = null
  } else {
    innerProps.footer = (
      <Space style={{ textAlign: 'right' }}>
        {props?.operations?.map((item) => {
          return (
            <Button
              key={uuid()}
              type={item?.type}
              onClick={getActionHandler(item?.action)}
            >
              {item?.content ?? '自定义'}
            </Button>
          )
        })}
      </Space>
    )
  }

  return {
    innerProps
  }
}
