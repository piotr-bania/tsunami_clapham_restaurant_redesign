import '../homepage/about.scss'
import Link from 'next/link'
import Image from 'next/image'
import Headings from '../components/Headings'

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

            {/* <div className='image image_6'>
                <Image className='image_6' src='/images/6.webp' alt='Tsunami Clapham' fill 
                objectFit='cover' />
            </div> */}

            <video className='video'
                src='/videos/tsunami.webm' autoPlay loop muted controls={true}>
            </video>
            
            <p className="paragraph">Located in the heart of Clapham, Tsunami is not just a restaurant – it's an experience. From our traditional sushi masterpieces to the avant-garde presentations of modern dishes, we embrace the rich tapestry of Japanese cuisine while adding our unique twist. Dive deep into the fusion of East and West, and let our culinary tales enchant you.</p>

            <Link href='/about' className="cta">Learn Our Story</Link>
        </section>
    )
}

export default About