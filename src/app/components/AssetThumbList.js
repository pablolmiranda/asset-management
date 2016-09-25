import React from 'react';
import AssetThumb from './AssetThumb';
import AssetSectionName from './AssetSectionName';

const RENDER_PAGE_SIZE = 10;

const AssetThumbList = ({assets, selectedAssetIndex, numPages, onClickAsset, onClickLoadMore}) => {
    var lastSectionId = null,
        numElementsToRender = RENDER_PAGE_SIZE * numPages,
        showLoadMoreButton = numElementsToRender < assets.length;

    return (
        <div className="asset-list">
            <ul>
                {assets.slice(0, numElementsToRender).reduce((acc, asset, index) => {
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
            { showLoadMoreButton &&
                <button onClick={onClickLoadMore}>Load More</button>

            }
        </div>
    );
};

export default AssetThumbList;
