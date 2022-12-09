import React from 'react';
import { Input, Button } from '@alifd/next';
import { ProForm } from '@alifd/fusion-ui';

export default () => {
  return (
    <div>
      <ProForm
        operations={[
          <Button> 自定义按钮</Button>,
          { action: 'submit', type: 'primary', content: '提交' },
        ]}
        emptyContent="添加表单项"
        operationConfig={{ align: 'center' }}
        labelAlign="top"
        placeholderStyle={{
          border: 0,
          color: '#0088FF',
          background: '#d8d8d836',
          height: '38px',
          gridArea: 'span 4 / span 4',
        }}
        columns={3}
        placeholder="请在右侧面板添加表单项+"
        labelCol={{ fixedSpan: 4 }}
      >
        <Input
          formItemProps={{
            required: true,
            name: 'email',
            size: 'medium',
            label: '表单项',
            device: 'desktop',
          }}
          autoComplete="off"
          size="medium"
          hasBorder
        />
      </ProForm>
    </div>
  );
};
