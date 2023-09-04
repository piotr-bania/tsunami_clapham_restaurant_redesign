import '../homepage/orders.scss'
import Link from 'next/link'
import Headings from '../components/Headings'

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
            
            <p className="paragraph">Yearning for Tsunami's signature dishes but wish to enjoy them in the comfort of your home? Our takeaway and delivery services ensure that every bite you take captures the essence of our in-house experience. Expertly packaged and promptly delivered, relish Tsunami's culinary wonders wherever you are.</p>

            <Link href='/orders' className="cta">Order Now</Link>
        </section>
    )
}


export default Orders