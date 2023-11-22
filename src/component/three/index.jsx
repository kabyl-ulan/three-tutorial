import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

import { angleToRadians } from "../../utils/angle";
import { Car } from "./car";

function Three() {
  //code to move the camera around
  const orbitControlRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlRef.current) {
      const { x, y } = state.mouse;
      orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(60));
      orbitControlRef.current.update();
    }
  });

  //Animation
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      const timeLine = new gsap.timeline({ paused: true });

      console.log(timeLine);

      //x-axis motion
      timeLine.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: "power2.out",
      });

      // gsap.from(ballRef.current.position, {
      //   x: -2,
      // });

      //y-axis motion
      timeLine.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 2,
          ease: "bounce.out",
        },
        "<"
      );

      // const coefficient = 0.8;
      // for (let i = 1; i <= 4; i++) {
      //   timeLine.to(
      //     ballRef.current.position,
      //     {
      //       y: Math.pow(coefficient, i) * 1.5,
      //       duration: 0.2,
      //       ease: "power2.out",
      //     },
      //     ">"
      //   );

      //   timeLine.to(
      //     ballRef.current.position,
      //     {
      //       y: 0.5,
      //       duration: 0.2,
      //       ease: "power2.in",
      //     },
      //     ">"
      //   );
      // }

      timeLine.play();
    }
  }, [ballRef.current]);
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        ref={orbitControlRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />

      {/* Ball */}
      <mesh position={[-2, 1.5, 0]} castShadow={true} ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Car */}
      <Car />

      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow={true}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* Spot light */}
      <spotLight
        args={["#ffffff", 10, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow={true}
      />

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2266cc" />
        </mesh>
      </Environment>
    </>
  );
}

export default Three;
