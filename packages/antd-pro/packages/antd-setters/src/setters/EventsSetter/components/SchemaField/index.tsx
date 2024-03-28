import { createSchemaField } from '@formily/react'
import {
  Input,
  FormItem,
  Select,
  Switch,
  Radio,
  DatePicker,
  TimePicker,
  FormLayout
} from '@formily/antd'

export const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    Switch,
    Radio,
    DatePicker,
    TimePicker,
    FormLayout
  }
})
