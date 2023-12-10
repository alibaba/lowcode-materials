import React from 'react'
import { Select, SelectProps } from 'antd'

export type SelectSetterProps = Pick<
  SelectProps<'string'>,
  'onChange' | 'value' | 'mode' | 'defaultValue' | 'placeholder' | 'options'
>

const SelectSetter: React.FC<SelectSetterProps> = ({
  value,
  mode,
  options,
  onChange,
  placeholder = '请输入'
}) => {
  return (
    <Select
      value={value}
      options={options}
      mode={mode}
      onChange={(val, option) => {
        onChange?.(val, option)
      }}
      placeholder={placeholder}
      style={{ width: '100%' }}
    />
  )
}

SelectSetter.displayName = 'SelectSetter'

export default SelectSetter
