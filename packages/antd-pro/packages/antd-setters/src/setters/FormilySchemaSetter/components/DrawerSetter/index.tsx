import React, { Fragment, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { observer, useField } from '@formily/react'
import { FormLayout } from '@formily/antd'
import { IconWidget } from '../IconWidget'
import { Return as ReturnIcon } from '../../icons'
import { Button, ButtonProps, Drawer } from 'antd'
import cls from 'classnames'
import './styles.less'

export interface IDrawerSetterProps {
  text: React.ReactNode
  triggerProps: ButtonProps
}

export const DrawerSetter: React.FC<IDrawerSetterProps> = observer((props) => {
  const field = useField()
  const [visible, setVisible] = useState(false)
  const prefix = 'dn-drawer-setter'

  const handleOpen = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <Fragment>
      <Button block onClick={handleOpen} {...props.triggerProps}>
        {props.text || field.title}
      </Button>
      <Drawer
        width={300}
        visible={visible}
        destroyOnClose
        footer={null}
        onClose={handleClose}
        closeIcon={null}
      >
        <div className={cls(prefix, 'animate__animated animate__slideInRight')}>
          <div className={prefix + '-header'} onClick={handleClose}>
            <IconWidget infer={ReturnIcon} size={18} />
            <span className={prefix + '-header-text'}>
              {props.text || field.title}
            </span>
          </div>
          <div className={prefix + '-body'}>
            <FormLayout
              colon={false}
              labelWidth={120}
              labelAlign="left"
              wrapperAlign="right"
              feedbackLayout="none"
              tooltipLayout="text"
            >
              {props.children}
            </FormLayout>
          </div>
        </div>
      </Drawer>
    </Fragment>
  )
})
