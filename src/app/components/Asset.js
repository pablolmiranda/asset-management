import React from 'react';

const Asset = ({asset, onClickClose}) => {
    return (
        <div className="asset">
            <a className="closeBtn" name="close" onClick={() => onClickClose(null)}>Back</a>
            <div className="info movieId"><strong>Movie id</strong>: {asset.movieId}</div>
            <div className="info movieName"><strong>Movie name</strong>: {asset.movieName}</div>
            <div className="info imageType"><strong>Image type</strong>: {asset.imageType}</div>
            <div className="info languageCode"><strong>Language code</strong>: {asset.languageCode}</div>
            <img className="info fullsizeImg" src={asset.fullSizeImageUrl}></img>
        </div>
    );
};

export default Asset;
