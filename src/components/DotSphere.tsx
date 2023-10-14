"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

const SPHERE_RADIUS = 30;
const LATITUDE_COUNT = 8;
const DOT_DENSITY = 0.2;

const DOT_SIZE = 0.2;
const DOT_COLOR = 0x000000;

// Define the material for the dots.
const dotMaterial = new THREE.MeshBasicMaterial({
  color: DOT_COLOR,
  side: THREE.DoubleSide,
});

function DotSphere() {
  // Define an array to hold the geometries of all the dots.
  const [mergedDotGeometries, setMergedDotGeometries] =
    useState<THREE.BufferGeometry<THREE.NormalBufferAttributes>>();

  useEffect(() => {
    // Define an array to hold the geometries of all the dots.
    const dotGeometries = [];

    // Create a blank vector to be used by the dots.
    const vector = new THREE.Vector3();

    // Loop across the latitude lines.
    for (let lat = 0; lat < LATITUDE_COUNT; lat += 1) {
      // Calculate the radius of the latitude line.
      const radius =
        Math.cos((-90 + (180 / LATITUDE_COUNT) * lat) * (Math.PI / 180)) *
        SPHERE_RADIUS;
      // Calculate the circumference of the latitude line.
      const latitudeCircumference = radius * Math.PI * 2 * 2;
      // Calculate the number of dots required for the latitude line.
      const latitudeDotCount = Math.ceil(latitudeCircumference * DOT_DENSITY);

      // Loop across the dot count for the latitude line.
      for (let dot = 0; dot < latitudeDotCount; dot += 1) {
        const dotGeometry = new THREE.CircleGeometry(DOT_SIZE, 5);

        // Calculate the phi and theta angles for the dot.
        const phi = (Math.PI / LATITUDE_COUNT) * lat;
        const theta = ((2 * Math.PI) / latitudeDotCount) * dot;

        // Set the vector using the spherical coordinates generated from the sphere radius, phi and theta.
        vector.setFromSphericalCoords(SPHERE_RADIUS, phi, theta);

        // Make sure the dot is facing in the right direction.
        dotGeometry.lookAt(vector);
        // textGeometry.lookAt(vector);

        // Move the dot geometry into position.
        dotGeometry.translate(vector.x, vector.y, vector.z);
        // textGeometry.translate(vector.x, vector.y, vector.z);

        // Push the positioned geometry into the array.
        dotGeometries.push(dotGeometry);
      }
    }

    // Merge all the dot geometries together into one buffer geometry.
    setMergedDotGeometries(BufferGeometryUtils.mergeGeometries(dotGeometries));
  }, []);

  return (
    <Canvas
      camera={{
        fov: 20,
        near: 100,
        far: 500,
        position: new THREE.Vector3(0, 0, 220),
      }}
    >
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <mesh geometry={mergedDotGeometries} material={dotMaterial} />
    </Canvas>
  );
}

export default DotSphere;
