'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import './navbar.scss'
import Page_Transitions from '../transitions/Page_Transitions'

const Navbar = () => {
    const [done, setDone] = useState(false)
    const router = useRouter()

    const handleDone = (route) => {
        setDone(true)

        const navigate = () => {
            router.push(route)
            setDone(false)
        }

        setTimeout(navigate, 1500)
    }

    return (
        <nav>
            {done && <Page_Transitions done={() => setDone(false)} />}
            <section id='navbar'>
                <div className='nav_left'>
                    <a onClick={() => handleDone('/')}>Homepage</a>
                    <a onClick={() => handleDone('/about')}>About</a>
                    <a onClick={() => handleDone('/menu')}>Menu</a>
                    <a onClick={() => handleDone('/bookings')}>Bookings</a>
                </div>

                <div className='nav_center'>
                    <a onClick={() => handleDone('/')} href='/'><Image className='logo' src='../../svg/logo.svg' alt='logo' width={174} height={34}/></a>
                </div>

                <div className='nav_right'>
                    <a onClick={() => handleDone('/orders')}>Orders</a>
                    <a onClick={() => handleDone('/gallery')}>Gallery</a>
                    <Link onClick={() => handleDone('/engage')}>Engage & Voices</Link>
                    <a onClick={() => handleDone('/contact')}>Reach Out</a>
                </div>
            </section>
        </nav>
    )
}

export default Navbar