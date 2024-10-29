import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense, useRef } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import Stage from "./pages/Stage";
import CustomCamera from "./components/CustomCamera";
import { Physics } from "@react-three/rapier";
import { useStore } from "./hooks/useStore";
import * as THREE from 'three'

function App() {
  const isDebug = useStore((state) => state.isDebug);
  const domContent = useRef()

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        ref={domContent}
      />
      <Canvas
        // frameloop="demand"
        camera={{ position: [4, 1, 4], fov: 20 }}
        shadows
      >
        <Stats />
        <Suspense fallback={null}>
          <CustomCamera />
          <directionalLight
            intensity={1}
            position={[50, 50, 0]}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[0.5, 0, -0.5]} />
          {/* <pointLight position={[-1.5, 0.5, 1]}/> */}
          <ambientLight />
          <Physics debug={isDebug} gravity={[0, -0.3, 0]}>
            <Stage debug={isDebug} />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
