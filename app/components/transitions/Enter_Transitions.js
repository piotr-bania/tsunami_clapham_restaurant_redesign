'use clinet'

import { motion as m, AnimatePresence } from 'framer-motion'

const loadTransitionVariants = {
    initial: { height: '100vh' },
    animate: { 
        height: '0vh', 
        transition: { 
            duration: 1.5,
            ease: "easeInOut"
        } 
    },
    exit: { 
        height: '100vh', 
        transition: { 
            duration: 1.5,
            ease: "easeInOut"
        } 
    }
}

const Enter_Transitions = ({ done }) => {
    return (
        <AnimatePresence mode='wiat'>
            <m.div
            id='load_transition'
            key="load-transition"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={loadTransitionVariants}
            onAnimationComplete={done}
            style={{
                position: 'fixed',
                width: '100%',
                background: '#e7b46c',
                zIndex: 1
            }}
            >
            </m.div>
        </AnimatePresence>
    )
}

export default Enter_Transitions