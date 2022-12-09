import * as React from 'react';
import { Drawer as NextDrawer, Balloon, Icon } from '@alifd/next';
import { DrawerProps as NextDrawerProps } from '@alifd/next/types/Drawer';

import { isEditorEnv } from '@/utils';
import { bizCssPrefix } from '@/variables';
import { Space } from '@/components/container';
import Operations, { OperationProps } from '@/common/operations';

const cssPrefix = `${bizCssPrefix}-pro-drawer`;

const noop = () => {};
const isValidFunction = (func: any) => typeof func === 'function';
const ACTION_MAP: Record<string | number, any> = {
  ok: noop,
  cancel: noop,
};

function getAction(action: string | number) {
  return ACTION_MAP[action] || noop;
}
export interface DrawerProps extends NextDrawerProps {
  /**
   * 弹窗大小
   */
  size?: 'small' | 'medium' | 'large' | 'autoLarge';
  operations?: object[];
  operationConfig?: object;
  onOk?: any;
  onCancel?: any;
  footer?: any;
  titleTip?: any;
}

export interface DrawerOperationsProps extends OperationProps {
  onOk?: any;
  onCancel?: any;
}

const DrawerOperations = (props: DrawerOperationsProps) => {
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

  return <Operations cssPrefix={cssPrefix} {...operationProps} />;
};

const sizeMap: Record<string, Record<string, string>> = {
  small: {
    hoz: '20vw',
    ver: '20vh',
  },
  medium: {
    hoz: '40vw',
    ver: '40vh',
  },
  large: {
    hoz: '60vw',
    ver: '60vh',
  },
};

function Drawer(props: DrawerProps) {
  const {
    size,
    children,
    operations,
    placement,
    onOk,
    onCancel,
    footer,
    operationConfig = {},
    title,
    titleTip,
    className,
    width,
    height,
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
    footerElement = <DrawerOperations {...operationsProps} />;
  }
  let _width = width;
  let _height = height;
  let align;
  if (size) {
    // ver
    if (['top', 'bottom'].includes(placement)) {
      align = 'ver';
      if (!_height) {
        _height = sizeMap[size].ver;
      }
    } else if (['left', 'right'].includes(placement)) {
      align = 'hoz';
      if (!_width) {
        _width = sizeMap[size].hoz;
      }
    }
  }

  const _titleTip =
    titleTip && titleTip.enable
      ? Object.assign(
          {
            content: title,
            icon: 'help',
          },
          titleTip,
        )
      : null;
  const titleElement = title ? (
    <Space className={`${cssPrefix}-title`}>
      {title}
      {_titleTip ? (
        <Balloon
          trigger={
            <Icon
              type={_titleTip.icon || 'help'}
              size="xs"
              style={{ marginLeft: 4, maxHeight: 28 }}
            />
          }
          alignEdge
          closable={false}
        >
          <p>{_titleTip.content || title}</p>
        </Balloon>
      ) : null}
    </Space>
  ) : null;

  return (
    <NextDrawer
      className={cssPrefix}
      placement={placement}
      width={align === 'hoz' ? _width : null}
      height={align === 'ver' ? _height : null}
      title={titleElement}
      {...otherProps}
    >
      <div className={`${cssPrefix}-content`}>{children}</div>

      <div className={`${cssPrefix}-footer`}>{footerElement}</div>
    </NextDrawer>
  );
}

export class InnerProDrawer extends React.Component<DrawerProps> {
  static displayName: 'ProDrawer';

  static propTypes: DrawerProps;

  constructor(props: DrawerProps) {
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
    const DrawerProps = {
      ...otherProps,
      visible: realVisible,
      onOk: this.onOk,
      onCancel: this.onCancel,
      onClose: this.onClose,
    };

    return <Drawer {...DrawerProps}>{children}</Drawer>;
  }
}

export const ProDrawer = Object.assign(InnerProDrawer, NextDrawer);
