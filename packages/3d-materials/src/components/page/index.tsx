import React, { Suspense, useState, createElement } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, TransformControls, useCursor } from '@react-three/drei'

import './index.scss'

const modes = ['translate', 'rotate', 'scale']

function Page(props) {

  console.log('props: ', props)

  const { children, getNode, designMode } = props || {};
  const [ target, setTarget ] = useState();
  const [ hoverd, setHoverd ] = useState(false);
  const [ transformMode, setTransformMode ] = useState(0);
  useCursor(hoverd)
  const _children = [];

  React.Children.map(children, (child) => {
    if (child.type !== 'div') {
      const _child = React.cloneElement(child, {
        onClick: (event) => {
          console.log('event: ', event)
          let _target = event.object;
          while(_target.parent && !_target.componentId) {
            _target = _target.parent
          }
          const { componentId } = _target;
          const node = getNode(componentId);
          node.select()
          setTarget(_target)
        },
        onPointerOver: () => setHoverd(true),
        onPointerOut: () => setHoverd(false),
        onContextMenu: (e) => {
          e.stopPropagation();
          setTransformMode((transformMode + 1) % modes.length)
        },
        castShadow: true
      })
      _children.push(_child)
    }
  });

  return (
    <Canvas className='threeDPage' camera={{ position: [0, 12, 30], fov: 25 }} shadows onPointerMissed={() => setTarget(null)}>
      <Suspense fallback={null}>
        {
          _children
        }
      </Suspense>
      <mesh receiveShadow scale={[15, 15, 15]} rotation={[-Math.PI/2, 0, 0, 'XYZ']}>
        <planeGeometry />
        <meshStandardMaterial />
      </mesh>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} castShadow />
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
      { designMode === 'design' && target ? 
        <TransformControls object={target} mode={modes[transformMode]} onChange={() => {
          console.log('position: ', target.position)
          const { componentId } = target;
          const node = getNode(componentId);
          node.setPropValue('rotation', target.rotation.toArray())
          node.setPropValue('position', target.position.toArray())
          node.setPropValue('scale', target.scale.toArray())
        }} /> : 
        null 
      }
    </Canvas>
  );
};

export default Page;