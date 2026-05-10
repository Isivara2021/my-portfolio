"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ================= PARTICLE FIELD ================= */
function FloatingField() {
  const points = useRef<THREE.Points>(null);

  const particleCount = 450;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);

    const fract = (n: number) => n - Math.floor(n);
    const seeded = (seed: number) =>
      fract(Math.sin(seed * 12.9898) * 43758.5453);

    for (let i = 0; i < particleCount; i++) {
      const rx = seeded(i + 1);
      const ry = seeded(i + 101);
      const rz = seeded(i + 1001);

      pos[i * 3] = (rx - 0.5) * 10;
      pos[i * 3 + 1] = (ry - 0.5) * 6;
      pos[i * 3 + 2] = (rz - 0.5) * 10;
    }

    return pos;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    // ⚡ slightly slower + smoother
    points.current.rotation.y += 0.0007;
    points.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.12) * 0.05;

    points.current.rotation.z =
      Math.cos(state.clock.elapsedTime * 0.08) * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        size={0.022}
        color="#00f5ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ================= ORB RINGS ================= */
function OrbRings() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.z = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
  });

  return (
    <group ref={ref}>
      <mesh position={[2.5, 0.5, -2]}>
        <torusGeometry args={[2.4, 0.015, 16, 180]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.15} />
      </mesh>

      <mesh position={[-2.5, -0.5, -3]}>
        <torusGeometry args={[1.8, 0.015, 16, 180]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

/* ================= SAFE CANVAS ================= */
function SafeCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      }}
      dpr={[1, 1.2]}
    >
      {children}
    </Canvas>
  );
}

/* ================= MAIN ================= */
export default function HeroScene() {
  const [canRenderWebGL] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;

    try {
      const reduceMotion = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      )?.matches;
      if (reduceMotion) return false;

      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return Boolean(gl);
    } catch {
      return false;
    }
  });

  return (
    <div className="pointer-events-none absolute inset-0">
      {canRenderWebGL === false ? (
        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-1/2 top-[38%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
          <div className="absolute left-[18%] top-[22%] h-56 w-56 rounded-full bg-cyan-400/15 blur-2xl animate-float-slow" />
          <div className="absolute right-[10%] bottom-[18%] h-64 w-64 rounded-full bg-purple-400/12 blur-2xl animate-float-slow" />
        </div>
      ) : (
        <SafeCanvas>
          <ambientLight intensity={0.45} />
          <directionalLight position={[3, 2, 5]} intensity={0.55} />

          <FloatingField />
          <OrbRings />
        </SafeCanvas>
      )}
    </div>
  );
}
