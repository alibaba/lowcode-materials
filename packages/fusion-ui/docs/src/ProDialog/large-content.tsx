import React from 'react';
import { ProDialog } from '@alifd/fusion-ui';
import { Button, Typography } from '@alifd/next';

const { H4 } = Typography;

export default () => {
  const dialogRef = React.useRef();

  const largeContent = new Array(60)
    .fill()
    .map((_, index) => (
      <H4 key={index}>Start your business here by searching a popular product</H4>
    ));
  return (
    <div>
      <Button
        onClick={function() {
          dialogRef?.current?.show();
        }}
      >
        长文本
      </Button>
      <ProDialog
        id="prodialog-basic"
        ref={dialogRef}
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
        {largeContent}
      </ProDialog>
    </div>
  );
};
