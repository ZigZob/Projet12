import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors.js"
import Header from "../../layout/header/index.jsx"
import Hero from "../hero/Index.jsx"
import Footer from "../../layout/footer/index.jsx"
import "./_index.scss"
import Projects from "../projects/Index.jsx"

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