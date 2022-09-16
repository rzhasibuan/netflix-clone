import React from 'react';
import CardDownload from "./CardDownload";

function SectionRight({imgDownload, cardImgPoster, titleCard, linkCardDownload, iconCardDownload, title, content}) {
    return (
        <section className="download-acara">
            <div className="thumbnail-download">
                <img src={imgDownload} alt=""/>
                <CardDownload
                    cardImgPoster={cardImgPoster}
                    titleCard={titleCard}
                    iconCardDownload={iconCardDownload}
                    linkCardDownload={linkCardDownload} />
            </div>
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
            </article>
        </section>
    );
}

export default SectionRight;