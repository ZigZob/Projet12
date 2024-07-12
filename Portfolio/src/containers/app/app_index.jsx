import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors.js"
import Header from "../../layout/header/header_index.jsx"
import Hero from "../hero/hero_index.jsx"
import Footer from "../../layout/footer/footer_index.jsx"
import "./_index.scss"
import Projects from "../projects/projects_index.jsx"

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