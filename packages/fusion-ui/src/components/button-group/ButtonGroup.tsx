import * as React from 'react';
import omit from 'lodash/omit';
import cx from 'classnames';
import { Button, ButtonProps } from '@/components/button';
import { MenuButton, MenuButtonProps } from '@/components/menu-button';
import { Space, SpaceProps } from '@/components/container';
import checkComName from '@/utils/checkComName';

export interface ButtonGroupProps extends SpaceProps {
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义样式名
   */
  className?: string;
  /**
   * 是否设定按钮为文字模式
   */
  text?: boolean;
  /**
   * 可见按钮数量，超过会收起到”更多“菜单中
   */
  visibleButtonCount?: number | false;
  /**
   * 数据源驱动，如传入 children，则以 children 优先
   */
  dataSource?: ButtonProps[];
  /**
   * "更多" 按钮的额外配置
   */
  moreMenuButtonProps?: Partial<MenuButtonProps>;
  /**
   * 国际化文案
   */
  i18nBundle?: any;
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  static defaultProps = {
    visibleButtonCount: 3,
    moreMenuButtonProps: {},
  };

  static displayName = 'ButtonGroup';

  /**
   * 将 dataSource 和 children 处理成真正的 dataSource
   */
  getDataSource = () => {
    const { dataSource, children, text } = this.props;

    let externalProps: Partial<ButtonProps> = {};
    if (text) {
      externalProps = {
        type: 'primary',
        text: true,
      };
    }

    const realDataSource: object[] = [];

    if (children) {
      React.Children.forEach(children, (child) => {
        if (checkComName(child, Button)) {
          realDataSource.push({
            ...externalProps,
            ...child.props,
          });
        } else if (
          // 表单操作按钮逻辑兼容
          checkComName(child, null, [
            'SubmitButton',
            'ResetButton',
            'Submit',
            'Reset',
            'Form.Submit',
            'Form.Reset',
            'Config(Button)',
          ])
        ) {
          realDataSource.push(child);
        }
      });
    } else if (Array.isArray(dataSource)) {
      dataSource.forEach((dataSourceItem) => {
        realDataSource.push({
          ...externalProps,
          ...dataSourceItem,
        });
      });
    }

    return realDataSource;
  };

  /**
   * 获取可展示的 dataSource & 折叠的 dataSource
   */
  getVisibleDataSourceAndCollapseDataSource = (dataSource) => {
    const { visibleButtonCount } = this.props;
    if (visibleButtonCount === false) {
      return {
        visible: dataSource,
        collapse: [],
      };
    }

    const visibleDataSource = [];
    const collapseDataSource = [];

    dataSource.forEach((dataSourceItem, idx) => {
      if (idx >= visibleButtonCount) {
        collapseDataSource.push(dataSourceItem);
      } else {
        visibleDataSource.push(dataSourceItem);
      }
    });

    return {
      visible: visibleDataSource,
      collapse: collapseDataSource,
    };
  };

  /**
   * 渲染可展示的 dataSource
   */
  renderVisible(dataSource) {
    const buttonList = [];
    dataSource.forEach((dataSourceItem, idx) => {
      if (React.isValidElement(dataSourceItem)) {
        buttonList.push(dataSourceItem);
      } else {
        buttonList.push(<Button key={idx} {...dataSourceItem} />);
      }
    });

    return buttonList;
  }

  /**
   * 渲染折叠的 dataSource
   */
  renderCollapse(dataSource) {
    const { i18nBundle, moreMenuButtonProps, text } = this.props;

    const menuDataSource = dataSource.map((dataSourceItem) => {
      if (typeof dataSourceItem.props === 'object') {
        return omit(dataSourceItem.props, ['type', 'text']);
      }
      return omit(dataSourceItem, ['type', 'text']);
    });
    if (dataSource.length > 0) {
      return (
        <MenuButton
          popupProps={{ align: 'tr br' }}
          label={i18nBundle.more}
          text={text}
          type={text ? 'primary' : 'normal'}
          {...moreMenuButtonProps}
          dataSource={menuDataSource}
        />
      );
    }
  }

  render() {
    const {
      style,
      className,
      // otherProps
      text,
      visibleButtonCount,
      dataSource,
      moreMenuButtonProps,
      i18nBundle,
      ...otherProps
    } = this.props;

    const classes = cx('fusion-ui-button-group', className);

    const realDataSource = this.getDataSource();
    const { visible, collapse } = this.getVisibleDataSourceAndCollapseDataSource(realDataSource);

    return (
      <Space className={classes} style={style} {...otherProps}>
        {this.renderVisible(visible)}
        {this.renderCollapse(collapse)}
      </Space>
    );
  }
}
