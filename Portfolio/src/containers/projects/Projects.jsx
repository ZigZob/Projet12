import React, { useEffect, useState } from "react";
import Project from "../../components/project/index";
import './_index.scss';
import { useSelector } from "react-redux";
import { selectTime } from "../../store/slices/timeSlice/selectors";
import { database, gamingProjects, professionalProjects } from "../../assets/projectData";
import { selectLang } from "../../store/slices/langSlice/selectors";

export default function Projects() {
    const time = useSelector(selectTime);
    const lang = useSelector(selectLang);
    let key = `${lang}_${time}`

    return (
        <div>
            <h2>{database[key].heading2}</h2>
            <ul>
                {(time === "night" ? gamingProjects : professionalProjects).map((project, index) => (
                    <Project
                        key={index}
                        imgSrc={project.imgSrc}
                        tags={project.tags}
                        title={project.title}
                        descriptionEn={project.descriptionEn}
                        descriptionFr={project.descriptionFr}
                    />
                ))}
            </ul>
        </div>
    );
}