import React from 'react';
import { Input } from '@alifd/next';
import { Filter, ProForm } from '@alifd/fusion-ui';

const ProFormItem = ProForm.Item;

export default () => {
  return (
    <Filter
      operations={[
        { action: 'submit', type: 'primary', content: '提交' },
        { action: 'reset', type: 'secondary', content: '重置' },
        { action: 'custom', type: 'secondary', content: 'abc' },
      ]}
      emptyContent="添加表单项"
      operationConfig={{ align: 'operation-align-center' }}
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
      <ProFormItem
        required
        name="email"
        size="medium"
        componentProps={{ componentName: 'Input' }}
        label="表单项"
        device="desktop"
        primaryKey="9815"
      >
        <Input autoComplete="off" size="medium" hasBorder />
      </ProFormItem>
      <ProFormItem
        size="medium"
        componentProps={{ componentName: 'Input' }}
        label="表单项"
        device="desktop"
        primaryKey="1961"
      >
        <Input autoComplete="off" size="medium" hasBorder />
      </ProFormItem>
      <ProFormItem
        size="medium"
        componentProps={{ componentName: 'Input' }}
        label="表单项"
        device="desktop"
        primaryKey="6067"
      >
        <Input autoComplete="off" size="medium" hasBorder />
      </ProFormItem>
    </Filter>
  );
};
