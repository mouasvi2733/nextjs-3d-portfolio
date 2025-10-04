'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function RoomModel() {
  const { scene } = useGLTF('/room/scene.gltf');
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function Experience() {
  return (
    <Canvas 
      camera={{ position: [5, 4, 5], fov: 50 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      <RoomModel />
      
      <OrbitControls />
    </Canvas>
  );
}