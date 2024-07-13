import React from 'react';
import "./_index.scss"

export default function Tag({ content }) {

    return (
        <img className="tag" src={`/Projet12/${content}.svg`} alt={content} aria-label={content} title={content} />
    );
};