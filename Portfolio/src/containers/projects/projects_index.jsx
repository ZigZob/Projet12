import './_index.scss';
import React from "react";
import Project from "../../components/project/project_index.jsx";
import { useSelector } from "react-redux";
import { selectTime } from "../../store/slices/timeSlice/selectors.js";
import { database, gamingProjects, professionalProjects } from "../../assets/data.js";
import { selectKey } from "../../store/selectors.js";

export default function Projects() {
    const time = useSelector(selectTime);
    const key = useSelector(selectKey)

    return (
        <section className="projects" >
            <h2 tabIndex="0" className="projects__header" >{database[key].heading2}</h2>
            <div className="projects__list" >
                {(time === "night" ? gamingProjects : professionalProjects).map((project, index) => (
                    <Project
                        key={index}
                        imgSrc={project.imgSrc}
                        tags={project.tags}
                        title={project.title}
                        descriptionEn={project.descriptionEn}
                        descriptionFr={project.descriptionFr}
                        url={project.url}
                        isLive={project.isLive}
                    />
                ))}
            </div>
        </section>
    );
}