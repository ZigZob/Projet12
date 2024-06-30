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
    const [fadeClass, setFadeClass] = useState('fade-in');
    const [projectsToShow, setProjectsToShow] = useState(time === "night" ? gamingProjects : professionalProjects);
    let key = `${lang}_${time}`

    useEffect(() => {
        // Trigger fade out
        setFadeClass('fade-out');

        // Change content after fade out
        const timer = setTimeout(() => {
            setProjectsToShow(time === "night" ? gamingProjects : professionalProjects);
            // Trigger fade in
            setFadeClass('fade-in');
        }, 300); // Duration of fade-out

        return () => clearTimeout(timer);
    }, [time]);

    return (
        <div>
            <h2>{database[key].heading2}</h2>
            <ul>
                {projectsToShow.map((project, index) => (
                    <Project
                        key={index}
                        imgSrc={project.imgSrc}
                        tags={project.tags}
                        id={project.id}
                        fadeClass={fadeClass}
                    />
                ))}
            </ul>
        </div>
    );
}