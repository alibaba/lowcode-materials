import React, { Component } from 'react'
import { Space, Button } from 'antd'
import { uuid } from '../index'

export class BaseDialog extends Component<any> {
  state = {
    visible: this.props?.visible ?? false
  }

  show() {
    return new Promise((resolve) => {
      this.setState(
        {
          visible: true
        },
        () => {
          resolve(null)
        }
      )
    })
  }

  hide() {
    return new Promise((resolve) => {
      this.setState(
        {
          visible: false
        },
        () => {
          resolve(null)
        }
      )
    })
  }

  hidden() {
    return this.hide()
  }

  transformProps() {
    const onCancel = (e?: any) => {
      this.props?.onCancel?.(e)
      this.props?.onClose?.(e)
      this.hide()
    }

    const innerProps: any = {
      visible: this.state.visible,
      footer: this.props?.footer,
      onCancel,
      footerStyle: { textAlign: 'right' }
    }

    if (this.props.__designMode === 'design') {
      // 低代码编辑态中强制显示，将控制权交给引擎侧
      innerProps.visible = true
    }

    const getActionHandler = (action) => {
      switch (action) {
        case 'submit':
          return this.props?.onOk
        case 'cancel':
          return onCancel
        default:
          return () => {
            console.log('TODO：自定义')
          }
      }
    }

    if (this.props?.operations.length === 0) {
      innerProps.footer = null
    } else {
      innerProps.footer = (
        <Space>
          {this.props?.operations?.map((item) => {
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

    return innerProps
  }
}
