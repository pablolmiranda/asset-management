import zipObject from 'lodash/zipObject';

let actions = [
    'APP_LOADING_FINISHED',
    'APP_LOADING_START',
    'ASSET_SELECTED',
    'ASSETS_RECEIVED'
];

actions = zipObject(actions, actions);

export {actions};
