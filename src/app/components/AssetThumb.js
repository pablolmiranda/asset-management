import React from 'react';

const AssetThumb = ({ asset, onClick }) => {
    return (
        <li className="asset-thumb">
            <img src={asset.thumbnailUrl} onClick={() => onClick(asset)}/>
        </li>
    );
};

AssetThumb.propTypes = {
    asset: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func
};

export default AssetThumb;
