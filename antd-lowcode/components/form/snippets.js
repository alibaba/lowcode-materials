export default [
  {
    title: '表单容器',
    screenshot: 'form-1.png',
    schema: {
      componentName: 'Form',
      props: {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 14,
        },
        onValuesChange: {
          type: 'JSFunction',
          value: `function onValuesChange(changedValues, allValues) {
  console.log('onValuesChange', changedValues, allValues);
}`,
        },
        onFinish: {
          type: 'JSFunction',
          value: `function onFinish(values) {
  console.log('onFinish', values);
}`,
        },
        onFinishFailed: {
          type: 'JSFunction',
          value: `function onFinishFailed({ values, errorFields, outOfDate }) {
  console.log('onFinishFailed', values, errorFields, outOfDate);
}`,
        },
        name: 'basic',
      },
      children: [
        {
          componentName: 'Form.Item',
          props: {
            label: '选项',
            name: 'optionTest',
            initialValue: 'A',
          },
          children: [
            {
              componentName: 'Checkbox.Group',
              props: {
                options: [
                  {
                    label: 'A',
                    value: 'A',
                  },
                  {
                    label: 'B',
                    value: 'B',
                  },
                  {
                    label: 'C',
                    value: 'C',
                  },
                ],
              },
            },
          ],
        },
        {
          componentName: 'Form.Item',
          props: {
            wrapperCol: {
              offset: 6,
            },
          },
          children: [
            {
              componentName: 'Button',
              props: {
                type: 'primary',
                children: '提交',
                htmlType: 'submit',
              },
            },
            {
              componentName: 'Button',
              props: {
                style: {
                  marginLeft: 20,
                },
                children: '取消',
              },
            },
          ],
        },
      ],
    },
  },
];
