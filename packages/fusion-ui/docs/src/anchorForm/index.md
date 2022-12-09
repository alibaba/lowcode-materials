## 何时使用

适合表单场景。

## 示例

```tsx
import React from 'react';
import { AnchorForm, ChildForm, FormInput, TabContainer } from '@alifd/fusion-ui';

const anchorFormProps = {
  showAnchor: true,
  enableRandomHtmlId: true,
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

const childFormProps = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => ({
  columns: 2,
  mode: 'independent',
  anchorItemProps: {
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

export default () => {
  return (
    <div>
      basic demo
      <TabContainer>
        <TabContainer.Item title="123">
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
        </TabContainer.Item>
        <TabContainer.Item title="456">
          <AnchorForm {...anchorFormProps}>
            <ChildForm {...childFormProps[4]}>
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
            </ChildForm>
            <ChildForm {...childFormProps[5]}>
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
            </ChildForm>
            <ChildForm {...childFormProps[6]}>
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
            </ChildForm>
            <ChildForm {...childFormProps[7]}>
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
              <FormInput {...formInputProps} />
            </ChildForm>
          </AnchorForm>
        </TabContainer.Item>
      </TabContainer>
    </div>
  );
};
```

## API

<API hideTitle  src="@/components/pro-form/layouts/anchor-form/index.tsx" />
