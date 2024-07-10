import "./_index.scss"
import React from "react";
import Tag from "../Tag/Index";
import { useSelector } from "react-redux";
import { selectLang } from "../../store/slices/langSlice/selectors";
import { selectTime } from "../../store/slices/timeSlice/selectors";

export default function Project({ imgSrc, title, descriptionEn, descriptionFr, tags, url, isLive }) {
    const lang = useSelector(selectLang)
    const time = useSelector(selectTime)
    return (
        <article tabIndex="0" className={"project"}>
            <div className="project__wrapper">
                <img className="project__img" src={imgSrc} alt={title} />
                <div className={`project__textWrapper ${time === "day" ? "light" : ""}`}>
                    <h3 className="project__title" >{title}</h3>
                    <p className="project__description">{lang === "en" ? descriptionEn : descriptionFr}</p>
                    <h4 className="project__title">{lang === "en" ? "Technologies used for this project:" : "Technologies utilisées lors de ce projet:"}</h4>
                    <ul className="project__tags" >
                        {tags.map((tag, tagIndex) => (
                            <Tag key={tagIndex} content={tag} />
                        ))}
                    </ul>
                    {isLive ?
                        <a tabIndex="0"
                            aria-label={lang === "en" ?
                                "Press here to see this project on Github"
                                : "Appuyez içi pour voir le projet en détails sur Github"}
                            href={url} target="_blank"
                            className="project__link project__link--live" >
                            <span aria-hidden="true" >{lang === "en" ? "Look it up on Github" : "Voir le projet en détails sur Github"}</span>
                            <img aria-hidden="true" src="/github.svg" alt="Github" />
                        </a>
                        :
                        <div className="project__link">
                            <span>Coming soon on</span>
                            <img src="/github.svg" alt="Github" />
                        </div>
                    }
                </div>
            </div>
        </article>
    );
}