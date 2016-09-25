import zipObject from 'lodash/zipObject';

let actions = [
    'APP_LOADING_FINISHED',
    'APP_LOADING_START',
    'ASSET_SELECTED',
    'ASSETS_RECEIVED',
    'SELECT_ASSET_INDEX'
];

actions = zipObject(actions, actions);

export {actions};

export const assetIndexKeys = ['languageCode', 'movieName'];
