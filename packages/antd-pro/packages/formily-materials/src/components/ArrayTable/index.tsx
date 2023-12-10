import * as React from 'react';
import { createElement } from 'react';
import { ArrayTable } from '@formily/antd';
import { useForm } from '@formily/react';
import { Alert } from 'antd';
import {
  syncUI,
  IFormItemProps,
  useSchema,
  useSchemaField,
  reactNode2SchemaV2,
  getComponentNamesSet,
  mergeItems,
  mergeProperties,
} from '../../shared';
import { ArrayTablePreview } from './preview';

const FormilyArrayTable: React.FC<IFormItemProps> & {
  Column?: any;
  SortHandle?: any;
  Index?: any;
  Operation?: any;
  Addition?: any;
} = syncUI((props) => {
  const form = useForm();

  if (!form) {
    return <Alert message="formily component can only be used in formily form" type="error" />;
  }

  if (props.__designMode === 'design') {
    return <ArrayTablePreview {...props} />;
  }

  const { name } = props.fieldProps;

  const children = props.__origin_child || props.children;

  const componentNamesSet = getComponentNamesSet(children, 2);

  const columns = reactNode2SchemaV2(children, ['FormilyArrayTable.Column']);
  const index = reactNode2SchemaV2(children, ['FormilyArrayTable.Index']);
  const sortHandle = reactNode2SchemaV2(children, ['FormilyArrayTable.SortHandle']);
  const operation = reactNode2SchemaV2(children, ['FormilyArrayTable.Operation']);
  const addition = reactNode2SchemaV2(children, ['FormilyArrayTable.Addition']);

  const schema = useSchema(props, {
    'x-component': 'ArrayTable',
  });

  let xIndex = 0;

  if (sortHandle.outerSchemas.length > 0) {
    const id = sortHandle.innerSchemaMap.get(sortHandle.innerSchemas[0]);

    mergeItems(schema.properties[name], {
      [id]: {
        type: 'void',
        'x-component': 'ArrayTable.Column',
        'x-component-props': {
          title: 'Sort',
        },
        properties: {
          [`${id}_sort`]: {
            type: 'void',
            'x-component': 'ArrayTable.SortHandle',
            'x-index': 0,
          },
        },
        'x-index': xIndex++,
      },
    });
  }

  if (index.outerSchemas.length > 0) {
    const id = index.innerSchemaMap.get(index.innerSchemas[0]);

    mergeItems(schema.properties[name], {
      [id]: {
        type: 'void',
        'x-component': 'ArrayTable.Column',
        'x-component-props': {
          title: 'Index',
        },
        properties: {
          [`${id}_index`]: {
            type: 'void',
            'x-component': 'ArrayTable.Index',
            'x-index': 0,
          },
        },
        'x-index': xIndex++,
      },
    });
  }

  if (columns.outerSchemas.length > 0) {
    mergeItems(schema.properties[name], {
      ...columns.outerSchemas.reduce((prev, item) => {
        const itemName = Object.keys(item)[0];
        const itemSchema = item[itemName];

        prev[itemName] = {
          type: 'void',
          'x-component': 'ArrayTable.Column',
          'x-component-props': {
            title: itemSchema?.['x-component-props']?.title || 'title',
          },
          properties: {
            ...reactNode2SchemaV2(itemSchema?.['x-component-props']?.children).outerSchema,
          },
          'x-index': xIndex++,
        };

        return prev;
      }, {}),
    });
  }

  if (operation.outerSchemas.length > 0) {
    const id = operation.innerSchemaMap.get(operation.innerSchemas[0]);

    mergeItems(schema.properties[name], {
      [id]: {
        type: 'void',
        'x-component': 'ArrayTable.Column',
        'x-component-props': {
          title: 'Operation',
        },
        properties: {
          [`${id}_remove`]: {
            type: 'void',
            'x-component': 'ArrayTable.Remove',
            'x-index': 0,
          },
          [`${id}_down`]: {
            type: 'void',
            'x-component': 'ArrayTable.MoveDown',
            'x-index': 1,
          },
          [`${id}_up`]: {
            type: 'void',
            'x-component': 'ArrayTable.MoveUp',
            'x-index': 2,
          },
        },
        'x-index': xIndex++,
      },
    });
  }

  if (addition.outerSchemas.length > 0) {
    const id = addition.innerSchemaMap.get(addition.innerSchemas[0]);

    mergeProperties(schema.properties[name], {
      [id]: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayTable.Addition',
        'x-index': 0,
      },
    });
  }

  componentNamesSet.add('ArrayTable');

  const SchemaField = useSchemaField(componentNamesSet, { ArrayTable });

  return <SchemaField schema={schema} />;
});

const Temp: React.FC = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

FormilyArrayTable.Column = Temp;

FormilyArrayTable.SortHandle = Temp;

FormilyArrayTable.Index = Temp;

FormilyArrayTable.Operation = Temp;

FormilyArrayTable.Addition = Temp;

export default FormilyArrayTable;
