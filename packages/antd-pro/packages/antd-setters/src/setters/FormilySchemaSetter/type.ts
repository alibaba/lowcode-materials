import React from 'react'
import { Form } from '@formily/core'
export interface ISettingFormProps {
  className?: string
  style?: React.CSSProperties
  uploadAction?: string
  components?: Record<string, React.FC<any>>
  effects?: (form: Form) => void
  scope?: any
}

export interface IFormilySchemaSetterProps extends ISettingFormProps {
  value: boolean
  propsSchema: any
  defaultValue: any
  onChange: (val: number) => void
}

const isType =
  <T>(type: string | string[]) =>
  (obj: unknown): obj is T =>
    obj != null &&
    (Array.isArray(type) ? type : [type]).some(
      (t) => getType(obj) === `[object ${t}]`
    )
export const getType = (obj: any) => Object.prototype.toString.call(obj)
export const isFn = isType<(...args: any[]) => any>([
  'Function',
  'AsyncFunction',
  'GeneratorFunction'
])
export const isWindow = isType<Window>('Window')
export const isHTMLElement = (obj: any): obj is HTMLElement => {
  return obj?.['nodeName'] || obj?.['tagName']
}
export const isArr = Array.isArray
export const isPlainObj = isType<object>('Object')
export const isStr = isType<string>('String')
export const isBool = isType<boolean>('Boolean')
export const isNum = isType<number>('Number')
export const isObj = (val: unknown): val is object => typeof val === 'object'
export const isRegExp = isType<RegExp>('RegExp')
export const isValid = (val: any) => val !== null && val !== undefined
export const isValidNumber = (val: any): val is number =>
  !isNaN(val) && isNum(val)
