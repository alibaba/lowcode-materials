import React from 'react';
import { TabContainer } from '@alifd/fusion-ui';

const props = {
  shape: 'pure',
  size: 'medium',
  excessMode: 'slide',
};

export default () => {
  return (
    <div>
      <TabContainer {...props}>
        <TabContainer.Item title="选项卡1">内容1</TabContainer.Item>
        <TabContainer.Item title="选项卡2">内容2</TabContainer.Item>
        <TabContainer.Item title="选项卡3">内容3</TabContainer.Item>
      </TabContainer>
    </div>
  );
};
