import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './navbar.scss'

const Navbar = () => {
    
    return (
        <nav>
            <section id='navbar'>
                <div className='nav_left'>
                    <Link href='/'>Homepage</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/bookings'>Bookings</Link>
                </div>

                <div className='nav_center'>
                    <Link href='/'><Image className='logo' src='../../svg/logo.svg' alt='logo' width={174} height={34}/></Link>
                </div>

                <div className='nav_right'>
                    <Link href='orders'>Orders</Link>
                    <Link href='/gallery'>Gallery</Link>
                    <Link href='/Engage'>Engage & Voices</Link>
                    <Link href='/contact'>Reach Out</Link>
                </div>
            </section>
        </nav>
    )
}

export default Navbar