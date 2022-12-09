import React from 'react';
import { ProDialog } from '@alifd/fusion-ui';
import { Button } from '@alifd/next';

export default () => {
  const dialogRef = React.useRef();

  return (
    <div>
      <Button
        onClick={function() {
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
