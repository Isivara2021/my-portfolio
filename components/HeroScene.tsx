"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ================= PARTICLE FIELD ================= */
function FloatingField() {
  const points = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();

  // 🔥 Improved responsive density (MORE particles on mobile)
  const particleCount = useMemo(() => {
    if (viewport.width < 4) return 380; // small phones
    if (viewport.width < 6) return 420; // normal mobile / tablet
    return 450; // laptop / desktop
  }, [viewport.width]);

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);

    const fract = (n: number) => n - Math.floor(n);
    const seeded = (seed: number) =>
      fract(Math.sin(seed * 12.9898) * 43758.5453);

    for (let i = 0; i < particleCount; i++) {
      const rx = seeded(i + 1);
      const ry = seeded(i + 101);
      const rz = seeded(i + 1001);

      // 🔥 Better adaptive spread for mobile immersion
      const spread = viewport.width < 5 ? 14 : 12;

      pos[i * 3] = (rx - 0.5) * spread;
      pos[i * 3 + 1] = (ry - 0.5) * (spread * 0.6);
      pos[i * 3 + 2] = (rz - 0.5) * spread;
    }

    return pos;
  }, [particleCount, viewport.width]);

  useFrame((state) => {
    if (!points.current) return;

    const t = state.clock.elapsedTime;

    // base motion
    points.current.rotation.y += 0.0006;
    points.current.rotation.x = Math.sin(t * 0.1) * 0.06;

    // mouse interaction (liveness)
    points.current.rotation.y += mouse.x * 0.0008;
    points.current.rotation.x += mouse.y * 0.0005;

    // floating drift
    points.current.position.y = Math.sin(t * 0.3) * 0.15;
    points.current.position.x = Math.cos(t * 0.25) * 0.1;

    // subtle flicker glow
    if (points.current.material) {
      (points.current.material as THREE.PointsMaterial).opacity =
        0.75 + Math.sin(t * 0.8) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        size={viewport.width < 5 ? 0.038 : 0.05}
        color="#5ef3ff"
        transparent
        opacity={0.88}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ================= ORB RINGS ================= */
function OrbRings() {
  const ref = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    ref.current.rotation.z = t * 0.05;
    ref.current.rotation.x = Math.sin(t * 0.12) * 0.2;

    // mouse responsiveness
    ref.current.rotation.y = mouse.x * 0.2;
    ref.current.rotation.x += mouse.y * 0.15;

    // breathing scale
    const scale = 1 + Math.sin(t * 0.6) * 0.03;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={ref}>
      <mesh position={[2.5, 0.5, -2]}>
        <torusGeometry args={[2.4, 0.015, 16, 200]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.2} />
      </mesh>

      <mesh position={[-2.5, -0.5, -3]}>
        <torusGeometry args={[1.8, 0.015, 16, 200]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.16} />
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
      dpr={[1, 1.5]}
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
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

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
          <ambientLight intensity={0.55} />
          <directionalLight position={[3, 2, 5]} intensity={0.7} />

          <FloatingField />
          <OrbRings />
        </SafeCanvas>
      )}
    </div>
  );
}