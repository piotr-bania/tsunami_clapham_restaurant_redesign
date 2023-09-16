'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import './navbar.scss'

import Exit_Transitions from '../transitions/Exit_Transitions'

const Navbar = () => {
    const [exit, setExit] = useState(false)
    const [done, setDone] = useState(false)
    const router = useRouter()

    const handleDone = (route) => {
        setExit(true)

        setOnAnimationComplete(() => () => {
            setExit(false)
            router.push(route)
        })
    }

    return (
        <nav>
            {exit && <Exit_Transitions done={() => setExit(false)} />}
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