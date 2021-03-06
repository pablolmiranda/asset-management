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

AssetContainer.propTypes = {
    asset: React.PropTypes.object,
    assets: React.PropTypes.array.isRequired,
    selectedAssetIndex: React.PropTypes.string,
    selectAsset: React.PropTypes.func,
    pageIndex: React.PropTypes.number,
    incrementPageIndex: React.PropTypes.func
};

const mapStateToProps = (state) => {
    const query = state.assets.query;
    let assets = state.assets[state.selectedAssetIndex];
    if (query && query.length > 0) {
        assets = query;
    }

    return {
        assets:  assets || [],
        asset: state.assetSelected,
        selectedAssetIndex: state.selectedAssetIndex,
        pageIndex: state.pageIndex,
        queryString: state.assets.queryString
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
