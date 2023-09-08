import '../homepage/sushi.scss'
import Link from 'next/link'
import Headings from '../components/Headings'
import Animation_X from '../components/animations/Animation_X'
import Animation_Y from '../components/animations/Animation_Y'
import Animation_Scale from '../components/animations/Animation_Scale'
import Animation_Opacity from '../components/animations/Animation_Opacity'

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
            
            <Animation_Opacity className="paragraph text_dark"
                text="Dive deep into our sushi menu, where every roll is a fusion of fresh ingredients, masterful techniques, and the passion of our seasoned chefs."
            />

            <Animation_Y
                className='image_1'
                src='/images/1old.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_2'
                src='/images/76.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_Scale
                className='image_3'
                src='/images/21.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Link href='/menu' className="cta text_dark">View Sushi Specials</Link>
        </section>
    )
}

export default Sushi