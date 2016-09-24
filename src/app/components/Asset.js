import React from 'react';

const Asset = ({asset, onClickClose}) => {
    return (
        <div className="asset">
            <a className="closeBtn" name="close" onClick={() => onClickClose(null)}>Close</a>
            <div className="movieId">Movie id: {asset.movieId}</div>
            <div className="movieName">Movie name: {asset.movieName}</div>
            <div className="imageType">Image type: {asset.imageType}</div>
            <div className="languageCode">Language code: {asset.languageCode}</div>
            <img className="fullsizeImg" src={asset.fullSizeImageUrl}></img>
        </div>
    );
};

export default Asset;
