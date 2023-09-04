import React, { useRef } from 'react'
import { motion as m, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'

const Animation_Scale = ({ src, className }) => {

    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

    return (
        <m.div
            ref={targetRef}
            className={`image ${className}`}
            style={{ scale }}
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

export default Animation_Scale