import './_index.scss';
import React from "react";
import Project from "../../components/project/index";
import { useSelector } from "react-redux";
import { selectTime } from "../../store/slices/timeSlice/selectors";
import { database, gamingProjects, professionalProjects } from "../../assets/projectData";
import { selectKey } from "../../store/selectors";

export default function Projects() {
    const time = useSelector(selectTime);
    const key = useSelector(selectKey)

    return (
        <section className="projects" >
            <h2 tabIndex={4} className="projects__header" >{database[key].heading2}</h2>
            <ul className="projects__list" >
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
                        id={project.id}
                    />
                ))}
            </ul>
        </section>
    );
}