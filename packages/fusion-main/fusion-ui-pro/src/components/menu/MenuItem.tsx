import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Checkbox, Icon } from '@alifd/next';
import { func, obj, KEYCODE } from '@/utils/util';
import Item from '@alifd/next/lib/menu/view/item';
import { CheckboxProps } from '@alifd/next/types/checkbox';

import { MenuItemText } from './MenuItemText';

const { bindCtx } = func;
const { pickOthers } = obj;

export interface SelectableItemProps {
  /**
   * 用于显示标签文字
   */
  label?: string;
  /**
   * 自定义样式名
   */
  className?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 帮助文本
   */
  helper?: React.ReactNode;
  /**
   * 是否缩进
   */
  needIndent?: boolean;
  /**
   * 是否处于加载状态
   */
  loading?: boolean;
  /**
   * 是否有展开功能
   */
  hasExpand?: boolean;
  /**
   * 受控值，显示是否展开
   */
  expanded?: boolean;
  /**
   * 当 hasExpand={true} 时，展开触发
   */
  onExpand?: () => void;
  /**
   * 用于覆盖 checkbox 的属性
   */
  checkboxProps?: Partial<CheckboxProps>;
  /**
   * 自定义渲染标签文字,传入则 label 失效
   */
  children?: React.ReactNode;
  _key?: string;
  root?: any;
}

export class SelectableItem extends React.Component<SelectableItemProps> {
  static menuChildType = 'item';

  static propTypes = {
    _key: PropTypes.string,
    root: PropTypes.object,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    inlineIndent: PropTypes.number,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 帮助文本
     */
    helper: PropTypes.node,
    /**
     * 菜单项标签内容
     */
    children: PropTypes.node,
    className: PropTypes.string,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    needIndent: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    needIndent: true,
  };

  constructor(props) {
    super(props);

    bindCtx(this, ['handleKeyDown', 'handleClick']);
  }

  getSelected() {
    const { _key, root, selected } = this.props;
    const { selectMode } = root.props;
    const { selectedKeys } = root.state;
    return selected || (!!selectMode && selectedKeys.indexOf(_key) > -1);
  }

  handleSelect(e) {
    const { _key, root, onSelect } = this.props;
    if (onSelect) {
      onSelect(!this.getSelected(), this, e);
    } else {
      root.handleSelect(_key, !this.getSelected(), this);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === KEYCODE.SPACE && !this.props.disabled) {
      this.handleSelect(e);
    }

    this.props.onKeyDown && this.props.onKeyDown(e);
  }

  handleClick(e) {
    this.handleSelect(e);

    this.props.onClick && this.props.onClick(e);
  }

  render() {
    const {
      _key,
      root,
      className,
      disabled,
      helper,
      label,
      children,
      needIndent,
      loading,
      // 展开状态
      hasExpand,
      onExpand,
      expanded,
      checkboxProps,
    } = this.props;
    const { prefix, selectMode } = root.props;
    const others = pickOthers(Object.keys(SelectableItem.propTypes), this.props);
    const selected = this.getSelected();

    const newProps = {
      _key,
      root,
      disabled,
      type: 'item',
      className: cx({
        'fusion-ui-menu-item': true,
        [`${prefix}selected`]: selected,
        [className]: !!className,
      }),
      onKeyDown: this.handleKeyDown,
      onClick: !disabled ? this.handleClick : this.props.onClick,
      needIndent,
      ...others,
    };

    const textProps = {};

    if ('selectMode' in root.props) {
      textProps['aria-selected'] = selected;
    }

    let innerText = (
      <MenuItemText className={`${prefix}menu-item-text`} {...textProps}>
        {label}
      </MenuItemText>
    );
    if (children) {
      innerText = (
        <div className={`${prefix}menu-item-text`} {...textProps}>
          {children}
        </div>
      );
    }

    const checkProps = {
      disabled,
      checked: selected,
      ...checkboxProps,
    };

    let innerRightIcon;
    if (loading) {
      innerRightIcon = <Icon className="fusion-ui-menu-icon-right" type="loading" size="xs" />;
    }

    // 对于可展开模式，选中状态及选中函数进行特殊处理
    if (hasExpand) {
      checkProps.onChange = this.handleClick;
      newProps.onClick = !disabled && onExpand;
      newProps.className = cx({
        'fusion-ui-menu-item': true,
        [`${prefix}selected`]: expanded,
        [className]: !!className,
      });
      if (!innerRightIcon) {
        innerRightIcon = (
          <Icon className="fusion-ui-menu-icon-right" type="arrow-right" size="xs" />
        );
      }
    }

    return (
      <Item {...newProps}>
        <div className="fusion-ui-menu-item-header">
          {selectMode === 'multiple' && <Checkbox {...checkProps} />}
          {innerText}
        </div>
        <div className="fusion-ui-menu-item-footer">
          {helper ? <div className={`${prefix}menu-item-helper`}>{helper}</div> : null}
          {innerRightIcon}
        </div>
      </Item>
    );
  }
}
