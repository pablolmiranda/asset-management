import React from 'react';

const AssetThumbList = ({assetList, onClickAsset}) => {
    return (
        <div className="asset-list">
            <ul>
                {assetList.map((asset, index) => {
                    return (
                        <li key={index} className="asset">
                            <img src={asset.thumbnailUrl} onClick={() => onClickAsset(asset)}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default AssetThumbList;
