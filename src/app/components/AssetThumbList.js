import React from 'react';
import AssetThumb from './AssetThumb';
import AssetSectionName from './AssetSectionName';

const RENDER_PAGE_SIZE = 10;

/**
 * Render the list of assets thumbnails.
 * The list will be renderd by pages. It allows users to progressively load the assets as they need.
 * The assets will be organized by section. The section is the index used to sort the assets
 * ( movieName, languageCode ).
 */
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

AssetThumbList.propTypes = {
    assets: React.PropTypes.array.isRequired,
    selectedAssetIndex: React.PropTypes.string.isRequired,
    numPages: React.PropTypes.number.isRequired,
    onClickAsset: React.PropTypes.func,
    onClickLoadMore: React.PropTypes.func
};

export default AssetThumbList;
