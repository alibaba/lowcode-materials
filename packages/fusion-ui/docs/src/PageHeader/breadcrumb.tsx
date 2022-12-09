import React from 'react';
import { PageHeader } from '@alifd/fusion-ui';
import { Breadcrumb } from '@alifd/next';

export default () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Title"
      breadcrumb={
        <Breadcrumb>
          <Breadcrumb.Item>1</Breadcrumb.Item>
          <Breadcrumb.Item>2</Breadcrumb.Item>
          <Breadcrumb.Item>3</Breadcrumb.Item>
        </Breadcrumb>
      }
      subTitle="This is a subtitle"
    />
  );
};
