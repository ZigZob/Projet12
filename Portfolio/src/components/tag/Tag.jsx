import React from 'react';
import "./_index.scss"

export default function Tag({ content }) {

    return (
        <img className="tag" src={`/${content}.svg`} alt={content} aria-label={content} title={content} />
    );
};