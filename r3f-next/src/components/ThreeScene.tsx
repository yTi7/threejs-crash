"use client";
import { Canvas } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stats,
  useHelper,
} from "@react-three/drei";
import Sphere from "@/components/Cube";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

const DirectionalLightComponent = () => {
  const dirLight = useRef<DirectionalLight>(null!);
  useHelper(dirLight, DirectionalLightHelper, 1, "white");
  return (
    <directionalLight
      position={[0, 3, 3]}
      intensity={4}
      castShadow={true}
      shadow-mapSize-width={4000}
      shadow-mapSize-height={4000}
      ref={dirLight}
    />
  );
}

const ThreeScene = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.2} />
      <DirectionalLightComponent />
      <Sphere />
      <OrbitControls makeDefault />
      <Stats />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport />
      </GizmoHelper>
    </Canvas>
  );
};

export default ThreeScene;
