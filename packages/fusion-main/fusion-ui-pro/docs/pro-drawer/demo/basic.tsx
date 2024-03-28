import React, { Component } from 'react';
import { ProDrawer } from '@alifd/fusion-ui';

export default { title: 'ProDrawer' };

export const Basic = () => {
  return (
    <div>
      <ProDrawer
        id="prodrawer-basic"
        visible={true}
        title="Welcome to Alibaba.com"
        operationConfig={{ align: 'right' }}
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
        onOk={() => {
          console.log('ok');
        }}
        onCancel={() => {
          console.log('cancel');
        }}
        onClose={() => {
          console.log('close');
        }}
      >
        Start your business here by searching a popular product
      </ProDrawer>
    </div>
  );
};

Basic.storyName = '基本用法';
Basic.desc = 'ProDrawer 的基础用法，演示自己控制数据的用法。`code`试一下能不能用';
