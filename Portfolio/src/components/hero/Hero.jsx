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
        <div className="hero">
            <h1 className="hero__element">{database[key].hero[0]}<strong>{database[key].hero[1]}</strong>,</h1>
            <p className="hero__element">{database[key].hero[2]} <strong>{database[key].hero[3]}</strong>.</p>
            <p className="hero__element">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae debitis magnam fugit commodi? Quae iure, accusamus quis ipsam, repudiandae officia vero libero excepturi voluptas praesentium omnis eligendi, perferendis sed qui quod reprehenderit. Illo exercitationem voluptatibus earum modi repellendus. Illum, optio.</p>
        </div>
    )
}