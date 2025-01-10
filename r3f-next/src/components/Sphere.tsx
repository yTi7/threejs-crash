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
        <sphereGeometry args={[, 32, 16]} />
        <meshStandardMaterial color="pink" metalness={1} roughness={0.5} />
        <mesh castShadow={true}>
          <sphereGeometry args={[1.05]} />
          <meshStandardMaterial color="pink" wireframe />
        </mesh>
      </mesh>
    </>
  );
};

export default Sphere;
