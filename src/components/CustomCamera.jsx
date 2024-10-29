import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function CustomCamera() {
  const cameraRef = useRef();

  useEffect(() => {
    cameraRef.current.setLookAt(2, 1, 2, 0, 0.1, 0, true);
  }, []);

  return <CameraControls ref={cameraRef} />;
}
