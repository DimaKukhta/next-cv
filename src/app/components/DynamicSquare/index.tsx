"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./styles.module.css";

const DynamicSquare: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null); // Ref for the canvas container
  let points: THREE.Points; // Variable for the points object

  useEffect(() => {
    const container = canvasContainerRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true makes the background transparent
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create BoxGeometry with fewer segments to reduce point density
    const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, 10); // Reduced number of segments to 5
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 1,
    });

    // Create the point cloud
    points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the points object (the box)
      points.rotation.x += 0.01;
      points.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      // Check the screen width and scale the figure accordingly
      if (window.innerHeight <= 480) {
        points.scale.set(1.2, 1.2, 1.2);
      } else if (window.innerWidth <= 768) {
        points.scale.set(1.7, 1.7, 1.7); // Scale up the figure when screen width is less than 768px
      } else if (window.innerWidth <= 1279) {
        points.scale.set(1.2, 1.2, 1.2);
      } else {
        points.scale.set(1.3, 1.3, 1.3); // Reset scale when screen width is more than 768px
      }
    };

    window.addEventListener("resize", handleResize);

    // Run the resize handler initially
    handleResize();

    // Clean up when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);
  return <div className={styles.container} ref={canvasContainerRef} />;
};

export default DynamicSquare;
