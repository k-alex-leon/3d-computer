import { DoubleSide } from "three";

export default function Floor() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial side={DoubleSide} color={'#c7c6c6'}/>
    </mesh>
  );
}
