import * as React from 'react';
import * as Next from '@alifd/next';
import { ItemProps } from '@alifd/next/types/form';

const { Balloon, Icon, Form } = Next;
const { Item } = Form;

export enum FormItemTypes {
  Input = 'Input',
  NumberPicker = 'NumberPicker',
  DatePicker = 'DatePicker',
}

export interface ProFormItemProps extends ItemProps {
  labelTip?: Record<string, any>;
  componentProps?: Record<string, any>;
  __designMode?: string;
}

const ProFormItem: React.ForwardRefRenderFunction<any, ProFormItemProps> = (
  props: ProFormItemProps,
  ref,
) => {
  const {
    labelTip,
    label,
    __designMode,
    children,
    labelAlign,
    labelCol,
    childForm,
    ...otherProps
  } = props;
  const _labelTip =
    labelTip && labelTip.enable
      ? Object.assign(
          {
            content: label,
            icon: 'help',
          },
          labelTip,
        )
      : null;

  return (
    <Item
      labelAlign={labelAlign}
      labelCol={labelCol}
      label={
        <>
          {label}
          {_labelTip ? (
            <Balloon
              trigger={
                <Icon
                  type={_labelTip.icon || 'help'}
                  size="xs"
                  style={{ marginLeft: 4, maxHeight: 28 }}
                />
              }
              alignEdge
              closable={false}
            >
              <p>{_labelTip.content || label}</p>
            </Balloon>
          ) : null}
        </>
      }
      {...otherProps}
      ref={ref}
    >
      {React.Children.map(children, (child) => {
        if (!child) return null;
        const _props = Object.assign({}, child.props || {});
        const { defaultValue, value, ...otherComponentProps } = _props;
        const finalValue =
          (__designMode || otherComponentProps.__designMode) === 'design' ? defaultValue : value;
        if (finalValue) {
          otherComponentProps.value = finalValue;
        }
        otherComponentProps.renderPreview = (curValue) => {
          if (otherProps.isPreview && !curValue) {
            return '—';
          }
          switch (typeof curValue) {
            case 'boolean':
              return curValue;
            case 'object':
              if (Array.isArray(curValue)) {
                return curValue.length
                  ? curValue.map((item, index) => (
                      <span key={`${index}-checkbox`} style={{ marginRight: 10 }}>
                        {item?.label || '—'}
                      </span>
                    ))
                  : null;
              }
              return curValue.label ? (
                <span style={{ marginRight: 10 }}>{curValue.label}</span>
              ) : null;
            default:
              return curValue;
          }
        };
        if (otherProps.name) {
          _props.name = otherProps.name;
        }
        if (child) {
          return React.cloneElement(child, Object.assign(_props, otherComponentProps));
        }
        return child;
      })}
      {childForm ? <div className="fusion-ui-form-item-bubble">{childForm}</div> : null}
    </Item>
  );
};

const RefProFormItem = React.forwardRef(ProFormItem);
RefProFormItem.displayName = 'ProFormItem';
RefProFormItem.defaultProps = {};
RefProFormItem.propTypes = {};

export default RefProFormItem;
