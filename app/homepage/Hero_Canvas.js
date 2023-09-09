import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Hero_Image from './Hero_Image'

const Hero_Canvas = () => {
    return (
        <div className='hero_canvas'>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 35]} />
                <Suspense fallback={null}>
                    <Hero_Image />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Hero_Canvas