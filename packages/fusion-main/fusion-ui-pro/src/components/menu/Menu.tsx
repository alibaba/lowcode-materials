import * as React from 'react';
import omit from 'lodash/omit';
import cx from 'classnames';
import { Menu as NextMenu, Loading as NextLoading, Icon } from '@alifd/next';
import { MenuProps as NextMenuProps } from '@alifd/next/types/menu';

import { SelectableItem as MenuItem } from './MenuItem';

const {
  PopupItem: MenuPopupItem,
  CheckboxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
  SubMenu,
  Group,
  Divider,
} = NextMenu;

export interface MenuItemProps {
  /**
   * 菜单值
   */
  key?: string;
  /**
   * 类型
   * @default item
   */
  type?: 'item' | 'popupItem' | 'checkboxItem' | 'radioItem' | 'divider' | 'group' | 'subMenu';
  /**
   * 展示标签
   */
  label?: string;
  /**
   * 是否处于禁用状态
   */
  disabled?: boolean;
  /**
   * 自定义 label 展示
   */
  children?: React.ReactNode;
  /**
   * 帮助文本
   */
  helper?: React.ReactNode;
}

export interface MenuProps extends Omit<NextMenuProps, 'hasSelectedIcon' | 'isSelectIconRight'> {
  /**
   * 是否处于加载状态
   */
  loading?: boolean;
  /**
   * 是否出错
   */
  error?: boolean | string;
  /**
   * 数据源
   */
  dataSource?: MenuItemProps[];
  /**
   * 国际化文案
   */
  i18nBundle?: Record<string, string>;
}

export class Menu extends React.Component<MenuProps> {
  static displayName = 'Menu';

  renderChildren(dataSource) {
    const menuItemList: React.ReactElement[] = [];
    Array.isArray(dataSource) &&
      dataSource.forEach((dataItem) => {
        if (!dataItem.type || dataItem.type?.toLowerCase() === 'item') {
          menuItemList.push(<MenuItem {...omit(dataItem, ['type'])} />);
        }
        if (dataItem.type?.toLowerCase() === 'popupitem') {
          menuItemList.push(<MenuPopupItem {...omit(dataItem, ['type'])} />);
        }
        if (dataItem.type?.toLowerCase() === 'checkboxitem') {
          const children = dataItem.children || dataItem.label;
          menuItemList.push(
            <MenuCheckboxItem {...omit(dataItem, ['type', 'label', 'children'])}>
              {children}
            </MenuCheckboxItem>,
          );
        }
        if (dataItem.type?.toLowerCase() === 'radioitem') {
          const children = dataItem.children || dataItem.label;
          menuItemList.push(
            <MenuRadioItem {...omit(dataItem, ['type', 'label', 'children'])}>
              {children}
            </MenuRadioItem>,
          );
        }
        if (dataItem.type?.toLowerCase() === 'divider') {
          menuItemList.push(<Divider {...omit(dataItem, ['type'])} />);
        }
        if (dataItem.type?.toLowerCase() === 'group') {
          menuItemList.push(
            <Group {...omit(dataItem, ['type', 'children'])}>
              {this.renderChildren(dataItem.children)}
            </Group>,
          );
        }
        if (dataItem.type?.toLowerCase() === 'submenu') {
          menuItemList.push(
            <SubMenu {...omit(dataItem, ['type', 'children'])}>
              {this.renderChildren(dataItem.children)}
            </SubMenu>,
          );
        }
      });
    return menuItemList;
  }

  renderLoadingContent() {
    return <NextLoading className="fusion-ui-menu-loading" />;
  }

  renderErrorContent() {
    const { error, i18nBundle } = this.props;
    const errorText = typeof error === 'boolean' ? i18nBundle.error : error;

    return (
      <div className="fusion-ui-menu-error">
        <div className="fusion-ui-menu-error-content">
          <Icon type="ic_cry" size="small" />
          <div className="fusion-ui-menu-error-content-text">{errorText}</div>
        </div>
      </div>
    );
  }

  render() {
    const { className, dataSource, loading, error, i18nBundle, ...otherProps } = this.props;

    const classes = cx({
      'fusion-ui-menu': true,
      [className]: !!className,
    });

    let children;

    if (loading) {
      children = this.renderLoadingContent();
    } else if (error) {
      children = this.renderErrorContent();
    } else {
      children = this.renderChildren(dataSource);
    }

    const menuProps = {
      className: classes,
      ...otherProps,
    };
    return <NextMenu {...menuProps}> {children} </NextMenu>;
  }
}
