import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const uvMappings = {
  head: {
    front: { x: 8 / 64, y: 8 / 64, width: 8 / 64, height: 8 / 64 },
    back: { x: 24 / 64, y: 8 / 64, width: 8 / 64, height: 8 / 64 },
    left: { x: 16 / 64, y: 8 / 64, width: 8 / 64, height: 8 / 64 },
    right: { x: 0 / 64, y: 8 / 64, width: 8 / 64, height: 8 / 64 },
    top: { x: 8 / 64, y: 0 / 64, width: 8 / 64, height: 8 / 64 },
    bottom: { x: 16 / 64, y: 0 / 64, width: 8 / 64, height: 8 / 64 },
  },
  torso: {
    front: { x: 20 / 64, y: 20 / 64, width: 8 / 64, height: 12 / 64 },
    back: { x: 32 / 64, y: 20 / 64, width: 8 / 64, height: 12 / 64 },
    left: { x: 28 / 64, y: 20 / 64, width: 4 / 64, height: 8 / 64 },
    right: { x: 16 / 64, y: 20 / 64, width: 4 / 64, height: 8 / 64 },
    top: { x: 20 / 64, y: 16 / 64, width: 8 / 64, height: 4 / 64 },
    bottom: { x: 28 / 64, y: 16 / 64, width: 8 / 64, height: 4 / 64 },
  },
  rightArm: {
    front: { x: 44 / 64, y: 20 / 64, width: 4 / 64, height: 12 / 64 },
    back: { x: 52 / 64, y: 20 / 64, width: 4 / 64, height: 12 / 64 },
    left: { x: 40 / 64, y: 20 / 64, width: 4 / 64, height: 12 / 64 },
    right: { x: 48 / 64, y: 20 / 64, width: 4 / 64, height: 12 / 64 },
    top: { x: 44 / 64, y: 16 / 64, width: 4 / 64, height: 4 / 64 },
    bottom: { x: 48 / 64, y: 16 / 64, width: 4 / 64, height: 4 / 64 },
  }
};

export const Part = ({ position, args, texture, part }) => {
  const skinTexture = useTexture(texture);

  skinTexture.minFilter = THREE.NearestFilter;
  skinTexture.magFilter = THREE.NearestFilter;
  skinTexture.generateMipmaps = false;

  const getUVs = (face) => {
    const { x, y, width, height } = uvMappings[part][face];
    return [
      x, 1 - (y + height),
      x + width, 1 - (y + height),
      x + width, 1 - y,
      x, 1 - y,
    ];
  };

  const uvs = new Float32Array([
    ...getUVs("front"),  // Cara frontal
    ...getUVs("back"),   // Cara trasera
    ...getUVs("left"),   // Izquierda
    ...getUVs("right"),  // Derecha
    ...getUVs("top"),    // Arriba
    ...getUVs("bottom"), // Abajo
  ]);

  const vertices = new Float32Array([
    // Cara frontal
    -args[0] / 2, -args[1] / 2, args[2] / 2,
     args[0] / 2, -args[1] / 2, args[2] / 2,
     args[0] / 2, args[1] / 2, args[2] / 2,
    -args[0] / 2, args[1] / 2, args[2] / 2,

    // Cara trasera
    args[0] / 2, -args[1] / 2, -args[2] / 2,
    -args[0] / 2, -args[1] / 2, -args[2] / 2,
    -args[0] / 2, args[1] / 2, -args[2] / 2,
    args[0] / 2, args[1] / 2, -args[2] / 2,

    // Derecha
    args[0] / 2, -args[1] / 2, args[2] / 2,
    args[0] / 2, -args[1] / 2, -args[2] / 2,
    args[0] / 2, args[1] / 2, -args[2] / 2,
    args[0] / 2, args[1] / 2, args[2] / 2,

    // Izquierda
    -args[0] / 2, -args[1] / 2, -args[2] / 2,
    -args[0] / 2, -args[1] / 2, args[2] / 2,
    -args[0] / 2, args[1] / 2, args[2] / 2,
    -args[0] / 2, args[1] / 2, -args[2] / 2,

    // Arriba
    -args[0] / 2, args[1] / 2, args[2] / 2,
    args[0] / 2, args[1] / 2, args[2] / 2,
    args[0] / 2, args[1] / 2, -args[2] / 2,
    -args[0] / 2, args[1] / 2, -args[2] / 2,

    // Abajo
    -args[0] / 2, -args[1] / 2, -args[2] / 2,
    args[0] / 2, -args[1] / 2, -args[2] / 2,
    args[0] / 2, -args[1] / 2, args[2] / 2,
    -args[0] / 2, -args[1] / 2, args[2] / 2,
  ]);

  const indices = new Uint16Array([
    // Frontal
    0, 1, 2, 2, 3, 0,
    // Trasera
    4, 5, 6, 6, 7, 4,
    // Izquierda
    8, 9, 10, 10, 11, 8,
    // Derecha
    12, 13, 14, 14, 15, 12,
    // Arriba
    16, 17, 18, 18, 19, 16,
    // Abajo
    20, 21, 22, 22, 23, 20,
  ]);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeVertexNormals();

  return (
    <mesh position={position} geometry={geometry}>
      <meshBasicMaterial map={skinTexture} />
    </mesh>
  );
};
