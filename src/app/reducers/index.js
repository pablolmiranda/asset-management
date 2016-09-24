import { combineReducers } from 'redux';
import appState from './app_state';
import assets from './assets';

const AssetManager = combineReducers({
    appState,
    assets
});

export default AssetManager;
