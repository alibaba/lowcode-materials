import React from 'react'
import { Radio, RadioGroupProps } from 'antd'
import './index.less'

const RadioGroup = Radio.Group

export interface IRadioGroupSetterprops {
  value?: any
  onChange?: (val?: any) => void
  options?: RadioGroupProps['options']
}

const formatOptions = (options) => {
  if (!Array.isArray(options)) {
    // console.error('option is illegal')
    return []
  }
  return options.map((item) => ({
    label: item.label || item.title, // 兼容了一些用 title 来定义 option 的场景
    value: item.value
  }))
}

const RadioGroupSetter: React.FC<IRadioGroupSetterprops> = ({
  value,
  onChange,
  options
}) => {
  return (
    <div className="radio-group-setter">
      <RadioGroup
        size="small"
        style={{ fontSize: 12 }}
        optionType="button"
        value={value}
        options={formatOptions(options)}
        onChange={(e) => {
          const val = e.target.value
          onChange?.(val)
        }}
      />
    </div>
  )
}

RadioGroupSetter.displayName = 'RadioGroupSetter'

export default RadioGroupSetter
