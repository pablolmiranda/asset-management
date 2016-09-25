import { combineReducers } from 'redux';
import appState from './app_state';
import assets from './assets';
import assetSelected from './asset_selected';
import selectedAssetIndex from './selected_asset_index';
import pageIndex from './page_index';

const AssetManager = combineReducers({
    appState,
    assets,
    assetSelected,
    selectedAssetIndex,
    pageIndex
});

export default AssetManager;
