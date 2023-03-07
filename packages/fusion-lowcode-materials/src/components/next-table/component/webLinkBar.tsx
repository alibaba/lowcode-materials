import React from 'react';
import isFunction from "lodash/isFunction";
import type { IAction } from './webToolbar';

export interface IWebLinkBarProps {
  nextTablePrefix?: string;
  onActionClick?: (item: IAction, index: number) => void;
  linkBar?: IAction[];
}

export default class WebLinkBar extends React.Component<IWebLinkBarProps> {
  renderActionButton(item: IAction, index: number) {
    const { nextTablePrefix, onActionClick } = this.props;

    let content;
    const itemProps = {
      onClick: () => {
        onActionClick && onActionClick(item, index);
      },
    };

    if (item.render && isFunction(item.render)) {
      content = (
        <div className={`${nextTablePrefix}link-div`} {...itemProps}>
          {item.render(item.title)}
        </div>
      );
    } else {
      content = (
        <a className={`${nextTablePrefix}link-a`} {...itemProps}>
          {item.title}
        </a>
      );
    }

    return (
      <div className={`${nextTablePrefix}link-item`} key={index}>
        {content}
        {index === 0 ? null : <div className={`${nextTablePrefix}link-sp`} />}
      </div>
    );
  }

  render() {
    const { nextTablePrefix, linkBar = [] } = this.props;

    return (
      <div className={`${nextTablePrefix}link-wrap`}>
        {linkBar.slice(0).reverse().map((link, index) => {
          return link ? this.renderActionButton(link, index) : null;
        })}
      </div>
    );
  }
}
