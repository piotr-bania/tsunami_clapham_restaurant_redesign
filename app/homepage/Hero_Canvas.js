import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import Hero_Image from './Hero_Image'

const Hero_Canvas = () => {
    return (
        <m.div
            className='hero_canvas'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { delay: 0.1, duration: 2}}}
            >
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 35]} />
                <Suspense fallback={null}>
                    <Hero_Image />
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Hero_Canvas