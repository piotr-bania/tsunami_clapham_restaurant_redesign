import './insta_feed.scss'

import { useState, useEffect } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import Animation_X from '../components/animations/Animation_X'

const Insta_Feed = () => {
    return (
        <div id='insta_feed'>
            <Animation_X
                className='image_1'
                src='/images/4.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_2'
                src='/images/7.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_3'
                src='/images/11.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_4'
                src='/images/14.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_5'
                src='/images/15.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_6'
                src='/images/30.webp'
                alt='Tsunami Clapham'
                fill
            />
        </div>
    )
}

export default Insta_Feed