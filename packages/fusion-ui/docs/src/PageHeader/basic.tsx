import React from 'react';
import { PageHeader } from '@alifd/fusion-ui';

export default () => {
  return (
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
  );
};
