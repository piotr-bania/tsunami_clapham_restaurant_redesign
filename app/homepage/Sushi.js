import '../homepage/sushi.scss'
import Link from 'next/link'
import Image from 'next/image'
import Headings from '../components/Headings'

const Sushi = () => {
    return (
        <section id='sushi'>
            <div className='line top_left'></div>
            <Headings
                h1Text='Sushi Crafted'
                h2Text='to Perfection'
                position="left"
            />
            <div className='line bottom_left'></div>
            
            <p className="paragraph text_dark">Dive deep into our sushi menu, where every roll is a fusion of fresh ingredients, masterful techniques, and the passion of our seasoned chefs.</p>

            {/* <div className='image image_1'>
                <Image className='image_1' src='/images/1.webp' alt='Tsunami Clapham' fill 
                objectFit='cover' />
            </div> */}

            <Link href='/menu' className="cta text_dark">View Sushi Specials</Link>
        </section>
    )
}

export default Sushi