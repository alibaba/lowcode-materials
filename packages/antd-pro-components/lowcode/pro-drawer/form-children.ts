export const children = [
  {
    componentName: 'Form',
    props: {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      },
      onValuesChange: {
        type: 'JSFunction',
        value:
          "function onValuesChange(changedValues, allValues) {\n  console.log('onValuesChange', changedValues, allValues);\n}"
      },
      onFinish: {
        type: 'JSFunction',
        value:
          "function onFinish(values) {\n  console.log('onFinish', values);\n}"
      },
      onFinishFailed: {
        type: 'JSFunction',
        value:
          "function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log('onFinishFailed', values, errorFields, outOfDate);\n}"
      },
      name: 'basic'
    },
    children: [
      {
        componentName: 'Form.Item',
        props: {
          label: '表单项',
          labelAlign: 'right',
          colon: true,
          required: true,
          noStyle: false,
          valuePropName: 'value',
          name: 'a',
          requiredobj: {
            required: true,
            message: '必填'
          },
          typeobj: {
            type: null,
            message: null
          },
          lenobj: {
            max: null,
            min: null,
            message: null
          },
          patternobj: {
            pattern: null,
            message: null
          }
        },
        children: [
          {
            componentName: 'Input',
            props: {
              placeholder: '请输入',
              bordered: true,
              disabled: false,
              size: 'middle'
            }
          }
        ]
      },
      {
        componentName: 'Form.Item',
        props: {
          label: '表单项',
          labelAlign: 'right',
          colon: true,
          required: false,
          noStyle: false,
          valuePropName: 'value',
          requiredobj: {
            required: null,
            message: null
          },
          typeobj: {
            type: null,
            message: null
          },
          lenobj: {
            max: null,
            min: null,
            message: null
          },
          patternobj: {
            pattern: null,
            message: null
          },
          name: 'b'
        },
        children: [
          {
            componentName: 'InputNumber',
            props: {
              placeholder: '请输入',
              autoFocus: false,
              disabled: false,
              controls: true,
              bordered: true,
              size: 'middle'
            }
          }
        ]
      },
      {
        componentName: 'Form.Item',
        props: {
          label: '表单项',
          labelAlign: 'right',
          colon: true,
          required: false,
          noStyle: false,
          valuePropName: 'value',
          requiredobj: {
            required: null,
            message: null
          },
          typeobj: {
            type: null,
            message: null
          },
          lenobj: {
            max: null,
            min: null,
            message: null
          },
          patternobj: {
            pattern: null,
            message: null
          },
          name: 'c'
        },
        children: [
          {
            componentName: 'Input.Password',
            props: {
              bordered: true,
              disabled: false,
              visibilityToggle: true,
              placeholder: '请输入',
              size: 'middle'
            }
          }
        ]
      },
      {
        componentName: 'Form.Item',
        props: {
          label: '表单项',
          labelAlign: 'right',
          colon: true,
          required: false,
          noStyle: false,
          valuePropName: 'value',
          requiredobj: {
            required: null,
            message: null
          },
          typeobj: {
            type: null,
            message: null
          },
          lenobj: {
            max: null,
            min: null,
            message: null
          },
          patternobj: {
            pattern: null,
            message: null
          },
          name: 'd'
        },
        children: [
          {
            componentName: 'Input.TextArea',
            props: {
              autoSize: {
                minRows: 3,
                maxRows: 3
              },
              placeholder: '请输入',
              bordered: true,
              disabled: false,
              showCount: false,
              size: 'middle'
            }
          }
        ]
      },
      {
        componentName: 'Form.Item',
        props: {
          label: '表单项',
          name: 'e',
          labelAlign: 'right',
          colon: true,
          required: false,
          noStyle: false,
          valuePropName: 'value',
          requiredobj: {
            required: null,
            message: null
          },
          typeobj: {
            type: null,
            message: null
          },
          lenobj: {
            max: null,
            min: null,
            message: null
          },
          patternobj: {
            pattern: null,
            message: null
          }
        },
        children: [
          {
            componentName: 'Select',
            props: {
              style: {
                width: 200
              },
              options: [
                {
                  label: 'A',
                  value: 'A'
                },
                {
                  label: 'B',
                  value: 'B'
                },
                {
                  label: 'C',
                  value: 'C'
                }
              ],
              allowClear: false,
              autoFocus: false,
              defaultActiveFirstOption: true,
              disabled: false,
              labelInValue: false,
              showSearch: false,
              size: 'middle',
              loading: false,
              bordered: true,
              filterOption: true,
              optionFilterProp: 'value',
              tokenSeparators: []
            }
          }
        ]
      },
      {
        componentName: 'Form.Item',
        props: {
          label: '表单项',
          name: 'g',
          initialValue: 'A',
          colon: true,
          required: false,
          noStyle: false,
          valuePropName: 'value',
          requiredobj: {
            required: null,
            message: null
          },
          typeobj: {
            type: null,
            message: null
          },
          lenobj: {
            max: null,
            min: null,
            message: null
          },
          patternobj: {
            pattern: null,
            message: null
          }
        },
        children: [
          {
            componentName: 'Checkbox.Group',
            props: {
              options: [
                {
                  label: 'A',
                  value: 'A'
                },
                {
                  label: 'B',
                  value: 'B'
                },
                {
                  label: 'C',
                  value: 'C'
                }
              ]
            }
          }
        ]
      },
      {
        componentName: 'Form.Item',
        props: {
          label: '表单项',
          labelAlign: 'right',
          colon: true,
          required: false,
          noStyle: false,
          valuePropName: 'checked',
          requiredobj: {
            required: null,
            message: null
          },
          typeobj: {
            type: null,
            message: null
          },
          lenobj: {
            max: null,
            min: null,
            message: null
          },
          patternobj: {
            pattern: null,
            message: null
          },
          name: 'i'
        },
        children: [
          {
            componentName: 'Switch',
            props: {
              defaultChecked: false,
              autoFocus: false,
              disabled: false,
              loading: false,
              size: 'default'
            }
          }
        ]
      }
    ]
  }
]
