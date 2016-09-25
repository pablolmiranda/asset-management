import React from 'react';
import Asset from '../components/Asset';
import AssetThumbList from '../components/AssetThumbList';
import { connect } from 'react-redux';
import { selectAsset } from '../actions';

const AssetContainer = ({ asset, assets, selectedAssetIndex, onSelectAsset }) => {
    var hasSelectedAsset = !!asset,
        hasAssetList = assets.length > 0,
        shouldShowList = !hasSelectedAsset && hasAssetList;

    return (
        <div className="asset-container">
            {hasSelectedAsset &&
                <Asset asset={asset}
                    onClickClose={onSelectAsset}/>
            }
            { shouldShowList &&
                <AssetThumbList
                    assets={assets}
                    onClickAsset={onSelectAsset}
                    selectedAssetIndex={selectedAssetIndex}
                    />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        assets: state.assets[state.selectedAssetIndex] || [],
        asset: state.assetSelected,
        selectedAssetIndex: state.selectedAssetIndex
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectAsset: (asset) => {
            dispatch(selectAsset(asset));
        }
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(AssetContainer);

export default Container;
