import { createSchemaField } from '@formily/react'
import {
  FormItem,
  Input,
  NumberPicker,
  DatePicker,
  TimePicker,
  Select,
  Radio,
  Switch,
  Space,
  ArrayItems,
  ArrayTable,
  FormCollapse,
  FormGrid,
  FormLayout,
  FormTab,
  ArrayCollapse,
  PreviewText,
  Editable,
  TreeSelect,
  Checkbox
} from '@formily/antd'

import { Slider, Empty as AntdEmpty, EmptyProps } from 'antd'
import {
  ValueInput,
  DataSourceSetter,
  ValidatorSetter,
  ReactionsSetter,
  DrawerSetter,
  SizeInput,
  VarFormItem
} from './components'
import React from 'react'
import './styles.less'

interface EmptyType extends React.FC<EmptyProps> {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode
  PRESENTED_IMAGE_SIMPLE: React.ReactNode
}

const Empty: EmptyType = AntdEmpty

export const SchemaField: any = createSchemaField({
  components: {
    Checkbox,
    TreeSelect,
    Editable,
    FormItem,
    Input,
    ValueInput,
    DataSourceSetter,
    ValidatorSetter,
    ReactionsSetter,
    SizeInput,
    DrawerSetter,
    NumberPicker,
    DatePicker,
    TimePicker,
    Select,
    Radio,
    Slider,
    Switch,
    Space,
    ArrayItems,
    ArrayTable,
    FormCollapse,
    FormGrid,
    FormLayout,
    FormTab,
    ArrayCollapse,
    Empty,
    PreviewText,
    VarFormItem
  }
})
