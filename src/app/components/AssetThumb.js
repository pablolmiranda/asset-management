import React from 'react';

const AssetThumb = ({ asset, onClick }) => {
    return (
        <li className="asset-thumb">
            <img src={asset.thumbnailUrl} onClick={() => onClick(asset)}/>
        </li>
    );
};

export default AssetThumb;
