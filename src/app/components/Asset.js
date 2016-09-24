import React from 'react';

const Asset = ({asset, onClickClose}) => {
    return (
        <div className="asset">
            <a name="close" onClick={() => onClickClose(null)}>Close</a>
            <div>Movie id: {asset.movieId}</div>
            <div>Movie name: {asset.movieName}</div>
            <div>Image type: {asset.imageType}</div>
            <div>Language code: {asset.languageCode}</div>
            <img src={asset.fullSizeImageUrl}></img>
        </div>
    );
};

export default Asset;
