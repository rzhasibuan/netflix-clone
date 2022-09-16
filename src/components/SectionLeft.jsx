import React from 'react';

function SectionLeft({title, content, image}) {
    return (
        <section className="nikmati-tv">
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
            </article>
            <div className="thumbnail-tv">
                <img src={image} alt=""/>
            </div>
        </section>
    );
}

export default SectionLeft;