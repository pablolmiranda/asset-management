import zipObject from 'lodash/zipObject';

let actions = [
    'ASSET_SELECTED',
    'ASSETS_RECEIVED'
];

actions = zipObject(actions, actions);

export { actions };

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
