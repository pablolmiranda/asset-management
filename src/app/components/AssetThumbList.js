import React from 'react';
import AssetThumb from './AssetThumb';
import AssetSectionName from './AssetSectionName';

const AssetThumbList = ({assets, selectedAssetIndex, onClickAsset}) => {
    var lastSectionId = null;
    return (
        <div className="asset-list">
            <ul>
                {assets.reduce((acc, asset, index) => {
                    if (asset[selectedAssetIndex] !== lastSectionId) {
                        acc.push(
                            <AssetSectionName
                                key={'section-' + asset[selectedAssetIndex]}
                                asset={asset}
                                sectionId={selectedAssetIndex} />);
                        lastSectionId = asset[selectedAssetIndex];
                    }
                    acc.push(<AssetThumb key={index} asset={asset} onClick={onClickAsset}/>);
                    return acc;
                }, [])}
            </ul>
        </div>
    );
};

export default AssetThumbList;
