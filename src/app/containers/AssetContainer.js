import React from 'react';
import Asset from '../components/Asset';
import AssetThumbList from '../components/AssetThumbList';
import { connect } from 'react-redux';
import { selectAsset, incrementPageIndex } from '../actions';

/**
 * This container will be responsible to render the asset thumb list or a specific asset.
 * When the user select an asset, the container will render the asset information instead of
 * the asset thumb list.
 * This container is responsible to query multiple app states the propagate it to children components.
 */
const AssetContainer = ({ asset, assets, selectedAssetIndex, selectAsset, pageIndex, incrementPageIndex }) => {
    var hasSelectedAsset = !!asset,
        hasAssetList = assets.length > 0,
        shouldShowList = !hasSelectedAsset && hasAssetList;

    return (
        <div className="asset-container">
            {hasSelectedAsset &&
                <Asset asset={asset}
                    onClickClose={selectAsset}/>
            }
            { shouldShowList &&
                <AssetThumbList
                    assets={assets}
                    onClickAsset={selectAsset}
                    selectedAssetIndex={selectedAssetIndex}
                    numPages={pageIndex}
                    onClickLoadMore={incrementPageIndex}
                    />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        assets: state.assets[state.selectedAssetIndex] || [],
        asset: state.assetSelected,
        selectedAssetIndex: state.selectedAssetIndex,
        pageIndex: state.pageIndex
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        selectAsset: (asset) => {
            dispatch(selectAsset(asset));
        },
        incrementPageIndex: () => {
            dispatch(incrementPageIndex());
        }
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(AssetContainer);

export default Container;
