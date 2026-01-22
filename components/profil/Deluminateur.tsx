'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#7C3AED"
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.1}
        />
      </Sphere>
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#7C3AED" />
    </>
  )
}

export default function Deluminateur({ onTextSubmit }: { onTextSubmit: (text: string) => void }) {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <ParticleSphere />
      </Canvas>
    </div>
  )
}
