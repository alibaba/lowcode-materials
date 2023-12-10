import * as React from 'react';
import { createElement, useState } from 'react';
import { Table } from 'antd';
import { ArrayBase } from '@formily/antd';
import { observer, VoidField } from '@formily/react';
import {
  useCurrentDocument,
  useCurrentNode,
  queryNodesByComponentPath,
  hasNodeByComponentPath,
} from './hooks';
import { uuid } from '../../shared';

const HeaderCell: React.FC = (props: any) => {
  return (
    <th {...props} data-designer-node-id={props.className.match(/data-id\:([^\s]+)/)?.[1]}>
      {props.children}
    </th>
  );
};

const BodyCell: React.FC = (props: any) => {
  return (
    <td {...props} data-designer-node-id={props.className.match(/data-id\:([^\s]+)/)?.[1]}>
      {props.children}
    </td>
  );
};

export const ArrayTablePreview: React.FC<any> = observer((props) => {
  const { columns, children, ...extra } = props;
  const [defaultName] = useState(uuid());

  const { componentId } = extra;

  const currentNode = useCurrentNode(componentId);

  const currentDocument = useCurrentDocument();

  const columnsNodes = queryNodesByComponentPath(currentNode, [
    'FormilyArrayTable',
    'FormilyArrayTable.Column',
  ]);

  const indexNodes = queryNodesByComponentPath(currentNode, [
    'FormilyArrayTable',
    'FormilyArrayTable.Index',
  ]);

  const sortNodes = queryNodesByComponentPath(currentNode, [
    'FormilyArrayTable',
    'FormilyArrayTable.SortHandle',
  ]);

  const operationNodes = queryNodesByComponentPath(currentNode, [
    'FormilyArrayTable',
    'FormilyArrayTable.Operation',
  ]);

  const additionNodes = queryNodesByComponentPath(currentNode, [
    'FormilyArrayTable',
    'FormilyArrayTable.Addition',
  ]);

  const renderTable = () => {
    if (currentNode.children.size === 0) {
      return <div>Empty</div>;
    }

    return (
      <VoidField name={props.fieldProps.name || defaultName}>
        <ArrayBase disabled>
          <Table
            size="small"
            bordered
            {...extra}
            scroll={{ x: '100%' }}
            style={{ marginBottom: 10, ...props.style }}
            rowKey={'id'}
            dataSource={[{ id: '1' }]}
            pagination={false}
            components={{
              header: {
                cell: HeaderCell,
              },
              body: {
                cell: BodyCell,
              },
            }}
          >
            {sortNodes.length > 0 &&
              sortNodes.map((_, index) => {
                return (
                  <React.Fragment key={index}>
                    {React.createElement(Table.Column, {
                      title: 'Sort',
                      render: () => {
                        return <ArrayBase.SortHandle />;
                      },
                    })}
                  </React.Fragment>
                );
              })}

            {indexNodes.length > 0 &&
              indexNodes.map((_, index) => {
                return (
                  <React.Fragment key={index}>
                    {React.createElement(Table.Column, {
                      title: 'Index',
                      render: () => {
                        return <ArrayBase.Index />;
                      },
                    })}
                  </React.Fragment>
                );
              })}

            {columnsNodes.length > 0 &&
              React.Children.map(children, (child) => {
                if (child.props._componentName !== 'FormilyArrayTable.Column') {
                  return null;
                }

                return (
                  <React.Fragment>
                    {React.createElement(Table.Column, {
                      title: child?.props?.title || 'title',
                      render: () => {
                        return <div>{child}</div>;
                      },
                    })}
                  </React.Fragment>
                );
              })}

            {operationNodes.length > 0 &&
              operationNodes.map((_, index) => {
                return (
                  <React.Fragment key={index}>
                    {React.createElement(Table.Column, {
                      title: 'Operation',
                      render: () => {
                        return (
                          <React.Fragment>
                            <ArrayBase.Remove />
                            <ArrayBase.MoveDown />
                            <ArrayBase.MoveUp />
                          </React.Fragment>
                        );
                      },
                    })}
                  </React.Fragment>
                );
              })}
          </Table>

          {additionNodes.length > 0 &&
            additionNodes.map((_, index) => {
              return <React.Fragment key={index}>{<ArrayBase.Addition />}</React.Fragment>;
            })}
        </ArrayBase>
      </VoidField>
    );
  };

  return (
    <React.Fragment>
      {renderTable()}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            if (
              hasNodeByComponentPath(currentNode, [
                'FormilyArrayTable',
                'FormilyArrayTable.SortHandle',
              ])
            ) {
              return;
            }
            const newNode = currentDocument.createNode({
              componentName: 'FormilyArrayTable.SortHandle',
            });
            currentNode.insertAfter(newNode);

            newNode.select();
          }}
        >
          添加排序
        </button>

        <button
          onClick={() => {
            if (
              hasNodeByComponentPath(currentNode, ['FormilyArrayTable', 'FormilyArrayTable.Index'])
            ) {
              return;
            }
            const newNode = currentDocument.createNode({
              componentName: 'FormilyArrayTable.Index',
            });
            currentNode.insertAfter(newNode);

            newNode.select();
          }}
        >
          添加索引
        </button>

        <button
          onClick={() => {
            const newNode = currentDocument.createNode({
              componentName: 'FormilyArrayTable.Column',
            });
            currentNode.insertAfter(newNode);
            newNode.select();
          }}
        >
          添加列
        </button>

        <button
          onClick={() => {
            if (
              hasNodeByComponentPath(currentNode, [
                'FormilyArrayTable',
                'FormilyArrayTable.Operation',
              ])
            ) {
              return;
            }
            const newNode = currentDocument.createNode({
              componentName: 'FormilyArrayTable.Operation',
            });
            currentNode.insertAfter(newNode);

            newNode.select();
          }}
        >
          添加操作
        </button>

        <button
          onClick={() => {
            if (
              hasNodeByComponentPath(currentNode, [
                'FormilyArrayTable',
                'FormilyArrayTable.Addition',
              ])
            ) {
              return;
            }
            const newNode = currentDocument.createNode({
              componentName: 'FormilyArrayTable.Addition',
            });
            currentNode.insertAfter(newNode);

            newNode.select();
          }}
        >
          新增操作
        </button>
      </div>
    </React.Fragment>
  );
});

ArrayBase.mixin(ArrayTablePreview);
