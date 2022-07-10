import moment from 'moment';
import * as React from 'react';
import classnames from 'classnames';
import { FormProps } from '@alifd/next/lib/form';
import { ResponsiveGrid, Form } from '@alifd/next';

import { ObjUtils } from '@/utils';
import { bizCssPrefix } from '@/variables';
import Operations from '@/common/operations';
import ProFormItem from '@/components/pro-form/components/form-item';

moment.locale('zh-cn');
const cssPrefix = `${bizCssPrefix}-pro-form`;

export interface ProFormProps extends FormProps {
  columns: number;
  children: React.ReactChild;
  emptyContent: React.ReactNode | string;
  spacing: number;
  operations?: React.ReactNode | object[];
  operationConfig?: object;
  lastSaveTime?: number;
  device?: string;
}

export const formatFormItems: Function = (
  children: React.ReactChild,
  props: ProFormProps,
  isChildForm: boolean,
) => {
  const {
    columns: gridColumns,
    size,
    device,
    labelAlign,
    labelTextAlign,
    labelCol,
    wrapperCol,
    colon,
    isPreview,
  } = props;

  const _children = children.filter(
    (child: React.ReactElement) => child && ['function', 'object'].indexOf(typeof child.type) > -1,
  );
  const childrenLength = _children.length;
  const rows: any = [];
  for (let i = 0; i < childrenLength; ) {
    const subRows = [];
    let index = i;
    let sum = 0;
    while (index < childrenLength) {
      sum +=
        _children[index].props.columnSpan || _children[index].props.formItemProps?.columnSpan || 1;
      if (sum > gridColumns) {
        index--;
        break;
      }
      subRows.push(_children[index++].key);
    }
    i = ++index;
    rows.push(subRows);
  }

  return React.Children.map(_children, (child: React.ReactElement) => {
    if (ObjUtils.isReactFragment(child)) {
      return formatFormItems(child.props.children, props);
    }
    if (child && ['function', 'object'].indexOf(typeof child.type) > -1) {
      const _labelAlign = device === 'phone' ? 'top' : labelAlign;
      const childrenProps = {
        labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
        wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
        labelAlign: child.props.labelAlign ? child.props.labelAlign : _labelAlign,
        labelTextAlign: child.props.labelTextAlign ? child.props.labelTextAlign : labelTextAlign,
        colon: 'colon' in child.props ? child.props.colon : colon,
        size: child.props.size ? child.props.size : size,
        isPreview: child.props.isPreview ? child.props.isPreview : isPreview,
      };
      const { formItemProps = {}, ...componentProps } = child.props || {};
      let { columnSpan = 1 } = formItemProps;
      if (!isChildForm && rows[rows.length - 1]?.includes(child.key)) {
        childrenProps.style = { marginBottom: '0px' };
      }
      if (
        ['ProFormItem', 'ChildForm'].includes(child.type.displayName) ||
        child.type?.displayName?.startsWith('Form')
      ) {
        if (child.type.displayName === 'ChildForm') {
          columnSpan = gridColumns;
        }
        return (
          <ResponsiveGrid.Cell colSpan={columnSpan}>
            {React.cloneElement(child, {
              formItemProps: {
                ...ObjUtils.pickDefined(childrenProps),
                ...formItemProps,
              },
            })}
          </ResponsiveGrid.Cell>
        );
      }

      return (
        <ResponsiveGrid.Cell colSpan={columnSpan}>
          <ProFormItem {...childrenProps} {...formItemProps}>
            {React.cloneElement(child, componentProps)}
          </ProFormItem>
        </ResponsiveGrid.Cell>
      );
    }
    return child;
  });
};

const ProForm: React.ForwardRefRenderFunction<any, ProFormProps> = (props: ProFormProps, ref) => {
  const {
    children,
    columns,
    spacing = [0, 16, 16, 0],
    operations,
    operationConfig,
    emptyContent,
    lastSaveTime,
    ...otherProps
  } = props;

  const { isPreview } = otherProps || {};

  const operationProps = { operations, operationConfig, lastSaveTime };
  return (
    <>
      <Form className={cssPrefix} {...otherProps} ref={ref}>
        {children ? (
          <ResponsiveGrid
            className={classnames(cssPrefix, +columns === 1 ? 'one-column' : '')}
            gap={spacing}
            columns={columns}
          >
            {formatFormItems(children, {
              columns,
              ...otherProps,
            })}
          </ResponsiveGrid>
        ) : (
          <div className="empty-content">{emptyContent}</div>
        )}
        {isPreview ? null : <Operations {...operationProps} />}
      </Form>
    </>
  );
};

const RefProForm = React.forwardRef(ProForm);
RefProForm.displayName = 'ProForm';
RefProForm.defaultProps = {};
RefProForm.propTypes = {};
RefProForm.Item = ProFormItem;

export default RefProForm;
