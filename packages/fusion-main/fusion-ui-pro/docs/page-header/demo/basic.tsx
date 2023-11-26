import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from '@alifd/fusion-ui';

export default { title: 'PageHeader' };

export const Basic = () => {
  return (
    <div>
      basic demo
      <PageHeader
        className="site-page-header"
        title="Title"
        subTitle="This is a subtitle"
        operations={[
          {
            action: 'ok',
            type: 'primary',
            content: '确认',
          },
          {
            action: 'cancel',
            type: 'normal',
            content: '取消',
          },
        ]}
      />
    </div>
  );
};

Basic.storyName = '基本用法';
Basic.desc = 'PageHeader 的基础用法，演示自己控制数据的用法。`code`试一下能不能用';
