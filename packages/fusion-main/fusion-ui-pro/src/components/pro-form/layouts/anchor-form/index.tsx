import * as React from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import { Form } from '@alifd/next';
import { Space } from '@/components/container';
import { ProCard } from '@alifd/pro-layout';
import { Anchor, AnchorProps, LinkItemData } from '@/components/anchor';
import Operations from '@/common/operations';

export interface AnchorFormProps {
  children?: React.ReactElement;
  showAnchor?: boolean;
  formMapRef?: any;
  operations?: any;
  operationConfig?: any;
  lastSaveTime?: any;
  anchorProps?: AnchorProps;
}

export type AnchorFormItemProps = LinkItemData;

function renderAnchor(props: AnchorFormProps, formArray) {
  const dataSource = Array.from(formArray.keys()).map((item) => {
    const { anchorItemProps } = formArray.get(item);
    const { label = '', htmlId = Date.now(), ...otherProps } = anchorItemProps || {};
    return {
      ...otherProps,
      label,
      htmlId,
    };
  });
  return <>{dataSource && <Anchor dataSource={dataSource} {...props} />}</>;
}

function renderForm(props: AnchorFormProps, formArrayRef: React.MutableRefObject<any[]>) {
  const { children } = props;
  return (
    <>
      {React.Children.map(children, (child, index) => {
        const {
          mode = 'independent',
          anchorItemProps = {},
          cardProps = {},
          ...otherProps
        } = child.props;
        const { label = '', htmlId = Date.now() } = anchorItemProps;
        return (
          <ProCard {...cardProps} title={label} id={htmlId} className="fusion-ui-anchor-form forms">
            {React.cloneElement(child, {
              ref: (node) => {
                // Keep your own reference
                formArrayRef.current[index] = node;
                // Call the original ref, if any
                const { ref } = child;
                if (typeof ref === 'function') {
                  ref(node);
                }
              },
              ...otherProps,
              mode,
            })}
          </ProCard>
        );
      })}
    </>
  );
}

function AnchorForm(props: AnchorFormProps, ref: any) {
  const {
    children,
    formMapRef: propsFormMapRef,
    operations,
    operationConfig,
    lastSaveTime,
    anchorProps = {},
    showAnchor,
    ...otherProps
  } = props;
  const formArrayRef = useRef<Array<React.MutableRefObject<any | undefined>>>([]);
  useImperativeHandle(propsFormMapRef, () => formArrayRef.current);
  if (!children) {
    return (
      <Space ref={ref} full align="center" verAlign="middle" style={{ minHeight: 50 }}>
        <span>内容为空</span>
      </Space>
    );
  }

  const formArray = new Map<string, AnchorFormItemProps>();
  React.Children.map(children, (child, index) => {
    const itemProps = child.props as AnchorFormItemProps;
    const name = `${index}`;
    formArray.set(name, itemProps);
  });

  const operationsProps = {
    operations,
    operationConfig,
    lastSaveTime,
  };
  return (
    <div ref={ref}>
      {showAnchor ? renderAnchor(anchorProps, formArray) : null}
      <Form {...otherProps}>
        {renderForm(props, formArrayRef)}
        <Operations {...operationsProps} />
      </Form>
    </div>
  );
}

export default forwardRef(AnchorForm);
