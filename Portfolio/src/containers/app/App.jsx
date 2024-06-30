import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors"
import Header from "../../layout/header/index"
import Hero from "../../components/hero/Hero"
import Section from "../Section/Section"
import Footer from "../../layout/footer/index"
import "./_index.scss"

export default function App() {
    const time = useSelector(selectTime)
    return (
        <>
            <div className={`appWrapper ${time === "night" ? "night" : "day"}`}>
                <Header />
                <main>
                    <Hero />
                    <Section />
                </main>
                <Footer />
            </div>
        </>
    )
}