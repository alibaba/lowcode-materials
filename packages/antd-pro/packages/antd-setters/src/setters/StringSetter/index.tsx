import React from 'react'
import { Input } from 'antd'

export interface IStringSetterProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange?: (val: string) => void
}

const StringSetter: React.FC<IStringSetterProps> = ({
  onChange,
  placeholder = '请输入',
  value
}) => {
  return (
    <div>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.currentTarget.value
          onChange?.(val)
        }}
        style={{ width: '100%' }}
      />
    </div>
  )
}

StringSetter.displayName = 'StringSetter'

export default StringSetter
