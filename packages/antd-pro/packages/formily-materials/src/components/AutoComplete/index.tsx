import * as React from 'react';
import { createElement } from 'react';
import { AutoComplete, AutoCompleteProps } from 'antd';
import { IFormItemProps } from '../../shared';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { createSchemaComponent } from '../../shared';
import { LoadingOutlined } from '@ant-design/icons';
import { PreviewText } from '@formily/antd';

export const MapedAutoComplete: React.FC<AutoCompleteProps<any, any>> = connect(
  AutoComplete,
  mapProps(
    {
      dataSource: 'options',
      loading: true,
    },
    (props, field) => {
      return {
        ...props,
        suffixIcon:
          field?.['loading'] || field?.['validating'] ? <LoadingOutlined /> : props.suffixIcon,
      };
    },
  ),
  mapReadPretty(PreviewText.Select),
);

const FormilyAutoComplete: React.FC<IFormItemProps> = createSchemaComponent({
  componentName: 'AutoComplete',
  component: MapedAutoComplete,
});

export default FormilyAutoComplete;
