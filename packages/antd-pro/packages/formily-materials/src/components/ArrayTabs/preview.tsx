import * as React from 'react';
import { createElement } from 'react';
import { Tabs } from 'antd';

export const ArrayTabsPreview: React.FC<any> = (props) => {
  const { fieldProps, componentProps } = props;

  const badgedTab = (index: number) => {
    const tab = `${fieldProps.title || 'Untitled'} ${index + 1}`;
    return tab;
  };

  return (
    <React.Fragment>
      <Tabs type="editable-card" {...componentProps?.['x-component-props']}>
        <Tabs.TabPane key="0" tab={badgedTab(0)}>
          {props.children}
        </Tabs.TabPane>
      </Tabs>
    </React.Fragment>
  );
};
