'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial
        color="#7C3AED"
        wireframe
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

export default function Signature3D() {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#7C3AED" />
        <AbstractShape />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
