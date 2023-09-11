import '../homepage/orders.scss'
import Link from 'next/link'
import Headings from '../components/Headings'
import Animation_X from '../components/animations/Animation_X'
import Animation_Y from '../components/animations/Animation_Scale'
import Animation_Opacity from '../components/animations/Animation_Opacity'
import Animation_Scale from '../components/animations/Animation_Scale'

const Orders = () => {

    return (
        <section id='orders'>
            <div className='line top_right'></div>
            <Headings
                h1Text='Tsunami Delights'
                h2Text='at Your Doorstep'
                position="right"
            />
            <div className='line bottom_right'></div>

            <Animation_Opacity className="paragraph"
                text="Yearning for Tsunami's signature dishes but wish to enjoy them in the comfort of your home? Our takeaway and delivery services ensure that every bite you take captures the essence of our in-house experience. Expertly packaged and promptly delivered, relish Tsunami's culinary wonders wherever you are."
            />

            <Animation_Scale
                className='image_1'
                src='/images/128.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Animation_X
                className='image_2'
                src='/images/127.webp'
                alt='Tsunami Clapham'
                fill
            />

            <Link href='/orders' className="cta">Order Now</Link>
        </section>
    )
}


export default Orders