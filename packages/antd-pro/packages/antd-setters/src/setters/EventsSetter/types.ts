import { ISchema } from '@formily/react'

export interface IEventItem {
  name: string
  template?: string
}

export interface IDefinitionItem {
  type?: string
  title?: string
  list?: IEventItem[]
}

export interface IValueItem {
  eventName: string
  actions: IAction[]
}

export interface IEventsSetterProps {
  definition: IDefinitionItem[]
  value?: IValueItem[]
  onChange?: (value?: IValueItem[]) => void
}

export enum ActionType {
  BuiltIn = 'builtIn',
  Custom = 'custom'
}

export interface IAction {
  type: ActionType
  name?: string
  desc?: string
  params?: ISchema
  value?: any
}
