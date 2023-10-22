/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/assets/models/macScreen.glb --shadows --types 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import useTextureLoad from "@/hooks/useTextureLoad";

type GLTFResult = GLTF & {
  nodes: {
    laptop_screen001: THREE.Mesh;
  };
  materials: {};
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "assets/models/macScreen.glb"
  ) as GLTFResult;

  const laptopScreenColorMap = useTextureLoad(
    "images/194-1942674_ipad-pro-wallpaper-2018.jpg"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.laptop_screen001.geometry}
        material={
          new THREE.MeshPhysicalMaterial({
            map: laptopScreenColorMap,
            // emissiveMap: laptopScreenColorMap,
            emissiveIntensity: 2.0,
          })
        }
        position={[0.674, 0.073, 0.082]}
        rotation={[1.318, -0.245, 0.754]}
        scale={0.143}
      />
    </group>
  );
}

useGLTF.preload("assets/models/macScreen.glb");