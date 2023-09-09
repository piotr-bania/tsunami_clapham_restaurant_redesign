'use client'

import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Loader from "./components/Loader"
import { motion as m } from 'framer-motion'

import Hero from "./homepage/Hero"
import About from "./homepage/About"
import Robata from "./homepage/Robata"
import Sushi from "./homepage/Sushi"
import Drinks from "./homepage/Drinks"
import Bookings from "./homepage/Bookings"
import Orders from "./homepage/Orders"
import Engage from "./homepage/Engage"

export default function Home() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    return (
        <main>
            {isLoading ? (
                <div id="loader">
                    <Canvas className='loader_canvas'>
                        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
                        <Loader />
                    </Canvas>
                </div>
            ) : (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <Hero />
                    <About />
                    <Robata />
                    <Sushi />
                    <Drinks />
                    <Bookings />
                    <Orders />
                    <Engage />
                </m.div>
            )}
        </main>
    )
}