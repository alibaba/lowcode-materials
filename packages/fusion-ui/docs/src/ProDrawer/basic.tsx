import React, { useRef } from 'react';
import { ProDrawer } from '@alifd/fusion-ui';
import { Button } from '@alifd/next';

export default () => {
  const drawerRef = useRef();

  const handleChangeVis = () => {
    drawerRef?.current?.show();
  };

  return (
    <div>
      <Button onClick={handleChangeVis}>点我</Button>
      <ProDrawer
        id="prodrawer-basic"
        ref={drawerRef}
        visible
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
