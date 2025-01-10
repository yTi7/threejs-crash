"use client";
import { Canvas } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewcube,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import Sphere from "components/Sphere";

const ThreeScene = () => {
  return (
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
      <OrbitControls makeDefault />
      <Stats />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewcube />
      </GizmoHelper>
    </Canvas>
  );
};

export default ThreeScene;
