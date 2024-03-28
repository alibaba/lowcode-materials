import * as React from 'react';
import cx from 'classnames';
import { Dialog as NextDialog, Message, Balloon, Icon } from '@alifd/next';
import { DialogProps as NextDialogProps } from '@alifd/next/types/dialog';

import Operations, { OperationProps } from '@/common/operations';
import { isEditorEnv } from '@/utils';

const { Tooltip } = Balloon;
const noop = () => {};
const isValidFunction = (func: any) => typeof func === 'function';
const ACTION_MAP: Record<string | number, any> = {
  ok: noop,
  cancel: noop,
};

function getAction(action: string | number) {
  return ACTION_MAP[action] || noop;
}

export interface DialogProps extends NextDialogProps {
  /**
   * 弹窗大小
   */
  size?: 'small' | 'medium' | 'large' | 'autoLarge';
  operations?: object[];
  operationConfig?: object;
  status?: string;
  dialogType?: string;
  explanation?: string;
  iconType?: string;
  hasTips?: boolean;
}

export interface DialogOperationsProps extends OperationProps {
  onOk?: any;
  onCancel?: any;
}

export interface DialogState {
  visible?: boolean;
}

const DialogOperations = (props: DialogOperationsProps) => {
  const { operations, operationConfig, onOk = noop, onCancel = noop, renderDefaultBtns } = props;
  if (!operations || !operations.length) {
    return null;
  }

  const baseOperations = operations.map((operation: any) => {
    let onClick = getAction(operation.action).bind(this);
    if (operation.action) {
      if (operation.action === 'ok' && onOk && typeof onOk === 'function') {
        onClick = onOk;
      } else if (operation.action === 'cancel' && onCancel && typeof onCancel === 'function') {
        onClick = onCancel;
      }
    }
    return {
      onClick,
      ...operation,
    };
  });

  const operationProps = {
    operations: baseOperations,
    operationConfig,
    renderDefaultBtns,
  };

  return <Operations {...operationProps} />;
};

function Dialog(props: DialogProps) {
  const {
    size,
    className,
    onOk,
    onCancel,
    children,
    operations,
    footer,
    operationConfig,
    status,
    messageProps,
    dialogType,
    explanationTooltipProps,
    hasTips,
    explanation,
    iconType,
    rtl,
    title,
    width,
    ...otherProps
  } = props;
  let footerElement = footer;
  if (operations && operations.length) {
    const operationsProps = {
      operations,
      operationConfig,
      onOk,
      onCancel,
      renderDefaultBtns: () => footer || [],
    };
    footerElement = <DialogOperations {...operationsProps} />;
  }

  if (typeof width !== 'undefined') {
    otherProps.width = width;
  }

  // class 处理
  const classes = cx({
    'fusion-ui-dialog': true,
    [`fusion-ui-dialog-${size}`]: typeof width === 'undefined',
    [className]: !!className,
  });

  // 如果指定了 width ，则 size 不生效；

  const titleElement =
    dialogType === 'notice' && status ? (
      <Message
        style={{ padding: 0 }}
        size="large"
        shape="addon"
        type={status}
        {...messageProps}
        title={title}
        rtl={rtl}
      />
    ) : (
      <div>
        {title}
        {hasTips ? (
          <div className="fusion-ui-dialog__tooltip">
            <Tooltip trigger={<Icon type={iconType} size="small" />} {...explanationTooltipProps}>
              {explanation}
            </Tooltip>
          </div>
        ) : (
          ''
        )}
      </div>
    );

  return (
    <NextDialog v2 title={titleElement} footer={footerElement} className={classes} {...otherProps}>
      {children}
    </NextDialog>
  );
}

export class InnerProDialog extends React.Component {
  static displayName: 'ProDialog';

  static propTypes: DialogProps;

  constructor(props: DialogProps) {
    super(props);
    const { visible } = props;
    this.state = {
      visible: visible || false,
    };
  }

  onOk = (event: Object) => {
    const { onOk } = this.props;
    if (isValidFunction(onOk)) {
      onOk(event);
    }

    if (!('visible' in this.props)) {
      this.setState({ visible: false });
    }
  };

  onCancel = (event: Object) => {
    const { onCancel } = this.props;
    if (isValidFunction(onCancel)) {
      onCancel(event);
    }

    this.setState({ visible: false });
  };

  onClose = (trigger: String, event: Object) => {
    const { onClose } = this.props;
    if (isValidFunction(onClose)) {
      onClose(trigger, event);
    }

    this.setState({ visible: false });
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  open = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  close = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { children, ...otherProps } = this.props;
    const { visible } = this.state;
    const realVisible = isEditorEnv(this.props) ? true : visible;
    const dialogProps = {
      ...otherProps,
      visible: realVisible,
      onOk: this.onOk,
      onCancel: this.onCancel,
      onClose: this.onClose,
    };

    return <Dialog {...dialogProps}>{children}</Dialog>;
  }
}

export const ProDialog = Object.assign(InnerProDialog, NextDialog);
