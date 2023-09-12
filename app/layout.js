import './globals.scss'
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import Page_Transitions from './components/transitions/Page_Transitions'

export const metadata = {
    title: 'Tsunami | Clapham',
    description: 'Tsunami | Sushi Restaurant based in Clapham, London',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Page_Transitions>
                    <Navbar />
                    {children}
                    <Footer />
                </Page_Transitions>
            </body>
        </html>
    )
}