import './globals.scss'

import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'

export const metadata = {
    title: 'Tsunami | Clapham',
    description: 'Tsunami | Sushi Restaurant based in Clapham, London',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}