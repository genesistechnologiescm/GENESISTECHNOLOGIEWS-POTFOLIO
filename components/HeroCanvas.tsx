"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ── Renderer ─────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    /* ── Scene + Camera ──────────────────────────────────────── */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    /* ── Materials ──────────────────────────────────────────── */
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf4f6fa,
      wireframe: false,
      transparent: true,
      opacity: 0.12,
    });
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.9,
    });
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x1a6bff,
      transparent: true,
      opacity: 0.06,
      wireframe: false,
    });

    /* ── Origin Mark — outer ring ────────────────────────────── */
    const torusGeo = new THREE.TorusGeometry(1.8, 0.012, 16, 120);
    const torus = new THREE.Mesh(torusGeo, ringMat);
    scene.add(torus);

    /* ── Origin Mark — middle ring ───────────────────────────── */
    const torus2Geo = new THREE.TorusGeometry(1.2, 0.008, 16, 100);
    const torus2 = new THREE.Mesh(torus2Geo, ring2Mat);
    scene.add(torus2);

    /* ── Origin Mark — outer faint ring ─────────────────────── */
    const torus3Geo = new THREE.TorusGeometry(2.6, 0.006, 16, 140);
    const torus3Mat = new THREE.MeshBasicMaterial({
      color: 0xf4f6fa,
      transparent: true,
      opacity: 0.04,
    });
    const torus3 = new THREE.Mesh(torus3Geo, torus3Mat);
    scene.add(torus3);

    /* ── Origin Mark — center dot ────────────────────────────── */
    const dotGeo = new THREE.SphereGeometry(0.14, 32, 32);
    const dot = new THREE.Mesh(dotGeo, dotMat);
    scene.add(dot);

    /* ── Cyan dot glow halo ──────────────────────────────────── */
    const haloGeo = new THREE.SphereGeometry(0.32, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.06,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    scene.add(halo);

    /* ── Particle field ──────────────────────────────────────── */
    const particleCount = 320;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x1a6bff,
      size: 0.022,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    /* ── Cyan accent particles ───────────────────────────────── */
    const cyanCount = 80;
    const cyanPos = new Float32Array(cyanCount * 3);
    for (let i = 0; i < cyanCount; i++) {
      cyanPos[i * 3 + 0] = (Math.random() - 0.5) * 8;
      cyanPos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      cyanPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const cyanGeo = new THREE.BufferGeometry();
    cyanGeo.setAttribute("position", new THREE.BufferAttribute(cyanPos, 3));
    const cyanPartMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.016,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });
    const cyanParticles = new THREE.Points(cyanGeo, cyanPartMat);
    scene.add(cyanParticles);

    /* ── Mouse parallax ─────────────────────────────────────── */
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ── Resize ──────────────────────────────────────────────── */
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    /* ── Animation loop ──────────────────────────────────────── */
    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.006;

      /* Smooth mouse follow */
      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;

      /* Rotate rings at different speeds + mouse tilt */
      torus.rotation.x = Math.sin(t * 0.3) * 0.15 + target.y * 0.12;
      torus.rotation.y = t * 0.18 + target.x * 0.12;

      torus2.rotation.x = -t * 0.22 + target.y * 0.08;
      torus2.rotation.y = Math.cos(t * 0.25) * 0.2 + target.x * 0.08;
      torus2.rotation.z = t * 0.1;

      torus3.rotation.x = t * 0.08 + target.y * 0.05;
      torus3.rotation.y = -t * 0.12 + target.x * 0.05;

      /* Dot pulse */
      const pulse = 1 + Math.sin(t * 2.2) * 0.06;
      dot.scale.setScalar(pulse);
      halo.scale.setScalar(pulse * 1.1);
      (dotMat as THREE.MeshBasicMaterial).opacity = 0.75 + Math.sin(t * 2.2) * 0.15;

      /* Particles drift */
      particles.rotation.y = t * 0.025;
      particles.rotation.x = Math.sin(t * 0.15) * 0.05;
      cyanParticles.rotation.y = -t * 0.04;

      /* Subtle camera drift */
      camera.position.x = target.x * 0.18;
      camera.position.y = target.y * 0.14;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    /* ── Cleanup ─────────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      torusGeo.dispose();
      torus2Geo.dispose();
      torus3Geo.dispose();
      dotGeo.dispose();
      haloGeo.dispose();
      partGeo.dispose();
      cyanGeo.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
