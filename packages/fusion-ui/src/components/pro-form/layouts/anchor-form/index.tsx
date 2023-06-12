import * as React from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import { Form, Card } from '@alifd/next';
import { Space } from '@/components/container';
import { Anchor, AnchorProps, LinkItemData } from '@/components/anchor';
import Operations from '@/common/operations';
import { getId } from '@/utils';

export interface AnchorFormProps {
  children?: React.ReactElement;
  /**
   * 可以这样写属性描述
   * @description   是否展示锚点
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
   * @default     false
   */
  showAnchor?: boolean;
  formMapRef?: any;
  operations?: any;
  operationConfig?: any;
  lastSaveTime?: any;
  anchorProps?: AnchorProps;
  enableRandomHtmlId?: boolean;
}

export type AnchorFormItemProps = LinkItemData;

function renderAnchor(props: AnchorFormProps, formArray: Map<string, AnchorFormItemProps>) {
  const dataSource: AnchorFormItemProps[] = Array.from(formArray.keys()).map((item) => {
    const anchorItemProps = formArray.get(item);
    const { label = '', htmlId = getId(), ...otherProps } = anchorItemProps || {};
    return {
      ...otherProps,
      label,
      htmlId,
    };
  });
  return <>{dataSource && <Anchor dataSource={dataSource} {...props} />}</>;
}

function renderForm(
  props: AnchorFormProps,
  formArrayRef: React.MutableRefObject<any[]>,
  formArray: Map<string, AnchorFormItemProps>,
) {
  const { children } = props;
  return (
    <>
      {React.Children.map(children, (child, index) => {
        const anchorItemProps = formArray.get(`${index}`);
        const { mode = 'independent', cardProps = {}, ...otherProps } = child.props;
        const { label = '', htmlId = getId() } = anchorItemProps;
        return (
          <Card title={label}  id={htmlId} className="fusion-ui-anchor-form forms" {...cardProps}>
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
          </Card>
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
    showAnchor = false,
    enableRandomHtmlId,
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
    const { anchorItemProps } = child.props;
    const name = `${index}`;
    const data = { ...anchorItemProps };
    if (enableRandomHtmlId) {
      data.htmlId = getId();
    }
    formArray.set(name, data);
  });

  const operationsProps = {
    operations,
    operationConfig,
    lastSaveTime,
  };
  const formContent = renderForm(props, formArrayRef, formArray);
  return (
    <div ref={ref}>
      {showAnchor ? renderAnchor(anchorProps, formArray) : null}
      <Form {...otherProps}>
        {formContent}
        <Operations {...operationsProps} />
      </Form>
    </div>
  );
}

export default forwardRef(AnchorForm);
