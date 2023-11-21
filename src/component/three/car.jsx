import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car() {
  const { nodes, materials } = useGLTF("../../../public/models/car/model.glb");
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, -0.474, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.chrome_M_Chrome_0.geometry}
              material={materials.M_Chrome}
            />
            <mesh
              geometry={nodes.chrome_M_Black_0.geometry}
              material={materials.M_Black}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.body_M_Paint_0.geometry}
              material={materials.M_Paint}
            />
            <mesh
              geometry={nodes.body_M_Black_0.geometry}
              material={materials.M_Black}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.trim2_M_Badge_0.geometry}
              material={materials.M_Badge}
            />
            <mesh
              geometry={nodes.trim2_M_Lights_0.geometry}
              material={materials.M_Lights}
            />
          </group>
          <mesh
            geometry={nodes["rear-view_M_Chrome_0"].geometry}
            material={materials.M_Chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.door_handle_M_Chrome_0.geometry}
            material={materials.M_Chrome}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[-4.283, 4.283, 4.283]}
          />
          <mesh
            geometry={nodes.badges_2_M_Badge_0.geometry}
            material={materials.M_Badge}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.badges_M_Badge_0.geometry}
            material={materials.M_Badge}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle002_M_Badge_0.geometry}
            material={materials.M_Badge}
            position={[0, -33.707, 80.729]}
            scale={3.012}
          />
          <mesh
            geometry={nodes["lights-glass_M_Lights_0"].geometry}
            material={materials.M_Lights}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.trim_M_Badge_0.geometry}
            material={materials.M_Badge}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.glass_M_Glass_0.geometry}
            material={materials.M_Glass}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.black2_M_Black_0.geometry}
            material={materials.M_Black}
            position={[0, 0.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.black_M_Black_0.geometry}
            material={materials.M_Black}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.glass2_M_Glass_0.geometry}
            material={materials.M_Glass}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.wheels_M_Wheel_0.geometry}
            material={materials.M_Wheel}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.badge3_M_Badge_0.geometry}
            material={materials.M_Badge}
            position={[-1.31, 2.027, 405.289]}
            scale={3.049}
          />
          <mesh
            geometry={nodes.lights_M_Lights_0.geometry}
            material={materials.M_Lights}
            position={[0, -0.474, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ground_M_Dome_0.geometry}
            material={materials.M_Dome}
            position={[0, -59.609, 209.041]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={238.584}
          />
          <mesh
            geometry={nodes.screws_M_Badge_0.geometry}
            material={materials.M_Badge}
            rotation={[Math.PI, 0, Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes["plate-holder_M_Badge_0"].geometry}
            material={materials.M_Badge}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.plate_M_License_0.geometry}
            material={materials.M_License}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../../../public/models/car/model.glb");
