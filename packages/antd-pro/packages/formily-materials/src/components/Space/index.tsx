import * as React from 'react';
import { createElement } from 'react';
import { Space } from '@formily/antd';
import { IFormItemProps, createVoidSchemaComponent, useCurrentNode } from '../../shared';

const PreviewSpace: React.FC<any> = (props) => {
  const node = useCurrentNode(props);

  if (node.children.size === 0) {
    return <div {...props}>{props.children}</div>;
  } else {
    return <Space {...props} />;
  }
};

const AdvancedSpace: React.FC<any> = (props) => {
  if (props.__designMode === 'design') {
    return <PreviewSpace {...props} />;
  }

  return <Space {...props} />;
};

const FormilySpace: React.FC<IFormItemProps> = createVoidSchemaComponent({
  componentName: 'Space',
  component: AdvancedSpace,
});

export default FormilySpace;
