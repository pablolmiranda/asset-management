import { actions } from '../constants';

/**
 * Async action to fetch assets.
 * This action will request asset from the API layer.
 * It will dispatch three actions related to the request lifecycle:
 *  - ASSETS_REQUEST_STARTED just before the request start
 *  - ASSETS_RECEIVED when the assets be received
 *  - ASSETS_REQUEST_FINISHED after the assets be received and marks end of the async action
 *
 * @return [Redux Actions] - Multiple redux actions related to request lifecycle
 */
export const fetchAssets = () => {
    return (dispatch) => {
        dispatch({
            type: actions.ASSETS_REQUEST_STARTED
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
                    type: actions.ASSETS_REQUEST_FINISHED
                });
            });
    };
};

/**
 * Select one of the asset to be rendered.
 * That will show all the informations about the asset.
 *
 * @param {object} asset - Asset object
 * @return {Redux Action} - Redux action to select the asset
 */
export const selectAsset = (asset) => {
    return {
        type: actions.ASSET_SELECTED,
        asset: asset
    };
};

/**
 * Select the index the UI should render.
 * The UI will the the indexed collection based on this index.
 * Asset indexes are based on the attributes of the asset object.
 *
 * @param {string} assetIndex - The asset index name
 * @return {Redux Action} - Redux action to select the asset index
 */
export const selectAssetIndex = (assetIndex) => {
    return {
        type: actions.SELECT_ASSET_INDEX,
        index: assetIndex
    };
};

/**
 * Increment the page index.
 * It will force the UI to render one more page of results
 *
 * @return {Redux Action} - Redux actino to increment the page index
 */
export const incrementPageIndex = () => {
    return {
        type: actions.INCREMENT_PAGE_INDEX
    };
};
