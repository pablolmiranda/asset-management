import { actions } from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case actions.ASSETS_RECEIVED:
            state = {
                ...state,
                assets: [...state.assets, ...action.assets]
            };
            break;
        case actions.ASSET_SELECTED:
            state = {
                ...state,
                selectedAsset: action.asset
            };
            break;
        default:
            state = {
                assets: [],
                selectedAsset: null
            };
            break;
    }

    return state;
};
