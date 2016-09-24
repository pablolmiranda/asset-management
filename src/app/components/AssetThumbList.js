import React from 'react';
import AssetThumb from './AssetThumb';

const AssetThumbList = ({assets, onClickAsset}) => {
    return (
        <div className="asset-list">
            <ul>
                {assets.map((asset, index) => {
                    return (
                        <AssetThumb key={index} asset={asset} onClick={onClickAsset}/>
                    );
                })}
            </ul>
        </div>
    );
};

export default AssetThumbList;
