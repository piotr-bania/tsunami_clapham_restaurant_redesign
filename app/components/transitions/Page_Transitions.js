'use client'

import { motion as m, AnimatePresence } from 'framer-motion'

const transitionVariants = {
    initial: { height: '0vh', opacity: 0 },
    animate: { height: '100vh', opacity: 1, transition: { duration: 1.5 } },
    exit: { height: '0vh', opacity: 0, transition: { duration: 1.5 } }
}

const Page_Transitions = ({done}) => {

    return (
        <AnimatePresence mode='wait'>
            <m.div
                key="page-transition"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariants}
                onAnimationComplete={done}
                style={{
                position: 'fixed',
                width: '100%',
                background: 'blue',
                zIndex: 1
                }}
                >
            </m.div>
        </AnimatePresence>
    )
}

export default Page_Transitions