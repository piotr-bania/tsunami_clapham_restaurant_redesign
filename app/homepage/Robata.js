'use client'

import '../homepage/robata.scss'
import Link from 'next/link'
import Headings from '../components/Headings'
import Animation_X from '../components/Animation_X'
import Animation_Y from '../components/Animation_Y'
import Animation_Scale from '../components/Animation_Scale'
import Animation_Opacity from '../components/Animation_Opacity'

const Robata = () => {
    
    return (
        <section id='robata'>
            <div className='line top_right'></div>
            <Headings
                h1Text='Introducing Our'
                h2Text='Robata Grill'
                position="right"
            />
            <div className='line bottom_right'></div>

            <Animation_Y
                className='image_1'
                src='/images/4old.webp'
                alt='Tsunami Clapham'
                fill
                />

            <div className='text'>
                <Animation_Opacity className="paragraph text_dark"
                    text="Experience the essence of traditional Japanese grilling at Tsunami Clapham. Our new Robata Grill promises an unforgettable culinary journey, blending age-old techniques with modern flavors."
                />
                <Link href='/bookings' className="cta text_dark">
                    Reserve Your Table
                </Link>
            </div>

            <Animation_Scale
                className='image_2'
                src='/images/7old.webp'
                alt='Tsunami Clapham'
                fill 
                />

            <Animation_X
                className='image_3'
                src='/images/5old.webp'
                alt='Tsunami Clapham'
                fill
                />
        </section>
    )
}

export default Robata