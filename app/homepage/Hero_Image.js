import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

import wave_vert  from '../../public/shaders/wave.vert'
import wave_frag  from '../../public/shaders/wave.frag'

const Hero_Image = () => {
    const [image_1] = useLoader(THREE.TextureLoader, ['./images/55sml.webp'])
    const [image_2] = useLoader(THREE.TextureLoader, ['./images/29sml.webp'])
    const [image_3] = useLoader(THREE.TextureLoader, ['./images/47.webp'])

    const waveMaterial_1 = useRef(new ShaderMaterial({
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

    const waveMaterial_2 = useRef(waveMaterial_1.current.clone())
    waveMaterial_2.current.uniforms.uTexture.value = image_2

    const waveMaterial_3 = useRef(waveMaterial_1.current.clone())
    waveMaterial_3.current.uniforms.uTexture.value = image_3

    useFrame((state, delta) => {
        waveMaterial_1.current.uniforms.uTime.value += delta
        waveMaterial_2.current.uniforms.uTime.value += delta
        waveMaterial_3.current.uniforms.uTime.value += delta
    })

    return (
        <group>
            <mesh position={[-16, -1, 8]}>
                <planeGeometry args={[9, 9, 45, 45]} />
                <primitive object={waveMaterial_1.current} />
            </mesh>

            <mesh position={[0, -1, 4]}>
                <planeGeometry args={[30, 20, 150, 100]} />
                <primitive object={waveMaterial_2.current} />
            </mesh>

            <mesh position={[16, 1, 8]}>
                <planeGeometry args={[10, 15, 50, 75]} />
                <primitive object={waveMaterial_3.current} />
            </mesh>
        </group>
    )
}

export default Hero_Image