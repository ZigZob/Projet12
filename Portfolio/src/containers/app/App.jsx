import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors"
import Header from "../../layout/header/index"
import Hero from "../hero/Hero"
import Footer from "../../layout/footer/index"
import "./_index.scss"
import Projects from "../projects/Projects"

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