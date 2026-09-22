import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

interface ComputersProps {
  isMobile: boolean;
}

/* =========================================================
   3D COMPUTER MODEL
========================================================= */

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF("/models/pc.glb");

  return (
    <group>
      {/* =====================================================
          LIGHTING
      ===================================================== */}

      <hemisphereLight
        intensity={0.25}
        groundColor="black"
      />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight
        position={[10, 10, 10]}
        intensity={1}
      />

      {/* =====================================================
          PC GLB MODEL
      ===================================================== */}

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.65}
        position={
          isMobile
            ? [0, -3, -2.2]
            : [0, -4.25, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

/* =========================================================
   PRELOAD MODEL
========================================================= */

useGLTF.preload("/models/pc.glb");

/* =========================================================
   COMPUTERS CANVAS
========================================================= */

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 500px)"
    );

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (
      event: MediaQueryListEvent
    ) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleMediaQueryChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMediaQueryChange
      );
    };
  }, []);

  /* =======================================================
     MOBILE
  ======================================================= */

  if (isMobile) {
    return null;
  }

  /* =======================================================
     DESKTOP CANVAS
  ======================================================= */

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>

        {/* =================================================
            MOUSE ROTATION
        ================================================= */}

        <OrbitControls
          enablePan={false}
          enableZoom={false}

          /* Horizontal mouse rotation */
          enableRotate={true}

          /* Allow vertical rotation */
          minPolarAngle={0}
          maxPolarAngle={Math.PI}

          /* Smooth mouse movement */
          rotateSpeed={0.8}

          /* Smooth damping */
          enableDamping={true}
          dampingFactor={0.08}

          /* Prevent the model from becoming upside down */
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />

        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;