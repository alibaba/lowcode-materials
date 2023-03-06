import React, { ReactNode } from "react";
import classnames from 'classnames';
import { Button, MenuButton } from '@alifd/next';
import actionTitleRender from "../utils/render/actionTitleRender";
import runColumnActionCallback from "../utils/runColumnActionCallback";
import filterActionColumn from "../utils/filterActionColumn";
import dispatchResizeEvent from "../utils/dispatchResizeEvent";

const { Item } = MenuButton;

export interface IActionColumnItem {
  title: string;
  callback?: (rowData: any, action: IActionColumnItem, index?: number) => void;
  device?: string[];
  mode?: string;
  render?: (title: IActionColumnItem['title'], rowData: any) => ReactNode;
}

export interface IWebNextTableActionCellProps {
  actionColumn?: IActionColumnItem[];
  actionType?: string;
  maxWebShownActionCount?: number;
  deepTablePrefix?: string;
  rowData?: any;
  device?: string;
  index?: number;
  locale?: {
    [prop: string]: string;
  }
}

export default class WebNextTableActionCell extends React.Component<IWebNextTableActionCellProps> {
  refreshCellUI() {
    this.forceUpdate(() => {
      dispatchResizeEvent();
    });
  }
  componentDidMount() {
    setTimeout(() => {
      dispatchResizeEvent()
    }, 400)
  }

  render() {
    const { actionColumn, actionType, maxWebShownActionCount = 3, deepTablePrefix, rowData, device, index, locale = {} } = this.props;
    const currentActionColumn = filterActionColumn(actionColumn, rowData, device);
    const showMoreAction = currentActionColumn.length > maxWebShownActionCount;
    const actionColumnToRender = currentActionColumn.slice(0, (showMoreAction ? maxWebShownActionCount - 1 : undefined));
    const remainActions = currentActionColumn.slice(maxWebShownActionCount - 1);
    const isLink = actionType === 'link';

    const menu = remainActions.map((action) => {
      const render = actionTitleRender(action, rowData)
      return render ? <Item key={action.title}>{render}</Item> : null;
    }).filter(i => i !== null);

    return (<div className={`${deepTablePrefix}action-cell`}>
      {
        actionColumnToRender.map((action) => {
          const render = actionTitleRender(action, rowData)
          return (
            render ? <Button
              key={action.title}
              className={classnames(isLink ? `${deepTablePrefix}action-link` : `${deepTablePrefix}action-button`)}
              text={isLink} type={isLink ? 'primary' : 'secondary'}
              onClick={(e) => {
                e.stopPropagation();

                runColumnActionCallback({ index, rowData, action }).finally(() => {
                  this.refreshCellUI();
                });
              }}>
              {render}
            </Button> : null
          );
        })
      }

      {showMoreAction && menu.length ?
        <MenuButton
          text={isLink}
          className={classnames(`${deepTablePrefix}action-more`, isLink ? `${deepTablePrefix}action-link` : `${deepTablePrefix}action-button`)}
          type={isLink ? 'primary' : 'secondary'}
          popupTriggerType="hover"
          autoWidth={false}
          onItemClick={(i, item) => {
            const title = item.props.title;
            const action = remainActions.find((item) => {
              return item.title = title;
            });
            runColumnActionCallback({
              index,
              rowData,
              action: action!,
            }).finally(() => {
              this.refreshCellUI();
            });
          }}
          label={locale.more}
        >{menu}</MenuButton> : null}
    </div>);
  }
}
