'use client'

import { useRouter } from 'next/navigation'
import { motion as m, AnimatePresence } from 'framer-motion'

const Page_Transitions = ({ children }) => {

    return (
        <AnimatePresence mode='wait'>
            <m.div
                key='modal'
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0}}
                transition={{ duration: 1, ease: "easeInOut" }}
                >
                {children}
            </m.div>
        </AnimatePresence>
    )
}

export default Page_Transitions