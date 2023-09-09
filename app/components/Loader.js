import './loader.scss'

import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial, TextureLoader } from 'three'

import wave_vert from '../../public/shaders/wave.vert'
import wave_frag from '../../public/shaders/wave.frag'

const Loader = () => {

    const image = useLoader(TextureLoader, '/svg/logo_loader.png')

    const waveMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uFrequency: { value: new THREE.Vector2(0.5, 1) },
            uTransparency: { value: 1 },
            uTexture: { value: image },
        },
        vertexShader: wave_vert,
        fragmentShader: wave_frag,
        side: 2,
    })

    useFrame(( state, delta ) => {
        waveMaterial.uniforms.uTime.value += delta * 3
    })

    return (
        <mesh position={[0, 0, 0]}>
            <planeGeometry args={[34, 17.4, 128, 128]} />
            <shaderMaterial args={[waveMaterial]} />
        </mesh>
    )
}

export default Loader