import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from '@alifd/fusion-ui';
import { Breadcrumb } from '@alifd/next';

export default { title: 'PageHeader' };

export const BreadcrumbDemo = () => {
  return (
    <div>
      breadcrumb demo
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
    </div>
  );
};

BreadcrumbDemo.storyName = '面包屑用法';
BreadcrumbDemo.desc = 'PageHeader 的受控用法，演示自己控制数据的用法。`code`试一下能不能用';
