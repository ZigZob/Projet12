import React from "react"
import { useSelector } from "react-redux"
import "./_index.scss"
import { selectLang } from "../../store/slices/langSlice/selectors"
import { skillsList } from "../../assets/data"
import Skill from "../../components/skill-folder/skill_index"

export default function Skills() {
    const lang = useSelector(selectLang)
    return (
        <section tabIndex={0} className="skills" >
            <h2 tabIndex="0" className="skills__header" >{lang === "en" ? "Skills I've developed :" : "Compétences appliquées :"}</h2>
            <ul className="skills__list" >
                {skillsList[lang].map((skill, index) => (
                    <Skill key={index} content={skill[0]} emphasis={skill[1]} add={skill[2]} />
                ))}
            </ul>
        </section>
    )
}