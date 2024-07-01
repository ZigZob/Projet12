import React from "react";
import Tag from "../tag/Tag";
import { useSelector } from "react-redux";
import { selectLang } from "../../store/slices/langSlice/selectors";
import "./_index.scss"
import { selectTime } from "../../store/slices/timeSlice/selectors";

export default function Project({ imgSrc, title, descriptionEn, descriptionFr, tags, url }) {
    const lang = useSelector(selectLang)
    const time = useSelector(selectTime)
    return (
        <li className={"project"}>
            <div className="project__Wrapper">
                <img className="project__img" src={imgSrc} alt={title} />
                <div className={`project__textWrapper ${time === "day" ? "light" : ""}`}>
                    <h3 className="project__title" >{title}</h3>
                    <p className="project__description">{lang === "en" ? descriptionEn : descriptionFr}</p>
                    <h4 className="project__title">{lang === "en" ? "Technologies used for this project:" : "Technologies utilisées lors de ce projet:"}</h4>
                    <ul>
                        {tags.map((tag, tagIndex) => (
                            <Tag key={tagIndex} content={tag} />
                        ))}
                    </ul>
                    <a href={url} target="_blank" className="project__link" >
                        <span>{lang === "en" ? "Look it up on Github" : "Voir le projet en détail sur Github"}</span>
                        <img src="/github.svg" alt="Github" />
                    </a>
                </div>
            </div>

        </li>
    );
}