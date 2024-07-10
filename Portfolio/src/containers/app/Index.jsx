import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors"
import Header from "../../layout/Header/index"
import Hero from "../Hero/Index"
import Footer from "../../layout/Footer/index"
import "./_index.scss"
import Projects from "../Projects/Index"

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