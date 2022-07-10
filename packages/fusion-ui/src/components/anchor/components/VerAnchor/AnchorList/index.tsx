import React from 'react';
import { AnchorLink, AnchorLinkProps } from './AnchorLink';
import { LinkItemData } from '../../../index';

interface AnchorListProps {
  value: string;
  dataSource: LinkItemData[];
  onSelect: (htmlId) => void;
}

interface AnchorTocState {
  menuList: AnchorLinkProps[];
}

/**
 * 将原本的嵌套 dataSource 转换为扁平
 * 并直接将 focus 状态等计算好附加上
 * @param menuList 目标扁平列表，直接做修改
 * @param props 组件属性
 * @param level 锚点嵌套等级
 */
const renderMenu = (menuList, props, level: number) => {
  const { onSelect, dataSource, value } = props;
  dataSource.forEach((item) => {
    const isFocus = value === item.htmlId;
    menuList.push({
      level,
      label: item.label,
      htmlId: item.htmlId,
      isFocus,
      onSelect,
    });

    if (Array.isArray(item.children)) {
      renderMenu(menuList, { ...props, dataSource: item.children }, level + 1);
    }
  });
};

export class AnchorList extends React.Component<AnchorListProps, AnchorTocState> {
  static displayName = 'AnchorList';

  static defaultProps = {
    dataSource: [],
  };

  static getDerivedStateFromProps = (nextProps) => {
    const menuList = [];
    renderMenu(menuList, nextProps, 1);
    return {
      menuList,
    };
  };

  constructor(props) {
    super(props);
    const initialMenuList = [];
    renderMenu(initialMenuList, props, 1);
    this.state = {
      menuList: initialMenuList,
    };
  }

  render() {
    const { menuList } = this.state;
    const firstFocusIdx = menuList.findIndex((item) => item.isFocus);
    return (
      <div className="fusion-ui-anchor-ver-menu">
        <div
          className="fusion-ui-anchor-ver-menu-header"
          style={{
            top: firstFocusIdx * 2 * 16 + 16,
            display: firstFocusIdx === -1 ? 'none' : 'block',
          }}
        />
        <div className="fusion-ui-anchor-ver-menu-footer">
          {menuList.map((item) => (
            <AnchorLink key={`${item.label}-${item.htmlId}`} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
