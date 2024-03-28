import * as React from 'react'
import { Drawer as OriginalDrawer } from 'antd'
import { BaseDialog } from '../../shared/base/BaseDialog'

export type IProDrawerProps = React.ComponentProps<typeof OriginalDrawer> & {
  __designMode?: 'design'
  operations?: IModalOperationProps[]
}

export interface IModalAction {
  show: () => void
  hide: () => void
  hidden: () => void
}

interface IModalOperationProps {
  id: string
  content: string
  type: string
  action: string
}

export default class ProDrawer extends BaseDialog {
  render() {
    const innerProps = this.transformProps()

    return (
      <OriginalDrawer
        {...this.props}
        {...innerProps}
        onClose={innerProps.onCancel}
      />
    )
  }
}
