/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: LortDigital (https://sketchfab.com/LortDigital)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-dining-room-chair-9310ad85b4f9486f98943047124d47fe
Title: Low Poly Dining Room Chair
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Chair(props) {
  const { nodes, materials } = useGLTF("./low_poly_dining_room_chair.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.0008}
      position={[0.3, 0.3, 0]}
      rotation={[0, -Math.PI / 2 + 0.5, 0]}
    >
      <mesh
        castShadow
        geometry={nodes.Plane005_chair_0.geometry}
        material={materials.chair}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={87.935}
      />
    </group>
  );
}

useGLTF.preload("./low_poly_dining_room_chair.glb");
