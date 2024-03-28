import React, { ReactNode } from 'react'
import { observer } from '@formily/reactive-react'
import './styles.less'

export interface IHeaderProps {
  extra: ReactNode | null
  title: ReactNode | string
}

export const Header: React.FC<IHeaderProps> = observer(({ extra, title }) => {
  const prefix = 'dn-data-source-setter'
  return (
    <div className={`${prefix + '-layout-item-header'}`}>
      <div className={`${prefix + '-layout-item-title'}`}>{title}</div>
      {extra}
    </div>
  )
})
