import "./_index.scss"
import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors"
import { selectLang } from "../../store/slices/langSlice/selectors"
import { database } from "../../assets/projectData"
import { selectKey } from "../../store/selectors"

export default function Hero() {
    const time = useSelector(selectTime)
    const lang = useSelector(selectLang)
    const key = useSelector(selectKey)
    return (
        <section tabIndex={3} className="hero">
            <h1 className="hero__element">{database[key].hero[0]}<strong className={`hero__element--${time === "night" ? "night" : "day"}`}>{database[key].hero[1]}</strong>,</h1>
            <h2 className="hero__element">{database[key].hero[2]}<strong className={`hero__element--${time === "night" ? "night" : "day"}`}> {database[key].hero[3]}</strong>.</h2>
            <p className="hero__element hero__description">
                {lang === "en" ?
                    "As a web developer, I have enhanced my ability to break down complex problems into a multitude of simpler ones. As a gamer, I have grown to love understanding complex systems. As a deutan, I have always nurtured my unique perspective. As a devil's advocate, I have taken a liking into seeing the world through a different prism to get a better understanding of my surroundings."
                    : "En tant que développeur web, j'ai amélioré ma capacité a déstructurer des problèmes complexes en une multitude de problèmes simples. En tant que gamer, j'ai su apprécier la comprehension de systèmes complexes. En tant que deutéranope, j'ai depuis toujours cultivé ma différence de point de vue. En tant qu'avocat du diable, j'ai pu prendre plaisir à voir le monde sous un prisme différent du miens afin de mieux comprendre mon environnement."
                }
            </p>
        </section>
    )
}