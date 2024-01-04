import React from 'react';

interface TextProp {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Text = (props: TextProp) => {
  return <span {...props}>{props.children}</span>;
};
export default Text;
