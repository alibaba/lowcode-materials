import React, { useState } from 'react';
import { ProDialog } from '@alifd/fusion-ui';
import { Button } from '@alifd/next';

export default { title: 'ProDialog' };

export const Basic = () => {
  const dialogRef = React.useRef();

  return (
    <div>
      <Button
        onClick={function () {
          dialogRef?.current?.show();
        }}
      >
        点我
      </Button>
      <ProDialog
        ref={dialogRef}
        id="prodialog-basic"
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
      </ProDialog>
    </div>
  );
};

Basic.storyName = '基本用法';
Basic.desc = 'ProDialog 的基础用法，演示自己控制数据的用法。`code`试一下能不能用';
