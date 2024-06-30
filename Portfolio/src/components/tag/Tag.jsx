import React, { useEffect, useState } from 'react';

export default function Tag({ content }) {
    const [isIcon, setIsIcon] = useState(false);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        const checkIconExistence = async () => {
            try {
                const response = await fetch(`/${content}.svg`);
                if (response.ok) {
                    setIsIcon(true);
                } else {
                    setIsIcon(false);
                }
            } catch (error) {
                setIsIcon(false);
            }
        };

        checkIconExistence();
    }, [content]);

    const handleImgError = () => {
        setImgError(true);
    };

    return (
        <li>
            {isIcon && !imgError ? (
                <img className={"tag--icon"} src={`/${content}.svg`} alt={content} onError={handleImgError} />
            ) : (
                <span className={"tag--text"}>{content}</span>
            )}
        </li>
    );
};