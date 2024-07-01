import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors"
import "./_index.scss"
import { selectLang } from "../../store/slices/langSlice/selectors"
import { database } from "../../assets/projectData"

export default function Hero() {
    const time = useSelector(selectTime)
    const lang = useSelector(selectLang)
    let key = `${lang}_${time}`
    return (
        <section className="hero">
            <h1 className="hero__element">{database[key].hero[0]}<strong className={`hero__element--${time === "night" ? "night" : "day"}`} >{database[key].hero[1]}</strong>,</h1>
            <h2 className="hero__element">{database[key].hero[2]} <strong className={`hero__element--${time === "night" ? "night" : "day"}`}>{database[key].hero[3]}</strong>.</h2>
            <p className="hero__element">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iure corporis aliquid, alias vitae vel dolorum! Natus odio libero voluptate sequi quo quasi perferendis accusantium corporis, ducimus quis velit eum nulla ullam nisi iste atque laboriosam esse praesentium ea est neque, quia optio! Illo perferendis maiores amet harum molestiae similique corrupti error eius voluptate cupiditate, voluptatibus ratione? Temporibus, ex repudiandae.</p>
        </section>
    )
}