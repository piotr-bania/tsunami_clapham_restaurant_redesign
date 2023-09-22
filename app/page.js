import Hero from "./homepage/Hero"
import About from "./homepage/About"
import Robata from "./homepage/Robata"
import Sushi from "./homepage/Sushi"
import Drinks from "./homepage/Drinks"
import Bookings from "./homepage/Bookings"
import Orders from "./homepage/Orders"
import Engage from "./homepage/Engage"
import Page_Transitions from "./components/transitions/Exit_Transitions"

export default function Home() {

    

    return (
        <>
            <Hero />
            <About />
            <Robata />
            <Sushi />
            <Drinks />
            <Bookings />
            <Orders />
            <Engage />
        </>
    )
}