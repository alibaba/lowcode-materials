import React, { ReactNode, ReactElement } from 'react'
export default (children: ReactNode) => {
  const getColumns = (children: ReactNode) => {
    let columns: any = []
    const getCols = (children: ReactNode) => {
      React.Children.map(children, item => {
        const { props } = item as ReactElement;
        if (props.children && props.children.length) {
          columns.push({
            isGroup: true,
            title: props.align ? <div style={{textAlign: props.align}}>{props.title || ''}</div> : props.title || '',
            children: getColumns(props.children)
          })
        } else {
          columns.push({...props})
        }
      });
    }
    getCols(children)
    return columns;
  }
  return getColumns(children)
}