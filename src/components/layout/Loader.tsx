import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader: React.FC = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-[#915EFF]" />

        <p
          className="mt-4 text-sm font-bold text-white"
          style={{
            minWidth: "60px",
            textAlign: "center",
          }}
        >
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;