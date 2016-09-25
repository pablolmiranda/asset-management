import { combineReducers } from 'redux';
import appState from './app_state';
import assets from './assets';
import assetSelected from './asset_selected';

const AssetManager = combineReducers({
    appState,
    assets,
    assetSelected
});

export default AssetManager;
