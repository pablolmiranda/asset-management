import React from 'react';
import Asset from '../components/Asset';
import AssetThumbList from '../components/AssetThumbList';
import { connect } from 'react-redux';

const AssetContainer = ({ asset, assets, onClickAsset }) => {
    var hasSelectedAsset = !!asset,
        hasAssetList = assets.length > 0,
        shouldShowList = !hasSelectedAsset && hasAssetList;

    return (
        <div className="asset-container">
            {hasSelectedAsset &&
                <Asset asset={asset} onClickClose={onClickAsset}/>
            }
            { shouldShowList &&
                <AssetThumbList assets={assets} onClickAsset={onClickAsset}/>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    assets: state.assets
});

const Container = connect(mapStateToProps, null)(AssetContainer);

export default Container;
