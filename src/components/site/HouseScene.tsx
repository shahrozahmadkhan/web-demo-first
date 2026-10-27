import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, ContactShadows } from "@react-three/drei";
import { useRef, type ReactElement } from "react";
import * as THREE from "three";

const STUCCO = "#efe9df";
const WOOD = "#9a6a43";
const DARK = "#22272e";
const GLASS = "#9fb7c9";
const ORANGE = "#F47A20";

function Box({ p, s, c, rough = 0.8, metal = 0 }: { p: [number, number, number]; s: [number, number, number]; c: string; rough?: number; metal?: number }) {
  return (
    <mesh position={p} castShadow receiveShadow>
      <boxGeometry args={s} />
      <meshStandardMaterial color={c} roughness={rough} metalness={metal} />
    </mesh>
  );
}

function House() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const targetY = -0.5 + state.pointer.x * 0.25 + Math.sin(t * 0.15) * 0.08;
    g.rotation.y += (targetY - g.rotation.y) * (1 - Math.exp(-3 * Math.min(dt, 0.05)));
    state.camera.position.y += (3.2 + state.pointer.y * 0.6 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 1.4, 0);
  });

  const scaffold: ReactElement[] = [];
  for (let i = 0; i < 4; i++) {
    scaffold.push(<Box key={"v" + i} p={[3.1 + (i % 2) * 0.9, 1.9, -1.2 + Math.floor(i / 2) * 1.6]} s={[0.05, 3.8, 0.05]} c={ORANGE} metal={0.6} rough={0.4} />);
  }
  for (let j = 0; j < 3; j++) {
    scaffold.push(<Box key={"h" + j} p={[3.55, 0.9 + j * 1.2, -1.2]} s={[0.95, 0.05, 0.05]} c={ORANGE} metal={0.6} rough={0.4} />);
    scaffold.push(<Box key={"d" + j} p={[3.55, 0.92 + j * 1.2, -0.4]} s={[0.95, 0.04, 1.6]} c="#c9b28f" />);
  }

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* slab */}
      <Box p={[0, 0.1, 0]} s={[9, 0.2, 6]} c="#cfcac2" />
      {/* ground floor volume */}
      <Box p={[-1, 1.3, 0]} s={[5, 2.2, 4]} c={STUCCO} />
      {/* glass front ground */}
      <Box p={[-1.2, 1.25, 2.01]} s={[3.6, 1.8, 0.04]} c={GLASS} rough={0.05} metal={0.4} />
      {[-2.6, -1.4, -0.2, 0.6].map((x) => (
        <Box key={x} p={[x, 1.25, 2.04]} s={[0.06, 1.8, 0.04]} c={DARK} />
      ))}
      {/* upper cantilever volume (wood) */}
      <Box p={[0.6, 3.4, 0.4]} s={[5.2, 2, 3.6]} c={WOOD} rough={0.7} />
      <Box p={[1.2, 3.4, 2.21]} s={[2.6, 1.2, 0.04]} c={GLASS} rough={0.05} metal={0.4} />
      {/* roof overhangs */}
      <Box p={[0.5, 4.5, 0.4]} s={[6.2, 0.18, 4.6]} c={DARK} />
      <Box p={[-1, 2.48, 0.2]} s={[5.6, 0.14, 4.6]} c={DARK} />
      {/* side wing under renovation (exposed framing) */}
      {[0, 0.6, 1.2, 1.8].map((z) => (
        <Box key={z} p={[2.4, 1.3, -1.5 + z]} s={[0.08, 2.2, 0.08]} c="#d8b98a" />
      ))}
      <Box p={[2.4, 2.4, -0.6]} s={[0.1, 0.1, 2.1]} c="#d8b98a" />
      {scaffold}
      {/* planter + steps */}
      <Box p={[-3.5, 0.35, 2.4]} s={[1.4, 0.3, 0.9]} c="#d9d3c9" />
      <mesh position={[-3.5, 0.9, 2.4]} castShadow>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#5f7d4f" roughness={1} />
      </mesh>
    </group>
  );
}

export default function HouseScene() {
  return (
    <Canvas shadows dpr={[1, 1.75]} camera={{ position: [7.5, 3.2, 9], fov: 38 }} gl={{ antialias: true }}>
      <fog attach="fog" args={["#171A1F", 14, 32]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 9, 5]} intensity={2.2} color="#ffd9b0" castShadow shadow-mapSize={[1024, 1024]} />
      <House />
      <ContactShadows position={[0, 0.01, 0]} opacity={0.5} scale={18} blur={2.4} far={6} />
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <circleGeometry args={[14, 48]} />
        <meshStandardMaterial color="#2a2f36" roughness={1} />
      </mesh>
      <Environment resolution={64}>
        <Lightformer intensity={2} position={[0, 6, 4]} scale={[10, 4, 1]} color="#ffe2c0" />
        <Lightformer intensity={1} position={[-6, 2, 0]} rotation-y={Math.PI / 2} scale={[12, 2, 1]} color="#9fb7c9" />
      </Environment>
    </Canvas>
  );
}
