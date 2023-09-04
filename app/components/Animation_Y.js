import React, { useRef } from 'react'
import { motion as m, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'

const Animation_Y = ({ src, className }) => {

    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start end"]
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [-25, 25])

    return (
        <m.div
            ref={targetRef}
            className={`image ${className}`}
            style={{ translateY }}
        >
                <Image
                    className={className}
                    src={src}
                    alt='Image'
                    fill
                    objectFit='cover'
                />
        </m.div>
    )
}

export default Animation_Y