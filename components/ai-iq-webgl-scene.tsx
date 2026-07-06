'use client';

import { Float, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function NeuralConstellation() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { pointPositions, linePositions } = useMemo(() => {
    const nodes = Array.from({ length: 72 }, (_, index) => {
      const ring = index % 3;
      const angle = index * 1.618;
      const radius = 1.35 + ring * 0.78 + Math.sin(index * 0.7) * 0.18;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(index * 0.53) * 1.2,
        Math.sin(angle) * radius,
      );
    });

    const pointData = new Float32Array(nodes.flatMap((node) => [node.x, node.y, node.z]));
    const lineData: number[] = [];

    nodes.forEach((node, index) => {
      const next = nodes[(index + 7) % nodes.length];
      const skip = nodes[(index + 19) % nodes.length];
      lineData.push(node.x, node.y, node.z, next.x, next.y, next.z);
      if (index % 3 === 0) {
        lineData.push(node.x, node.y, node.z, skip.x, skip.y, skip.z);
      }
    });

    return {
      pointPositions: pointData,
      linePositions: new Float32Array(lineData),
    };
  }, []);

  useFrame(({ clock, pointer }) => {
    const time = clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.08 + pointer.x * 0.08;
      pointsRef.current.rotation.x = Math.sin(time * 0.21) * 0.18 + pointer.y * 0.06;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = -time * 0.045;
      linesRef.current.rotation.z = Math.sin(time * 0.16) * 0.08;
    }
  });

  return (
    <group position={[1.55, 0.05, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7dd3fc" size={0.045} transparent opacity={0.95} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#0891b2" transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

function AssessmentCore() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const tiltedRingRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const time = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.18 + pointer.x * 0.22;
      groupRef.current.rotation.x = Math.sin(time * 0.4) * 0.08 + pointer.y * 0.12;
    }
    if (innerRef.current) {
      const pulse = 1 + Math.sin(time * 2.3) * 0.04;
      innerRef.current.scale.setScalar(pulse);
    }
    if (outerRingRef.current) outerRingRef.current.rotation.z = time * 0.34;
    if (tiltedRingRef.current) tiltedRingRef.current.rotation.x = Math.PI / 2.65 + Math.sin(time) * 0.16;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.7}>
      <group ref={groupRef} position={[1.65, 0.05, 0]}>
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[0.92, 3]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#22d3ee"
            emissiveIntensity={1.55}
            roughness={0.28}
            metalness={0.55}
            wireframe
          />
        </mesh>
        <mesh ref={outerRingRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.018, 18, 160]} />
          <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={2.4} />
        </mesh>
        <mesh ref={tiltedRingRef} rotation={[Math.PI / 2.65, 0, Math.PI / 5]}>
          <torusGeometry args={[2.05, 0.012, 18, 180]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={1.8} transparent opacity={0.78} />
        </mesh>
        {[0, 1, 2, 3].map((index) => (
          <mesh key={index} position={[Math.cos(index * 1.57) * 1.7, Math.sin(index * 0.9) * 0.42, Math.sin(index * 1.57) * 1.7]}>
            <boxGeometry args={[0.34, 0.11, 0.02]} />
            <meshStandardMaterial color="#e0f2fe" emissive="#0284c7" emissiveIntensity={1.8} transparent opacity={0.72} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function DataRibbons() {
  const ribbonRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ribbonRef.current) {
      ribbonRef.current.rotation.y = -clock.elapsedTime * 0.12;
      ribbonRef.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.16;
    }
  });

  return (
    <group ref={ribbonRef} position={[-0.95, -0.05, -0.8]} rotation={[0.3, -0.3, 0]}>
      {Array.from({ length: 9 }).map((_, index) => (
        <mesh key={index} position={[0, (index - 4) * 0.22, index * -0.08]} rotation={[0, 0, -0.22]}>
          <boxGeometry args={[2.8 - index * 0.1, 0.026, 0.026]} />
          <meshStandardMaterial color={index % 2 ? '#38bdf8' : '#a5f3fc'} emissive="#0ea5e9" emissiveIntensity={1.2} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export function AiIqWebglScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.25, 6.8], fov: 48 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="h-full w-full"
      >
        <color attach="background" args={['#02050b']} />
        <fog attach="fog" args={['#02050b', 6.5, 13]} />
        <ambientLight intensity={0.58} />
        <pointLight position={[2.8, 2.4, 3.5]} color="#67e8f9" intensity={54} distance={7} />
        <pointLight position={[-3.5, -1.5, 2]} color="#0ea5e9" intensity={20} distance={8} />
        <AssessmentCore />
        <NeuralConstellation />
        <DataRibbons />
        <Sparkles count={95} speed={0.42} opacity={0.65} color="#7dd3fc" size={2.4} scale={[8.2, 4.8, 4.8]} position={[0.9, 0.05, 0]} />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(90deg,rgba(3,7,13,0.98)_0%,rgba(3,7,13,0.72)_42%,rgba(3,7,13,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:52px_52px] opacity-45" />
    </div>
  );
}