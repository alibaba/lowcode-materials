import React from 'react';

interface BlockProp {
  children?: React.ReactElement;
}
const Block = (props: BlockProp) => {
  return <>{props.children}</>;
};
export default Block;
