import React from 'react';
import classnames from 'classnames';
import { Menu, MenuProps } from '@/components/menu';
import { Overlay, Icon, Button } from '@alifd/next';
import { func } from '@/utils/util';
import { MenuButtonProps as NextMenuButtonProps } from '@alifd/next/types/menu-button';

const { Popup } = Overlay;

export interface MenuButtonProps extends NextMenuButtonProps {
  /**
   * 下拉菜单数据源
   */
  dataSource?: MenuProps['dataSource'];
}

export interface MenuButtonState {
  visible?: boolean;
  selectedKeys?: string[];
}

/**
 * MenuButton
 */
export class MenuButton extends React.Component<MenuButtonProps, MenuButtonState> {
  static displayName = 'MenuButton';

  static defaultProps = {
    prefix: 'fusion-ui-',
    autoWidth: true,
    popupTriggerType: 'click',
    onVisibleChange: func.noop,
    onItemClick: func.noop,
    onSelect: func.noop,
    defaultSelectedKeys: [],
    menuProps: {},
    dataSource: [],
  };

  static getDerivedStateFromProps(props) {
    const st: Partial<MenuButtonState> = {};

    if ('visible' in props) {
      st.visible = props.visible;
    }

    if ('selectedKeys' in props) {
      st.selectedKeys = props.selectedKeys;
    }

    return st;
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: props.defaultSelectedKeys,
      visible: props.defaultVisible,
    };
  }

  clickMenuItem = (key, ...others) => {
    const { selectMode } = this.props;

    this.props.onItemClick(key, ...others);

    if (selectMode === 'multiple') {
      return;
    }

    this.onPopupVisibleChange(false, 'menuSelect');
  };

  selectMenu = (keys, ...others) => {
    if (!('selectedKeys' in this.props)) {
      this.setState({
        selectedKeys: keys,
      });
    }
    this.props.onSelect(keys, ...others);
  };

  onPopupOpen = () => {
    const button = this.node;
    if (this.props.autoWidth && button && this.menu && this.menu.style) {
      this.menu.style.width = `${button.offsetWidth}px`;
    }
  };

  onPopupVisibleChange = (visible, type) => {
    if (!('visible' in this.props)) {
      this.setState({
        visible,
      });
    }
    this.props.onVisibleChange(visible, type);
  };

  _menuRefHandler = (ref) => {
    this.menu = ref;

    const refFn = this.props.menuProps.ref;
    if (typeof refFn === 'function') {
      refFn(ref);
    }
  };

  render() {
    const {
      prefix,
      style,
      className,
      label,
      popupTriggerType,
      popupContainer,
      popupStyle,
      popupClassName,
      popupProps,
      followTrigger,
      selectMode,
      menuProps,
      dataSource,
      children,
      // 未用到的 props
      onSelect,
      defaultSelectedKeys,
      onVisibleChange,
      autoWidth,
      onItemClick,
      ...others
    } = this.props;

    const { visible, selectedKeys } = this.state;

    const classNames = classnames(
      {
        [`${prefix}menu-btn`]: true,
        [`${prefix}expand`]: visible,
        opened: visible,
      },
      className,
    );

    const popupClassNames = classnames({
      [popupClassName]: !!popupClassName,
      [`${prefix}menu-btn-popup`]: true,
    });

    const trigger = (
      <Button style={style} className={classNames} {...others}>
        {label} <Icon type="arrow-down" className={`${prefix}menu-btn-arrow`} />
      </Button>
    );

    return (
      <Popup
        followTrigger={followTrigger}
        visible={visible}
        onVisibleChange={this.onPopupVisibleChange}
        trigger={trigger}
        triggerType={popupTriggerType}
        container={popupContainer}
        onOpen={this.onPopupOpen}
        ref={(node) => {
          this.node = node;
        }}
        style={popupStyle}
        className={popupClassNames}
        {...popupProps}
      >
        <div className={`${prefix}menu-btn-spacing-tb`}>
          <Menu
            {...menuProps}
            ref={this._menuRefHandler}
            selectedKeys={selectedKeys}
            selectMode={selectMode}
            onSelect={this.selectMenu}
            onItemClick={this.clickMenuItem}
            dataSource={dataSource}
          />
        </div>
      </Popup>
    );
  }
}
