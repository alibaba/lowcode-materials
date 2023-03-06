import React, { MouseEvent } from 'react';

interface IImageRenderColumn {
  imageProps?: React.CSSProperties & { onClick?(e: MouseEvent<HTMLImageElement>, column: IImageRenderColumn, rowData: any): void };
  imageWrapProps?: React.CSSProperties;
}

export default function ImageRender(value: string, column: IImageRenderColumn, rowData: any) {
  if (!value || typeof value !== 'string') {
    return <div style={{ color: '#F04631' }}>数据格式不合规，请返回字符串形式！</div>
  }
  const imageProps = column.imageProps || {
    width: 80,
    height: 80,
    borderRadius: 4
  }
  const imageWrapProps = column.imageWrapProps || {
    display: 'inline-block',
    padding: 4,
    background: '#eee',
    borderRadius: 4,
    height: 88,
    width: 88
  }
  const { onClick, width } = imageProps
  const renderImageProps = {
    src: value,
    width: width,
    style: { ...imageProps },
    onClick: (e: MouseEvent<HTMLImageElement>) => {
      if (onClick && typeof onClick === 'function') {
        onClick(e, column, rowData)
        e.stopPropagation()
      }
    }
  };

  return (
    <i style={{ ...imageWrapProps }}>
      <img {...renderImageProps} />
    </i>
  )
};
