import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";

import Laptop3D from "./Laptop3D";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 35 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />

      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        <Laptop3D />
      </Float>

      <Environment preset="city" />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
