import '../gallery/gallery.scss'

import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial, TextureLoader } from 'three'

import wave_vert  from '../../public/shaders/wave.vert'
import wave_frag  from '../../public/shaders/wave.frag'
import { Icosahedron } from '@react-three/drei'

const images = [
    '/images/1old.webp',
    '/images/13.webp',
    '/images/15sml.webp',
    '/images/21.webp',
    '/images/29sml.webp',
    '/images/47.webp',
    '/images/55sml.webp',
    '/images/76.webp',
    '/images/84old.webp',
]

const Gallery = () => {
    const getRandomImage = () => {
        return images[Math.floor(Math.random() * images.length)]
    }

    const textureLoader = new TextureLoader()

    const icosahedronVertices = []
    const radius = 15

    for (let i = 0; i < 42; i++) {
        const phi = Math.acos(-1 + (2 * i) / 42)
        const theta = Math.sqrt(42 * Math.PI) * phi
        const x = radius * Math.cos(theta) * Math.sin(phi)
        const y = radius * Math.sin(theta) * Math.sin(phi)
        const z = radius * Math.cos(phi)
        icosahedronVertices.push({ x, y, z })
    }

    return (
        <Icosahedron args={[radius, 1, 1]}>
            {icosahedronVertices.map((vertex, index) => {
                // Generate a random image path for each plane
                const randomImage = getRandomImage();

                const combinedMaterial = useRef(new ShaderMaterial({
                    uniforms: {
                        uTime: { value: 0 },
                        uFrequency: { value: new THREE.Vector2(1, 0.5) },
                        uTransparency: { value: 1 },
                        uTexture: { value: textureLoader.load(randomImage) }, // Load the random image
                    },
                    vertexShader: wave_vert,
                    fragmentShader: wave_frag,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.75,
                }));

                useFrame((state, delta) => {
                    combinedMaterial.current.uniforms.uTime.value += delta;
                });

                return (
                    <mesh
                        key={index}
                        position={[vertex.x, vertex.y, vertex.z]}
                        rotation={[0, 0, 0]}
                        onUpdate={(self) => {
                            self.lookAt(new THREE.Vector3(0, 0, 0))
                        }}
                    >
                        <planeGeometry args={[6, 4, 15, 10]} />
                        {/* Use the combined material for both the image and wave effect */}
                        <primitive object={combinedMaterial.current} position={[0, 0, 0.1]} />
                    </mesh>
                );
            })}
            <meshBasicMaterial wireframe color={'#1e1e1e'} transparent opacity={0} />
        </Icosahedron>
    )
}

export default Gallery