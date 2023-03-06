import React from 'react';
import isFunction from "lodash/isFunction";
import type { IAction } from './webToolbar';

export interface IWebLinkBarProps {
  deepTablePrefix?: string;
  onActionClick?: (item: IAction, index: number) => void;
  linkBar?: IAction[];
}

export default class WebLinkBar extends React.Component<IWebLinkBarProps> {
  renderActionButton(item: IAction, index: number) {
    const { deepTablePrefix, onActionClick } = this.props;

    let content;
    const itemProps = {
      onClick: () => {
        onActionClick && onActionClick(item, index);
      },
    };

    if (item.render && isFunction(item.render)) {
      content = (
        <div className={`${deepTablePrefix}link-div`} {...itemProps}>
          {item.render(item.title)}
        </div>
      );
    } else {
      content = (
        <a className={`${deepTablePrefix}link-a`} {...itemProps}>
          {item.title}
        </a>
      );
    }

    return (
      <div className={`${deepTablePrefix}link-item`} key={index}>
        {content}
        {index === 0 ? null : <div className={`${deepTablePrefix}link-sp`} />}
      </div>
    );
  }

  render() {
    const { deepTablePrefix, linkBar = [] } = this.props;

    return (
      <div className={`${deepTablePrefix}link-wrap`}>
        {linkBar.slice(0).reverse().map((link, index) => {
          return link ? this.renderActionButton(link, index) : null;
        })}
      </div>
    );
  }
}
