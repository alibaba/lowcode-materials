import * as React from 'react';
import { createElement } from 'react';
import { Input } from '@alifd/next';
import { bizCssPrefix } from '../../variables';

import SchemaBuilder from '@xrenders/schema-builder';

export interface SchemaBuilderProps {
  color?: string;
  style?: object;
  releaseOnClick:(schema) => void;
  saveOnClick:(schema) => void;

}

const SchemaBuilderObj: React.FC<SchemaBuilderProps> = function ColorfulInput({
  color,
  style = {},
  releaseOnClick,
  saveOnClick,
  ...otherProps
}) {




    const releasebtn = {
        text:'发布',
        order:1,
        onClick:releaseOnClick
    }



    const saveBtn = {
        text:'保存',
        order:1,
        onClick:saveOnClick
    }



  return (
    <div style={{ height: '100vh' }}>
    <SchemaBuilder  {...otherProps}   pubBtn={releasebtn} saveBtn={saveBtn} />
  </div>

  );
};

export default SchemaBuilderObj;
