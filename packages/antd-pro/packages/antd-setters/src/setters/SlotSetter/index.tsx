import React from 'react'
import { Input, Switch } from 'antd'
import { isArr } from '@formily/shared'
import { CloseOutlined } from '@ant-design/icons'
import { isJSSlot } from '@alilc/lowcode-types'
import { RegisteredSetter } from '@alilc/lowcode-engine'
import './index.less'

export interface ISlotSetterProps {
  value?: any
  onChange?: (value?: any) => void
  onInitial?: () => void
  hideParams?: boolean // 是否隐藏入参输入框
  checkedText?: string // switch启用文案，默认显示“启用”
  unCheckedText?: string // switch取消文案，默认显示“关闭”
}

const getIsOpenSlot = (initialValue?: any) => {
  if (!initialValue) return false
  const { value, visible } = initialValue
  if (!isArr(value) || visible === false) return false
  return value.length > 0
}

const SlotSetter: React.FC<ISlotSetterProps> = ({
  value,
  onChange,
  hideParams,
  onInitial,
  checkedText = '启用',
  unCheckedText = '关闭'
}) => {
  const isOpenSlot = getIsOpenSlot(value)

  const init = () => {
    if (onInitial) {
      onInitial()
      return
    }
    onChange?.({
      type: 'JSSlot',
      value: null
    })
  }

  const handleChangeSwitch = (checked: boolean) => {
    if (checked) {
      init()
    } else {
      onChange?.(null)
    }
  }

  const renderSwitchComponent = () => {
    return (
      <Switch
        defaultChecked={isOpenSlot || false}
        onChange={(checked) => handleChangeSwitch(checked)}
        checkedChildren={checkedText}
        unCheckedChildren={unCheckedText}
      />
    )
  }

  return (
    <div className="lc-slot-setter">
      {renderSwitchComponent()}
      {!hideParams && isArr(value?.params) ? (
        <Input
          // size="small"
          className="lc-slot-params"
          addonBefore="入参"
          placeholder="插槽入参，以逗号分隔"
          value={value.params.join(',')}
          onChange={(e) => {
            const val = e.target.value?.trim()
            const params = val ? val.split(/ *, */) : []
            onChange?.({
              ...value,
              params
            })
          }}
          addonAfter={
            <CloseOutlined
              onClick={() => {
                onChange?.({
                  ...value,
                  params: []
                })
              }}
            />
          }
        />
      ) : null}
    </div>
  )
}

SlotSetter.displayName = 'SlotSetter'

export default {
  component: SlotSetter,
  title: {
    type: 'i18n',
    'zh-CN': '插槽输入',
    'en-US': 'Slot Setter'
  },
  condition: (field: any) => {
    return isJSSlot(field.getValue())
  },
  initialValue: (field: any, value: any) => {
    if (isJSSlot(value)) {
      return value
    }
    return {
      type: 'JSSlot',
      value
    }
  },
  recommend: true,
  valueType: ['JSSlot']
} as RegisteredSetter
