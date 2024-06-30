import React from "react";
import Tag from "../tag/Tag";
import { useSelector } from "react-redux";
import { selectLang } from "../../store/slices/langSlice/selectors";
import "./_index.scss"

export default function Project({ imgSrc, title, descriptionEn, descriptionFr, tags }) {
    const lang = useSelector(selectLang)
    return (
        <li className={"project"}>
            <div className="project__Wrapper">
                <img className="project__img" src={imgSrc} alt={{ title }} />
                <div className="project__textWrapper">
                    <h3 className="project__title" >{title}</h3>
                    <p className="project__description">{lang === "en" ? descriptionEn : descriptionFr}</p>
                    <h4 className="project__title">{lang === "en" ? "Technologies used for this project:" : "Technologies utilisées lors de ce projet:"}</h4>
                    <ul>
                        {tags.map((tag, tagIndex) => (
                            <Tag key={tagIndex} content={tag} />
                        ))}
                    </ul>
                </div>
            </div>

        </li>
    );
}