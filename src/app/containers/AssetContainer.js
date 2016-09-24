import React from 'react';
import Asset from '../components/Asset';
import AssetThumbList from '../components/AssetThumbList';

let AssetContainer = ({ asset, assetList, onClickAsset }) => {
    var hasSelectedAsset = !!asset,
        hasAssetList = assetList.length > 0,
        shouldShowList = !hasSelectedAsset && hasAssetList;

    return (
        <div className="asset-container">
            {hasSelectedAsset &&
                <Asset asset={asset} onClickClose={onClickAsset}/>
            }
            { shouldShowList &&
                <AssetThumbList assets={assetList} onClickAsset={onClickAsset}/>
            }
        </div>
    );
};

export default AssetContainer;
