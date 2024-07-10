import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors"
import Header from "../../layout/Header/Index.jsx"
import Hero from "../Hero/Index.jsx"
import Footer from "../../layout/Footer/Index.jsx"
import "./_index.scss"
import Projects from "../Projects/Index.jsx"

export default function App() {
    const time = useSelector(selectTime)
    return (
        <div className={`appWrapper ${time === "night" ? "night" : "day"}`}>
            <Header />
            <main>
                <Hero />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}