import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

export default function InteractiveScene() {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <mesh ref={sphereRef}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial 
            color="#a855f7"
            wireframe
            transparent
            opacity={0.5}
          />
        </Sphere>
      </mesh>
    </>
  );
} 