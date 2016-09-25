import { actions } from '../constants';

export const fetchAssets = () => {
    return (dispatch) => {
        dispatch({
            type: actions.APP_LOADING_START,
            loading: true
        });

        return fetch('/api/movies')
            .then((response) => {
                return response.json();
            })
            .then((assets) => {
                dispatch({
                    type: actions.ASSETS_RECEIVED,
                    assets: assets
                });

                dispatch({
                    type: actions.APP_LOADING_FINISHED
                });
            });
    };
};

export const selectAsset = (asset) => {
    return {
        type: actions.ASSET_SELECTED,
        asset: asset
    };
};

export const selectAssetIndex = (assetIndex) => {
    return {
        type: actions.SELECT_ASSET_INDEX,
        index: assetIndex
    };
};
