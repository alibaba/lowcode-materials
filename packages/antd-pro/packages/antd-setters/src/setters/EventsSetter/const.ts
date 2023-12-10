import { ActionType, IAction } from './types'

// 内置动作，点击内置动作选项后渲染参数表单，表单使用 formily 渲染
export const builtInActions: IAction[] = [
  {
    type: ActionType.BuiltIn,
    name: 'openPage',
    desc: '打开页面',
    params: {
      type: 'object',
      properties: {
        url: {
          name: 'url',
          type: 'string',
          title: 'url',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          required: true
        },
        isBlank: {
          name: 'isBlank',
          type: 'boolean',
          title: '在新页面打开',
          'x-decorator': 'FormItem',
          'x-component': 'Switch'
        }
      }
    }
  },
  {
    type: ActionType.BuiltIn,
    name: 'message',
    desc: '消息提示',
    params: {
      type: 'object',
      properties: {
        message: {
          name: 'message',
          type: 'string',
          title: '消息内容',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          required: true
        }
      }
    }
  },
  {
    type: ActionType.BuiltIn,
    name: 'goBack',
    desc: '返回上一页'
  },
  {
    type: ActionType.BuiltIn,
    name: 'openModal ',
    desc: '打开弹窗'
  }
]

export const customActions: IAction[] = [
  {
    type: ActionType.Custom,
    name: 'custom',
    desc: '自定义代码',
    params: {
      type: 'object',
      properties: {
        name: {
          name: 'name',
          type: 'string',
          title: '动作名称',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          required: true
        },
        isSetExtendParams: {
          name: 'isSetExtendParams',
          type: 'boolean',
          title: '扩展参数设置',
          'x-decorator': 'FormItem',
          'x-component': 'Switch'
        }
      }
    }
  }
]
