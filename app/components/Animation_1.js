import React, { useRef } from 'react'
import { motion as m, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'

const Animation_1 = ({ src, className }) => {

    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
    

    return (
        <m.div
            ref={targetRef}
            className={`image ${className}`}
            style={{ translateY }}
        >
                <Image
                    className={className}
                    src={src}
                    alt='Animated Image'
                    fill
                    sizes='100%'
                    objectFit='cover'
                />
        </m.div>
    )
}

export default Animation_1