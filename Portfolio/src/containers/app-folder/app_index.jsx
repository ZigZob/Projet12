import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors.js"
import Header from "../../layout/header-folder/header_index.jsx"
import Hero from "../hero-folder/hero_index.jsx"
import Footer from "../../layout/footer-folder/footer_index.jsx"
import "./_index.scss"
import Projects from "../projects-folder/projects_index.jsx"
import Skills from "../skills-folder/skills_index.jsx"

export default function App() {
    const time = useSelector(selectTime)
    return (
        <div className={`appWrapper ${time === "night" ? "night" : "day"}`}>
            <Header />
            <main>
                <Hero />
                {time === "day" ? <Skills /> : null}
                <Projects />
            </main>
            <Footer />
        </div>
    )
}