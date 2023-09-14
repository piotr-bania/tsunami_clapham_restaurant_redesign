'use client'

import { motion as m, AnimatePresence } from 'framer-motion'

const transitionVariants = {
    initial: { height: '0vh' },
    animate: { 
        height: '100vh', 
        transition: { 
            duration: 1.5,
            ease: "easeInOut"
        } 
    },
    exit: { 
        height: '0vh', 
        transition: { 
            duration: 1.5,
            ease: "easeInOut"
        } 
    }
}

const Page_Transitions = ({done, reverse}) => {

    const variants = reverse ? {...transitionVariants, initial: "exit", animate: "initial"} : transitionVariants;


    return (
        <AnimatePresence mode='wait'>
            <m.div
                id='page_transition'
                key="page-transition"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariants}
                onAnimationComplete={done}
                style={{
                position: 'fixed',
                width: '100%',
                background: '#e7b46c'
                }}
                >
            </m.div>
        </AnimatePresence>
    )
}

export default Page_Transitions