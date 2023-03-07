import React from 'react';

export default function fileRender(value: {name?: string; url?: string}[]) {
  if (!value) {
    return '';
  }
  if (!value.length || !value.splice) {
    return <div style={{ color: '#F04631' }}>数据格式不合规，请返回数组形式！</div>
  }
  return value.map(file => {
    return (
      <a
        key={file.name}
        style={{ display: 'inline-block', margin: '0 5px' }}
        title={file.name}
        className="overflow-hidden-cell"
        href={file.url}
      >
        {file.name}
      </a>
    )
  })
};
