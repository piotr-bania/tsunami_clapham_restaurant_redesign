import '../homepage/bookings.scss'
import Link from 'next/link'
import Image from 'next/image'
import Headings from '../components/Headings'

const Bookings = () => {

    const today = new Date()
    const date = today.setDate(today.getDate()  + 1)
    const defaultValue = new Date(date).toISOString().split('T')[0]
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return (
        <section id='bookings'>
            <div className='line top_left'></div>
            <Headings
                h1Text='Reserve Your'
                h2Text='Culinary Journey'
                position="left"
            />
            <div className='line bottom_left'></div>
            
            <p className="paragraph">Anticipation is the first spice of any dining experience. At Tsunami, we ensure that from the moment you step in, every element is curated just for you. From our intimate sushi bar seats to the cozy lounge corners, choose the spot that suits your mood. Reserve now and let us set the stage for an unforgettable feast.</p>

            <div className='image image_8'>
                <Image className='image_8' src='/images/13.webp' alt='Tsunami Clapham' fill 
                objectFit='cover' />
            </div>

            <div className="book">
                <p>Reservation Date</p>
                <input className='input date' type="date" name="name" placeholder="Your Name"
                defaultValue={defaultValue}
                required />

                <p>No of Guests</p>
                <input className='input guests' type="number" name="name" placeholder="guests"
                defaultValue={2}
                required />

                <p>Reservation Time</p>
                <input className='input time' type="time" name="name" placeholder="Your Name"
                defaultValue={time}
                required />
            </div>
            
            <Link href='/bookings' className="cta">Check Availability</Link>
        </section>
    )
}

export default Bookings