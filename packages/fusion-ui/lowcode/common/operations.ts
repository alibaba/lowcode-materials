import { IProps } from '../types';
import { hideProp } from '../utils';
import { IPublicModelSettingField } from '@alilc/lowcode-types';

export const operationConfig: IProps = {
  name: 'operationConfig',
  display: 'accordion',
  title: '底部操作',
  setter: {
    componentName: 'ObjectSetter',
    props: {
      config: {
        items: [
          {
            name: 'visibleButtonCount',
            title: {
              label: '可见数量',
              tip: '超过会收起到”更多“菜单中',
            },
            extraProps: {
              defaultValue: 3,
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                max: 6,
                min: 1,
              },
            },
          },
          {
            name: 'fixed',
            title: '吸底',
            setter: 'BoolSetter',
          },
          {
            name: 'showSaveTime',
            title: '显示时间',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'align',
            title: '布局',
            defaultValue: 'center',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '居左',
                    value: 'left',
                  },
                  {
                    title: '居中',
                    value: 'center',
                  },
                  {
                    title: '居右',
                    value: 'right',
                  },
                ],
              },
            },
          },
        ],
      },
    },
  },
};

export const operations: IProps = {
  name: 'operations',
  display: 'block',
  title: '操作项',
  getValue: (target, value) => {
    return value || [];
  },
  setter: {
    componentName: 'MixedSetter',
    props: {
      setters: [
        {
          componentName: 'SlotSetter',
          defaultValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        {
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
                      setter: (target: IPublicModelSettingField) => {
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
                      setValue: (target: IPublicModelSettingField, value: any) => {
                        const actionNameMap: any = {
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
                      name: 'behavior',
                      title: '交互设置',
                      display: 'block',
                      condition: (target: IPublicModelSettingField) => {
                        const action = target.parent.getPropValue('action');
                        return !action || action === 'custom';
                      },
                      setter: {
                        componentName: 'BehaviorSetter',
                        props: (target: IPublicModelSettingField) => ({
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
                        setValue: (target: IPublicModelSettingField, value: any) => {
                          target.parent.setPropValue('htmlType', value ? 'submit' : '');
                        },
                        getValue: (target: IPublicModelSettingField, value: any) => {
                          return value === 'submit';
                        },
                      },
                      condition: (target: IPublicModelSettingField) => {
                        return target.parent.getPropValue('action') !== 'submit';
                      },
                    },
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
      ],
    },
  },
};

export const operationProps = [operationConfig, operations];
