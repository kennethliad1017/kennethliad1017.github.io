/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        steamdeck_screen: THREE.Mesh;
    };
    materials: {};
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("assets/models/steamdeck_screen.glb") as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.steamdeck_screen.geometry}
                material={new THREE.MeshPhysicalMaterial({
                    color: 0xFF121212,
                    specularIntensity: 0.5,
                    roughness: 0.086364,
                    emissiveIntensity: 20.0,
                })}
                position={[-0.001, 0.088, -0.028]}
                rotation={[0, 0.185, 0]}
                scale={0.001}
            />
        </group>
    );
}

useGLTF.preload("assets/models/steamdeck_screen.glb");
