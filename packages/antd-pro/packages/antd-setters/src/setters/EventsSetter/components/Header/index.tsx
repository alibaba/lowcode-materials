import React, { memo } from 'react'
import './index.less'

export interface IHeaderProps {
  title: string
}

export const Header: React.FC<IHeaderProps> = memo(({ title }) => {
  return (
    <div className="events-setter-header">
      <span className="events-setter-header__title">{title}</span>
    </div>
  )
})
