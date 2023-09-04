import '../homepage/drinks.scss'
import Link from 'next/link'
import Headings from '../components/Headings'

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
            
            <p className="paragraph text_dark">From classic concoctions to signature mixes, our refurbished bar offers a cocktail for every palate. Revel in the chic ambiance and toast to unforgettable moments.</p>

            <Link href='/menu' className="cta text_dark">Explore Our Cocktails</Link>
        </section>
    )
}

export default Drinks