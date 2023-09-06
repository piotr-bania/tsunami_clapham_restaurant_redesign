'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import Gallery from './Gallery'

const page = () => {
    return (
        <m.div
            className='gallery_canvas'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { delay: 0.1, duration: 2}}}
            >
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 23]} />
                <Suspense fallback={null}>
                    <Gallery />
                </Suspense>
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={0.25 * -1}
                    enablePan={false}
                    enableZoom={false}
                    // minPolarAngle={Math.PI / 2}
                    // maxPolarAngle={Math.PI / 2}
                    // minDistance={25}
                    // maxDistance={25}
                    enableDamping={true}
                    dampingFactor={0.01}
                />
            </Canvas>
        </m.div>
    )
}

export default page