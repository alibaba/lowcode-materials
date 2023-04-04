import { createElement  } from 'react';
import { Color } from 'three'
import { useGLTF } from '@react-three/drei'

function Ferrari(props) {

  const { color } = props || {};
  const gltf = useGLTF('/public/ferrari.glb')
  const { scene } = gltf;

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  })

  return (
    <mesh
      {...props}
      // scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Ferrari;


