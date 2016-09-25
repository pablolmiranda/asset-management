import zipObject from 'lodash/zipObject';

let actions = [
    // Asset load states
    'ASSETS_REQUEST_STARTED',
    'ASSETS_REQUEST_FINISHED',

    // Asset UI states
    'ASSET_SELECTED',
    'ASSETS_RECEIVED',
    'SELECT_ASSET_INDEX',
    'ASSET_INDEX_QUERY',

    // Page index
    'INCREMENT_PAGE_INDEX'
];

actions = zipObject(actions, actions);

export {actions};

export const assetIndexKeys = ['languageCode', 'movieName'];
