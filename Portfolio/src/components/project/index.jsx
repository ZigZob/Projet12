import React from "react";
import Tag from "../tag/Tag";

export default function Project({ imgSrc, id, tags, fadeClass }) {
    return (
        <li className={`projectWrapper fade ${fadeClass} ${id % 2 === 0 ? "even" : "odd"}`}>
            <img className="img" src={imgSrc} alt={`Project ${id}`} />
            <ul>
                {tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} content={tag} />
                ))}
            </ul>
        </li>
    );
}