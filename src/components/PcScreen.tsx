/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/assets/models/pcScreen.glb --shadows --types 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import useTextureLoad from "@/hooks/useTextureLoad";

type GLTFResult = GLTF & {
  nodes: {
    monitor_screen: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('assets/models/pcScreen.glb') as GLTFResult;
  const screenTexture = useTextureLoad("/images/computer_screen_codes.jpg")
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.monitor_screen.geometry} material={new THREE.MeshStandardMaterial({
        map: screenTexture,
        emissiveMap: screenTexture,
        emissiveIntensity: 20,
        flatShading: true,

      })} position={[0, 0.359, -0.016]} />
    </group>
  )
}

useGLTF.preload('assets/models/pcScreen.glb')
