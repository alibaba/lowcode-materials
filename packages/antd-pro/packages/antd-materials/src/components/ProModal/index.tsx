import * as React from 'react'
import { Modal as OriginalProModal } from 'antd'
import { BaseDialog } from '../../shared/base/BaseDialog'

interface IModalOperationProps {
  content: string
  type: string
  action: string
}

export type IProModalProps = React.ComponentProps<typeof OriginalProModal> & {
  __designMode?: 'design'
  operations?: IModalOperationProps[]
}

export default class ProModal extends BaseDialog {
  render() {
    const innerProps = this.transformProps()

    return (
      <OriginalProModal
        {...this.props}
        {...innerProps}
        onClose={innerProps.onCancel}
      />
    )
  }
}
