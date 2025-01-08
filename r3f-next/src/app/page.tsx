"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewcube,
  OrbitControls,
  Stats,
} from "@react-three/drei";
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
        <meshStandardMaterial color="hotpink" metalness={1} roughness={0.5} />
        <mesh castShadow={true}>
          <sphereGeometry args={[1.05]} />
          <meshStandardMaterial color="white" wireframe />
        </mesh>
      </mesh>
    </>
  );
};

export default function Home() {
  return (
    <>
      <main
        className={`font-geistMono h-screen flex justify-center items-center`}
      >
        <Canvas shadows>
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[5, 7, 10]}
            intensity={2}
            castShadow={true}
            shadow-mapSize-width={4000}
            shadow-mapSize-height={4000}
          />
          <Sphere />
          <OrbitControls makeDefault/>
          <Stats />
          <GizmoHelper
            alignment="bottom-right" // widget alignment within scene
            margin={[80, 80]} // widget margins (X, Y)
          >
            <GizmoViewcube />
          </GizmoHelper>
        </Canvas>
      </main>
    </>
  );
}
