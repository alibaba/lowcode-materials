import { createElement } from 'react';

function Box(props) {
  return (
    <mesh
      {...props}
    >
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box;


