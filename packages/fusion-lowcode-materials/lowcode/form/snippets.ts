export default [
  {
    title: '表单容器',
    screenshot: 'https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png',
    schema: {
      componentName: 'Form',
      props: {
        labelCol: {
          span: 2,
        },
        wrapperCol: {
          span: 14,
        },
        labelAlign: 'left',
      },
      children: [
        {
          componentName: 'Form.Item',
          props: {
            label: 'Email: ',
            required: true,
          },
          children: [
            {
              componentName: 'Input',
              props: {
                name: 'email',
                size: 'medium',
                placeholder: '用户名',
              },
            },
          ],
        },
        {
          componentName: 'Form.Item',
          props: {
            label: 'Password: ',
            required: true,
          },
          children: [
            {
              componentName: 'Input.Password',
              props: {
                name: 'password',
                placeholder: '请输入密码',
                size: 'medium',
              },
            },
          ],
        },
        {
          componentName: 'Form.Item',
          props: {
            label: '\b',
          },
          children: [
            {
              componentName: 'Form.Submit',
              props: {
                type: 'primary',
                validate: true,
                children: 'Submit',
              },
            },
            {
              componentName: 'Form.Reset',
              props: {
                style: {
                  marginLeft: 10,
                },
                children: 'Reset',
              },
            },
          ],
        },
      ],
    },
  },
];
