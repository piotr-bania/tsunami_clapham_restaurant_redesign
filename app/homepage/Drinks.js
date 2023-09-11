import '../homepage/drinks.scss'
import Link from 'next/link'
import Headings from '../components/Headings'
import Animation_X from '../components/animations/Animation_X'
import Animation_Y from '../components/animations/Animation_Y'
import Animation_Scale from '../components/animations/Animation_Scale'
import Animation_Opacity from '../components/animations/Animation_Opacity'

const Drinks = () => {

    return (
        <section id='drinks'>
                        <div className='line top_right'></div>
            <Headings
                h1Text='Unwind in Our'
                h2Text='Revitalized Lounge'
                position="right"
            />
            <div className='line bottom_right'></div>

            <Animation_Opacity className="paragraph text_dark"
                text="From classic concoctions to signature mixes, our refurbished bar offers a cocktail for every palate. Revel in the chic ambiance and toast to unforgettable moments."
            />

            <Animation_Y
                className='image_1'
                src='/images/93.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_2'
                src='/images/47.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_Scale
                className='image_3'
                src='/images/39.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Link href='/menu' className="cta text_dark">Explore Our Cocktails</Link>
        </section>
    )
}

export default Drinks