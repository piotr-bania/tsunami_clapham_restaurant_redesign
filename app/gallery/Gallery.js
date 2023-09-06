import '../gallery/gallery.scss'

import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

import wave_vert  from '../../public/shaders/wave.vert'
import wave_frag  from '../../public/shaders/wave.frag'

const Gallery = () => {
    const [image_1] = useLoader(THREE.TextureLoader, ['./images/55sml.webp'])

    const waveMaterial = useRef(new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uFrequency: { value: new THREE.Vector2(0.5, 0.25) },
            uTransparency: { value: 1 },
            uTexture: { value: image_1 },
        },
        vertexShader: wave_vert,
        fragmentShader: wave_frag,
        side: 2,
    }))

    useFrame((state, delta) => {
        waveMaterial.current.uniforms.uTime.value += delta
    })

    return (
        <mesh position={[0, -1, 4]}>
            <planeGeometry args={[30, 20, 150, 100]} />
            <primitive object={waveMaterial.current} />
        </mesh>
    )
}

export default Gallery