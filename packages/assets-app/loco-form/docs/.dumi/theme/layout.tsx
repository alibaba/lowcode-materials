import React from 'react';
import Layout from 'dumi-theme-default/es/layout';

import '@/index.scss';
import '@alifd/theme-2/dist/next.min.css';

export default ({ children, ...props }) => {
  return <Layout {...props}>{children}</Layout>;
};
