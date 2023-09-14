'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import './navbar.scss'

import Page_Transitions from '../transitions/Page_Transitions'
import Load_Transitions from '../transitions/Load_Transitions'

const Navbar = () => {
    const [cover, setCover] = useState(false)
    const [reveal, setReveal] = useState(false)
    const router = useRouter()

    const handleDone = (route) => {
        if (router.pathname === route) return
        setCover(true)

        const navigate = () => {
            router.push(route).then(() => {
                setCover(false)
                setReveal(true)
            })
        }

        setTimeout(navigate, 1500)
    }

    return (
        <nav>
            {cover && <Page_Transitions done={() => setCover(false)} />}
            {reveal && <Load_Transitions done={() => setReveal(false)} />}
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
                    <a onClick={() => handleDone('/engage')}>Engage & Voices</a>
                    <a onClick={() => handleDone('/contact')}>Reach Out</a>
                </div>
            </section>
        </nav>
    )
}

export default Navbar