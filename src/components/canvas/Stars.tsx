import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PointMaterial,
  Points,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";

const Stars = () => {
  const pointsRef = useRef<THREE.Points | null>(null);

  const [sphere] = useState<Float32Array>(() => {
    const positions = new Float32Array(5001);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2.4;
      positions[i + 1] = (Math.random() - 0.5) * 2.4;
      positions[i + 2] = (Math.random() - 0.5) * 2.4;
    }

    return positions;
  });

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.x -= delta / 10;
    pointsRef.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={pointsRef}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 75,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;