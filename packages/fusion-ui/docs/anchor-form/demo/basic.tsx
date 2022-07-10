import React from 'react';
import { AnchorForm, ChildForm, FormInput } from '@alifd/fusion-ui';

export default { title: 'AnchorForm' };

const anchorFormProps = {
  showAnchor: true,
  anchorProps: {
    direction: 'hoz',
    hasAffix: true,
  },
  operationConfig: {
    align: 'center',
  },
  operations: [
    {
      content: '提交',
      action: 'submit',
      type: 'secondary',
    },
    {
      content: '重置',
      action: 'reset',
      type: 'secondary',
    },
  ],
};

const childFormProps = [1, 2, 3, 4].map((item) => ({
  columns: 2,
  mode: 'independent',
  anchorItemProps: {
    htmlId: `id-${item}-${Date.now()}`,
    label: `Tab-${item}`,
  },
  cardSectionProps: {
    noBullet: true,
    tagGroup: [
      {
        label: '操作',
        color: 'orange',
      },
      {
        label: '操作',
        color: 'green',
      },
      {
        label: '操作',
        color: 'blue',
      },
    ],
  },
}));

const formInputProps = {
  formItemProps: {
    label: '表单项',
    size: 'medium',
    device: 'desktop',
    fullWidth: true,
  },
  placeholder: '请输入',
};

export const Basic = () => {
  return (
    <div>
      basic demo
      <AnchorForm {...anchorFormProps}>
        <ChildForm {...childFormProps[0]}>
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
        </ChildForm>
        <ChildForm {...childFormProps[1]}>
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
        </ChildForm>
        <ChildForm {...childFormProps[2]}>
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
        </ChildForm>
        <ChildForm {...childFormProps[3]}>
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
          <FormInput {...formInputProps} />
        </ChildForm>
      </AnchorForm>
    </div>
  );
};

Basic.storyName = '基本用法';
Basic.desc = 'AnchorForm 的基础用法，演示自己控制数据的用法。`code`试一下能不能用';
