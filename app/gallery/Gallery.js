import '../gallery/gallery.scss'

import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial, TextureLoader } from 'three'

import wave_vert  from '../../public/shaders/wave.vert'
import wave_frag  from '../../public/shaders/wave.frag'
import { Cylinder, Icosahedron } from '@react-three/drei'

const images = [
    '/images/1old.webp',
    '/images/1.webp',
    '/images/4.webp',
    '/images/5.webp',
    '/images/6.webp',
    '/images/7.webp',
    '/images/8.webp',
    '/images/9.webp',
    '/images/10.webp',
    '/images/11.webp',
    '/images/12.webp',
    '/images/13.webp',
    '/images/14.webp',
    '/images/15.webp',
    '/images/15sml.webp',
    '/images/16.webp',
    '/images/17.webp',
    '/images/18.webp',
    '/images/19.webp',
    '/images/20.webp',
    '/images/21.webp',
    '/images/22.webp',
    '/images/23.webp',
    '/images/24.webp',
    '/images/25.webp',
    '/images/26.webp',
    '/images/27.webp',
    '/images/28.webp',
    '/images/29.webp',
    '/images/29sml.webp',
    '/images/30.webp',
    '/images/31.webp',
    '/images/32.webp',
    '/images/33.webp',
    '/images/34.webp',
    '/images/35.webp',
    '/images/36.webp',
    '/images/37.webp',
    '/images/38.webp',
    '/images/39.webp',
    '/images/40.webp',
    '/images/41.webp',
    '/images/42.webp',
    '/images/43.webp',
    '/images/44.webp',
    '/images/45.webp',
    '/images/46.webp',
    '/images/47.webp',
    '/images/48.webp',
    '/images/49.webp',
    '/images/50.webp',
    '/images/51.webp',
    '/images/52.webp',
    '/images/53.webp',
    '/images/54.webp',
    '/images/55.webp',
    '/images/55sml.webp',
    '/images/56.webp',
    '/images/57.webp',
    '/images/58.webp',
    '/images/58old.webp',
    '/images/59.webp',
    '/images/60.webp',
    '/images/61.webp',
    '/images/62.webp',
    '/images/63.webp',
    '/images/64.webp',
    '/images/65.webp',
    '/images/66.webp',
    '/images/67.webp',
    '/images/68.webp',
    '/images/69.webp',
    '/images/70.webp',
    '/images/71.webp',
    '/images/72.webp',
    '/images/73.webp',
    '/images/74.webp',
    '/images/75.webp',
    '/images/76.webp',
    '/images/77.webp',
    '/images/78.webp',
    '/images/79.webp',
    '/images/80.webp',
    '/images/81.webp',
    '/images/82.webp',
    '/images/83.webp',
    '/images/84.webp',
    '/images/84old.webp',
    '/images/85.webp',
    '/images/86.webp',
    '/images/87.webp',
    '/images/88.webp',
    '/images/89.webp',
    '/images/90.webp',
    '/images/91.webp',
    '/images/92.webp',
    '/images/93.webp',
    '/images/94.webp',
    '/images/95.webp',
    '/images/96.webp',
    '/images/97.webp',
    '/images/98.webp',
    '/images/99.webp',
    '/images/99old.webp',
    '/images/100.webp',
    '/images/100old.webp',
    '/images/101.webp',
    '/images/102.webp',
    '/images/103.webp',
    '/images/104.webp',
    '/images/105.webp',
    '/images/106.webp',
    '/images/107.webp',
    '/images/108.webp',
    '/images/109.webp',
    '/images/110.webp',
    '/images/111.webp',
    '/images/112.webp',
    '/images/113.webp',
    '/images/114.webp',
    '/images/115.webp',
    '/images/116.webp',
    '/images/117.webp',
    '/images/118.webp',
    '/images/119.webp',
    '/images/120.webp',
    '/images/121.webp',
    '/images/122.webp',
    '/images/123.webp',
    '/images/124.webp',
    '/images/125.webp',
    '/images/126.webp',
    '/images/127.webp',
    '/images/128.webp'
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

    // const cylinderVertices = []
    //     const radius = 12
    //     const height = 1
    //     const numVertices = 16

    //     for (let i = 0; i < numVertices; i++) {
    //         const angle = (i / numVertices) * Math.PI * 2
    //         const x = radius * Math.cos(angle)
    //         const y = radius * Math.sin(angle)
    //         const z = (i / numVertices) * height - height / 2

    //         cylinderVertices.push({ x, y, z })
    // }

    return (
        <>
            <Icosahedron args={[radius, 1, 1]}>
                {icosahedronVertices.map((vertex, index) => {
                    const randomImage = getRandomImage()

                    const combinedMaterial = useRef(new ShaderMaterial({
                        uniforms: {
                            uTime: { value: 0 },
                            uFrequency: { value: new THREE.Vector2(1, 0.5) },
                            uTransparency: { value: 1 },
                            uTexture: { value: textureLoader.load(randomImage) },
                        },
                        vertexShader: wave_vert,
                        fragmentShader: wave_frag,
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 0.75,
                    }))

                    useFrame((state, delta) => {
                        combinedMaterial.current.uniforms.uTime.value += delta
                    })

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
                            <primitive object={combinedMaterial.current} position={[0, 0, 0.1]} />
                        </mesh>
                    )
                })}
                <meshBasicMaterial wireframe color={'#ffffff'} transparent opacity={0} />
            </Icosahedron>

            {/* <Cylinder args={[radius, radius, height, 16, 0]}>
                {cylinderVertices.map((vertex, index) => {
                    const randomImage = getRandomImage()

                    const combinedMaterial = useRef(new ShaderMaterial({
                        uniforms: {
                            uTime: { value: 0 },
                            uFrequency: { value: new THREE.Vector2(1, 0.5) },
                            uTransparency: { value: 1 },
                            uTexture: { value: textureLoader.load(randomImage) },
                        },
                        vertexShader: wave_vert,
                        fragmentShader: wave_frag,
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 0.75,
                    }))

                    useFrame((state, delta) => {
                        combinedMaterial.current.uniforms.uTime.value += delta
                    })

                    return (
                        <mesh
                            key={index}
                            position={[vertex.x, vertex.y, vertex.z]}
                            rotation={[0, 0, 0]}
                            onUpdate={(self) => {
                                self.lookAt(new THREE.Vector3(0, 0, 0));
                            }}
                        >
                        <planeGeometry args={[6, 4, 15, 10]} />
                        <primitive object={combinedMaterial.current} />
                        </mesh>
                )
                })}
                <meshBasicMaterial wireframe color={'#ffffff'} transparent opacity={0.5} />
            </Cylinder> */}
        </>
    )
}

export default Gallery