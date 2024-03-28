import React, { Component } from 'react';
import { TabContainer } from '@alifd/fusion-ui';

export default { title: 'TabContainer' };

const props = {
  shape: 'pure',
  size: 'medium',
  excessMode: 'slide',
};

export const Basic = () => {
  return (
    <div>
      <TabContainer {...props}>
        <TabContainer.Item title="选项卡1">内容1</TabContainer.Item>
        <TabContainer.Item title="选项卡2">内容2</TabContainer.Item>
        <TabContainer.Item title="选项卡3">内容4</TabContainer.Item>
      </TabContainer>
    </div>
  );
};

Basic.storyName = '基本用法';
Basic.desc = 'TabContainer 的基础用法，演示自己控制数据的用法。`code`试一下能不能用';
