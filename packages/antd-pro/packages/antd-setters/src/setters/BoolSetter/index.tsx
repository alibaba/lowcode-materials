import React from 'react'
import { Switch } from 'antd'

export interface IBoolSetterProps {
  value: boolean
  onChange: (val: boolean) => void
}

const BoolSetter: React.FC<IBoolSetterProps> = ({ value, onChange }) => {
  return <Switch className="bool-setter" checked={value} onChange={onChange} />
}

BoolSetter.displayName = 'BoolSetter'

export default BoolSetter
