'use client'

import '../homepage/about.scss'
import Link from 'next/link'
import Headings from '../components/Headings'
import Animation_Opacity from '../components/Animation_Opacity'

const About = () => {
    return (
        <section id='about'>
            <div className='line top_middle'></div>
            <Headings
                h1Text='Discover Tsunami'
                h2Text='Essence'
                position="middle"
            />
            <div className='line bottom_middle'></div>

            <video className='video'
                src='/videos/tsunami.webm' autoPlay loop muted controls={true}>
            </video>
            
            <div className='paragraph'>
                <Animation_Opacity
                    text="Located in the heart of Clapham, Tsunami is not just a restaurant – it's an experience. From our traditional sushi masterpieces to the avant-garde presentations of modern dishes, we embrace the rich tapestry of Japanese cuisine while adding our unique twist. Dive deep into the fusion of East and West, and let our culinary tales enchant you."
                />
            </div>

            <Link href='/about' className="cta">Learn Our Story</Link>
        </section>
    )
}

export default About