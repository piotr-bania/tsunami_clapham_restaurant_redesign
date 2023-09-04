import React, { useRef } from 'react'
import { motion as m, useTransform, useScroll } from 'framer-motion'

const Animation_Opacity = ({ text, className }) => {

    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start end"]
    })

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])

    return (
        <m.p
            ref={targetRef}
            className={`paragraph ${className}`}
            style={{ opacity }}
            >
            {text}
        </m.p>
    )
}

export default Animation_Opacity