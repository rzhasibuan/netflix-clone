import React from 'react';

function CardDownload({cardImgPoster, titleCard, linkCardDownload, iconCardDownload}) {
    return (
        <div className="card">
            <div className="card-item">
                <div className="card-poster">
                    <img src={cardImgPoster} alt=""/>
                </div>
                <div className="card-body">
                    <p>{titleCard}</p>
                    <a href={linkCardDownload}>Men-download...</a>
                </div>
                <div className="card-side">
                    <img src={iconCardDownload} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default CardDownload;