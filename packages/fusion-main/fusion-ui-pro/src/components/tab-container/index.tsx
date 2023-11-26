import * as React from 'react';
import cx from 'classnames';
import { Tab } from '@alifd/next';

export interface ITabContainerProps extends React.ComponentProps<typeof Tab> {
  className?: string;
}

export const TabContainer = (props: ITabContainerProps) => {
  const { className, ...restProps } = props;

  return <Tab className={cx(className, 'fusion-ui-tab')} {...restProps} />;
};

TabContainer.Item = Tab.Item;
