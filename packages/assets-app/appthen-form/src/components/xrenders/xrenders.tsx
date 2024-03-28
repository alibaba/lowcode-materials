import * as React from 'react';
import { createElement } from 'react';
import { Input } from '@alifd/next';
import { bizCssPrefix } from '../../variables';

import SchemaBuilder from '@xrenders/schema-builder';

export interface SchemaBuilderProps {
  color?: string;
  style?: object;
  heightData?:string;
  releaseOnClick:(schema) => void;
  saveOnClick:(schema) => void;

}

const SchemaBuilderObj: React.FC<SchemaBuilderProps> = function ColorfulInput({
  color,
  style = {},
  heightData,
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
    <div style={{ height:heightData }}>
    <SchemaBuilder  {...otherProps}   pubBtn={releasebtn} saveBtn={saveBtn} />
  </div>

  );
};

export default SchemaBuilderObj;
