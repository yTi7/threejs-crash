"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Sphere = () => {
  const object = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    object.current.rotation.y += 0.001;
    object.current.rotation.x += 0.001;
  });

  return (
    <>
      <mesh ref={object} receiveShadow>
        <boxGeometry args={[]} />
        <meshStandardMaterial color="pink" metalness={1} roughness={0.5} />
        <mesh castShadow={true}>
          <boxGeometry args={[1.05, 1.05, 1.05, 2, 2, 2]} />
          <meshStandardMaterial color="pink" wireframe />
        </mesh>
      </mesh>
    </>
  );
};

export default Sphere;
