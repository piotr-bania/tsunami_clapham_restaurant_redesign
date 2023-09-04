import '../homepage/engage.scss'
import Link from 'next/link'
import Headings from '../components/Headings'

const Engage = () => {
    return (
        <section id='engage'>
            <div className='line top_middle'></div>
            <Headings
                h1Text='Capture the Tsunami Moments'
                h2Text='#TsunamiTales on Instagram'
                position="middle"
            />
            <div className='line bottom_middle'></div>
            
            <p className="paragraph text_dark">Join our vibrant community on Instagram and delve into the visual stories of our patrons. From the glint of a freshly poured cocktail to the artful presentation of our sushi platters, witness Tsunami through the lens of our beloved guests. Share your own #TsunamiTales and be a part of our ever-growing mosaic.</p>

            <Link href='/menu' className="cta text_dark" >Follow Us On Instagram</Link>
        </section>
    )
}

export default Engage