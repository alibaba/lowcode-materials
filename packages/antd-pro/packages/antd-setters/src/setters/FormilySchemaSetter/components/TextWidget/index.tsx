import React, { Fragment } from 'react'
import { isStr } from '../../type'
import { observer } from '@formily/reactive-react'
import { GlobalRegistry } from '../../registry'

export interface ITextWidgetProps {
  componentName?: string
  sourceName?: string
  token?: string
  defaultMessage?: string
}

export const TextWidget: React.FC<ITextWidgetProps> = observer((props) => {
  const takeLocale = (message: string): React.ReactNode => {
    return message
  }
  const takeMessage = (token: any) => {
    if (!token) return
    const message = isStr(token)
      ? GlobalRegistry.getDesignerMessage(token)
      : token
    if (message) return takeLocale(message)
    return token
  }
  return (
    <Fragment>
      {takeMessage(props.children) ||
        takeMessage(props.token) ||
        takeMessage(props.defaultMessage)}
    </Fragment>
  )
})
