import React from 'react'
import { Input } from 'antd'

export interface ITextAreaSetterProps {
  onChange?: (value?: string) => void
  value?: string
  defaultValue?: string
  placeholder?: string
}

const TextAreaSetter: React.FC<ITextAreaSetterProps> = ({
  onChange,
  placeholder = '请输入',
  value
}) => {
  return (
    <Input.TextArea
      value={value || ''}
      onChange={(e) => {
        const val = e.currentTarget.value
        onChange?.(val)
      }}
      placeholder={placeholder}
      style={{ width: '100%' }}
    />
  )
}

TextAreaSetter.displayName = 'TextAreaSetter'

export default TextAreaSetter
