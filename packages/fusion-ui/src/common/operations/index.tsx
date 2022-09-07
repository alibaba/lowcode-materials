import * as React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { Icon, Form } from '@alifd/next';

import { bizCssPrefix } from '@/variables';
import { Button } from '@/components/button';
import { ButtonGroup, ButtonGroupProps } from '@/components/button-group';

const cssPrefix = `${bizCssPrefix}-common-operations`;

export interface OperationProps {
  operations?: any;
  operationConfig?: any;
  lastSaveTime?: any;
  renderDefaultBtns?: any;
  cssPrefix?: any;
}

const Operations: React.FC<OperationProps> = (props) => {
  const {
    cssPrefix: propCssPrefix,
    operations,
    operationConfig = {},
    lastSaveTime,
    renderDefaultBtns,
  } = props;
  const operationRef = React.useRef();

  const operationCssPrefix = 'operation-container';
  let classNames = classnames(
    propCssPrefix || cssPrefix,
    operationCssPrefix,
    operationConfig.align ? `operation-align-${operationConfig.align}` : 'operation-align-center',
  );

  if (operationConfig.fixed) {
    classNames = classnames(classNames, 'operation-fixed');
  }
  const saveTime = operationConfig.showSaveTime ? (
    <Button text>
      <Icon type="success" style={{ color: '#1DC11D' }} />
      {moment(lastSaveTime).fromNow()}
    </Button>
  ) : null;

  const buttonGroupProps: ButtonGroupProps = {};
  if (operationConfig.moreMenuButtonProps) {
    buttonGroupProps.moreMenuButtonProps = operationConfig.moreMenuButtonProps;
  }

  if (operationConfig.visibleButtonCount) {
    buttonGroupProps.visibleButtonCount = operationConfig.visibleButtonCount;
  }

  const defaultBtns =
    renderDefaultBtns && typeof renderDefaultBtns === 'function' ? renderDefaultBtns() : [];

  if ((!defaultBtns || !defaultBtns.length) && !operations) {
    return null;
  }

  if (!operations) {
    return (
      <div ref={operationRef} className={classNames}>
        <ButtonGroup {...buttonGroupProps}>{defaultBtns}</ButtonGroup>
        {saveTime}
      </div>
    );
  }

  const operationsView = (
    operations.type?.displayName === 'Slot' ? operations.props?.children || [] : operations
  ).map((operation: any, index: number) => {
    if (React.isValidElement(operation)) {
      return operation;
    }
    const { content, action, onActionClick, ...otherOperationProps } = operation;
    let BtnComp;
    if (action === 'submit') {
      BtnComp = Form.Submit;
      otherOperationProps.validate = true;
      otherOperationProps.htmlType = 'submit';
    } else if (action === 'reset') {
      BtnComp = Form.Reset;
    } else {
      BtnComp = Button;
    }
    if (onActionClick) {
      otherOperationProps.onClick = onActionClick;
    }
    return (
      <BtnComp {...otherOperationProps} key={`operation-${index}`}>
        {operation.content}
      </BtnComp>
    );
  });
  if ((!defaultBtns || !defaultBtns.length) && (!operationsView || !operationsView.length)) {
    return null;
  }
  const isLowcodePlaceHolder = operationsView.some((item) => item?.type === 'div');
  return (
    <div ref={operationRef} className={classNames}>
      <ButtonGroup {...buttonGroupProps}>
        {defaultBtns}
        {isLowcodePlaceHolder ? null : operationsView}
      </ButtonGroup>
      {isLowcodePlaceHolder ? operationsView : null}
      {saveTime}
    </div>
  );
};

export default Operations;
