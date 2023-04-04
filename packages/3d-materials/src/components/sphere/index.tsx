import { createElement  } from 'react';

import { Color } from 'three'

function Sphere(props) {

  const { color } = props || {};

  return (
    <mesh
      {...props}
      // scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry  />
      <meshStandardMaterial color={new Color(color)} />
    </mesh>
  )
}

export default Sphere;


