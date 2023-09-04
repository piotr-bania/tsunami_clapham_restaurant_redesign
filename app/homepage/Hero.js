'use client'

import '../homepage/hero.scss'
import '../components/headings.scss'
import Link from 'next/link'
import Hero_Canvas from '../homepage/Hero_Canvas'
import Headings from '../components/Headings'

const Hero = () => {
    return (
        <section id='hero' className='hero'>
            
            <Hero_Canvas />

            <div className='line top_hero'></div>
            <Headings
                h1Text='Experience the New Wave of Culinary Delight'
                h2Text='at Tsunami Clapham'
                position="hero"
            />
            <div className='line bottom_hero'></div>

            <p className='paragraph'>Where traditional grilling meets exceptional sushi and crafted cocktails.</p>

            <Link href='/menu' className="cta">Discover Our Menu</Link>
        </section>
    )
}

export default Hero