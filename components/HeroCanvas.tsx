"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    /* ── Trinity Mark — outer triangle ─────────────────────── */
    const outerTriGeo = new THREE.BufferGeometry();
    const outerVerts = new Float32Array([
      0,  1.8, 0,   // top
     -1.56, -0.9, 0, // bottom-left
      1.56, -0.9, 0, // bottom-right
      0,  1.8, 0,   // close
    ]);
    outerTriGeo.setAttribute("position", new THREE.BufferAttribute(outerVerts, 3));
    const outerTriMat = new THREE.LineBasicMaterial({ color: 0xf4f6fa, transparent: true, opacity: 0.18 });
    const outerTri = new THREE.Line(outerTriGeo, outerTriMat);
    scene.add(outerTri);

    /* ── Trinity Mark — outer triangle glow ─────────────────── */
    const outerGlowGeo = new THREE.BufferGeometry();
    const outerGlowVerts = new Float32Array([
      0,  2.6, 0,
     -2.25, -1.3, 0,
      2.25, -1.3, 0,
      0,  2.6, 0,
    ]);
    outerGlowGeo.setAttribute("position", new THREE.BufferAttribute(outerGlowVerts, 3));
    const outerGlowMat = new THREE.LineBasicMaterial({ color: 0x1a6bff, transparent: true, opacity: 0.06 });
    const outerGlowTri = new THREE.Line(outerGlowGeo, outerGlowMat);
    scene.add(outerGlowTri);

    /* ── Trinity Mark — inner triangle (inverted, cyan) ─────── */
    const innerTriGeo = new THREE.BufferGeometry();
    // Filled triangle using shape
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.86);       // bottom apex (inverted)
    shape.lineTo(-0.75, 0.43);    // top-left
    shape.lineTo(0.75, 0.43);     // top-right
    shape.closePath();
    const innerFilledGeo = new THREE.ShapeGeometry(shape);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.85 });
    const innerTri = new THREE.Mesh(innerFilledGeo, innerMat);
    scene.add(innerTri);

    /* ── Inner triangle glow halo ────────────────────────────── */
    const haloShape = new THREE.Shape();
    haloShape.moveTo(0, -1.1);
    haloShape.lineTo(-0.95, 0.55);
    haloShape.lineTo(0.95, 0.55);
    haloShape.closePath();
    const haloGeo = new THREE.ShapeGeometry(haloShape);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.06 });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    scene.add(halo);

    /* ── Particle field ──────────────────────────────────────── */
    const particleCount = 320;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({ color: 0x1a6bff, size: 0.022, transparent: true, opacity: 0.55, sizeAttenuation: true });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    /* ── Cyan accent particles ───────────────────────────────── */
    const cyanCount = 80;
    const cyanPos = new Float32Array(cyanCount * 3);
    for (let i = 0; i < cyanCount; i++) {
      cyanPos[i * 3]     = (Math.random() - 0.5) * 8;
      cyanPos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      cyanPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const cyanGeo = new THREE.BufferGeometry();
    cyanGeo.setAttribute("position", new THREE.BufferAttribute(cyanPos, 3));
    const cyanPartMat = new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.016, transparent: true, opacity: 0.4, sizeAttenuation: true });
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
      t += 0.005;

      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;

      /* Slow rotation of the full Trinity mark */
      outerTri.rotation.z = t * 0.08 + target.x * 0.1;
      outerTri.rotation.x = target.y * 0.08;
      outerGlowTri.rotation.z = -t * 0.05 + target.x * 0.06;

      innerTri.rotation.z = -t * 0.12 + target.x * 0.1;
      innerTri.rotation.x = target.y * 0.08;
      halo.rotation.z = innerTri.rotation.z;
      halo.rotation.x = innerTri.rotation.x;

      /* Cyan pulse */
      const pulse = 1 + Math.sin(t * 2.4) * 0.05;
      innerTri.scale.setScalar(pulse);
      halo.scale.setScalar(pulse * 1.15);
      innerMat.opacity = 0.7 + Math.sin(t * 2.4) * 0.15;

      /* Particles drift */
      particles.rotation.y = t * 0.025;
      particles.rotation.x = Math.sin(t * 0.15) * 0.05;
      cyanParticles.rotation.y = -t * 0.04;

      /* Camera parallax */
      camera.position.x = target.x * 0.18;
      camera.position.y = target.y * 0.14;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      outerTriGeo.dispose();
      outerGlowGeo.dispose();
      innerFilledGeo.dispose();
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
