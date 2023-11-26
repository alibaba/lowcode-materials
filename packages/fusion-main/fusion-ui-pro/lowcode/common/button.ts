import { hideProp } from '../utils';


export const customButton =         {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'id',
                      condition: hideProp,
                      setter: (target) => {
                        if (!target.getValue()) {
                          target.setValue(`${target.id}`);
                        }
                        return 'StringSetter';
                      },
                    },
                    {
                      name: 'content',
                      display: 'inline',
                      title: '文本',
                      setter: 'StringSetter',
                      important: true,
                    },

                    {
                      name: 'action',
                      display: 'inline',
                      title: '操作',
                      important: true,
                      setValue: (target, value) => {
                        const actionNameMap = {
                          submit: '提交',
                          reset: '重置',
                          custom: '自定义',
                        };
                        const actionName = actionNameMap[value] || '自定义';
                        target.parent.setPropValue('content', actionName);
                      },
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '提交',
                              value: 'submit',
                            },
                            {
                              title: '重置',
                              value: 'reset',
                            },
                            {
                              title: '自定义',
                              value: 'custom',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'type',
                      display: 'inline',
                      title: '样式',
                      important: true,
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '主要',
                              value: 'primary',
                            },
                            {
                              title: '次要',
                              value: 'secondary',
                            },
                            {
                              title: '普通',
                              value: 'normal',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'warning',
                      display: 'inline',
                      title: 'warning',
                      setter: ['BoolSetter','VariableSetter'],
                    },
                    {
                      name: 'style.color',
                      title: '文字颜色',
                      display: 'inline',
                      setter: 'ColorSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'style.backgroundColor',
                      title: '背景颜色',
                      display: 'inline',
                      setter: 'ColorSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'hidden',
                      title: '是否隐藏',
                      display: 'inline',
                      defaultValue: false,
                      setter: 'BoolSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'disabled',
                      display: 'inline',
                      title: '禁用',
                      setter: ['BoolSetter','VariableSetter'],
                    },
                    {
                      name: 'onClick',
                      display: 'inline',
                      title: '点击函数',
                      setter: ['FunctionSetter'],
                    },
                    {
                      name: 'behavior',
                      title: '交互设置',
                      display: 'block',
                      condition: (target) => {
                        const action = target.parent.getPropValue('action');
                        return !action || action === 'custom';
                      },
                      setter: {
                        componentName: 'BehaviorSetter',
                        props: (target) => ({
                          actions: ['onClick'],
                          enableTooltipAction: true,
                          enableMessageAction: true,
                          extendedOptions: {
                            tooltip: {
                              id: target.parent.getPropValue('id'),
                              defaultTriggerType: 'click',
                            },
                            message: {
                              types: ['notice', 'success', 'loading', 'warning', 'error'],
                              defaultType: 'notice',
                              library: 'Next',
                              component: 'Message',
                            },
                          },
                        }),
                      },
                    },
                    {
                      name: 'onClick',
                      display: 'inline',
                      title: '点击事件',
                      condition: hideProp,
                      setter: 'FunctionSetter',
                      extraProps: {
                        supportVariable: true,
                      },
                    },
                    {
                      name: 'htmlType',
                      condition: hideProp,
                    },
                    {
                      name: '!autoSubmit',
                      display: 'inline',
                      virtual: true,
                      title: '自动提交',
                      setter: {
                        componentName: 'BoolSetter',
                      },
                      extraProps: {
                        setValue: (target, value) => {
                          target.parent.setPropValue('htmlType', value ? 'submit' : '');
                        },
                        getValue: (target, value) => {
                          return value === 'submit';
                        },
                      },
                      condition: (target) => {
                        return target.parent.getPropValue('action') !== 'submit';
                      },
                    },

                  
                        // {
                        //   name: 'style',
                        //   display: 'inline',
                        //   title: '样式名称',
                        //   setter: ['StyleSetter'],
                        // },
   

                  ],
                },
              },
              initialValue: () => {
                return {
                  content: '提交',
                  action: 'submit',
                  type: 'normal',
                };
              },
            },
          },
        },
