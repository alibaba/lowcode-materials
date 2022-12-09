import React from 'react';
import { Input, Field } from '@alifd/next';
import { ProForm, FormInput } from '@alifd/fusion-ui';

const ProFormItem = ProForm.Item;

export default () => {
  const field = Field.useField([]);
  const [values, setValues] = React.useState();
  return (
    <div>
      <ProForm
        field={field}
        operations={[
          { action: 'submit', type: 'primary', content: '提交' },
          { action: 'reset', type: 'secondary', content: '重置' },
          {
            action: 'custom',
            type: 'secondary',
            content: '打印表单数据',
            onClick: () => {
              const _values = field.getValues();
              setValues(_values);
            },
          },
        ]}
        emptyContent="添加表单项"
        operationConfig={{ align: 'center' }}
        labelAlign="top"
        columns={3}
        labelCol={{ fixedSpan: 4 }}
      >
        <ProFormItem required size="medium" name="nickname" label="昵称" device="desktop">
          <Input autoComplete="off" size="medium" hasBorder />
        </ProFormItem>
        <Input
          formItemProps={{
            required: true,
            name: 'email',
            label: '邮箱',
          }}
          autoComplete="off"
          size="medium"
          hasBorder
        />
        <FormInput
          formItemProps={{
            required: true,
            name: 'password',
            label: '密码',
          }}
          autoComplete="off"
          size="medium"
          hasBorder
        />
      </ProForm>
      表单数据: {JSON.stringify(values || {}, null, 2)}
    </div>
  );
};
