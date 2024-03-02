import React, { CSSProperties } from 'react';

interface RichTextProp {
  className?: string;
  nodes: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}
const RichText = ({ className = '', style, nodes, ...other }: RichTextProp) => {
  console.log('RichText: ', nodes);
  return (
    <div className={className} style={style} {...other}>
      <div dangerouslySetInnerHTML={{ __html: nodes }} />
    </div>
  );
};
export default RichText;
