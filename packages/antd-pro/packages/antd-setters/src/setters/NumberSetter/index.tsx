import React from 'react'
import { InputNumber } from 'antd'

export interface INumberSetterProps {
  value?: number
  min?: number
  max?: number
  defaultValue?: number
  step?: number | string
  units?: string
  onChange?: (val?: number) => void
  precision?: number
}

const NumberSetter: React.FC<INumberSetterProps> = ({
  onChange,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step,
  units = '',
  precision = 0,
  value
}) => {
  return (
    <InputNumber
      style={{ width: '100%' }}
      className="lowcode-setter-number"
      value={value}
      min={min}
      max={max}
      precision={precision}
      step={step}
      addonAfter={units}
      onChange={(val: number) => {
        onChange?.(val)
      }}
    />
  )
}

NumberSetter.displayName = 'NumberSetter'

export default NumberSetter
