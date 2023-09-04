'use client'

import { useRef } from 'react'
import '../homepage/robata.scss'
import Link from 'next/link'
import Image from 'next/image'
import { motion as m, useScroll, useTransform } from 'framer-motion'
import Headings from '../components/Headings'
import Animation_1 from '../components/Animation_1'

const Robata = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "start end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const translateX = useTransform(scrollYProgress, [0, 2], [0, 100])
    
    return (
        <section id='robata'>
            <div className='line top_right'></div>
            <Headings
                h1Text='Introducing Our'
                h2Text='Robata Grill'
                position="right"
            />
            <div className='line bottom_right'></div>

            <Animation_1
                className='image_1'
                src='/images/4old.webp'
                alt='Tsunami Clapham'
                fill
                objectFit='cover'
                />
            
            <div className="text">
                <p className="paragraph text_dark">Experience the essence of traditional Japanese grilling at Tsunami Clapham. Our new Robata Grill promises an unforgettable culinary journey, blending age-old techniques with modern flavors.</p>

                <Link href='/bookings' className="cta text_dark">Reserve Your Table</Link>
            </div>

            <Animation_1
                className='image_2'
                src='/images/7old.webp'
                alt='Tsunami Clapham'
                fill 
                objectFit='cover'
                />

            <Animation_1
                className='image_3'
                src='/images/5old.webp'
                alt='Tsunami Clapham'
                fill
                objectFit='cover'
                />
        </section>
    )
}

export default Robata