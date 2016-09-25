import { actions, assetIndexKeys } from '../constants';

let lastAssetIndex = null;

export default (state = 1, action) => {
    switch(action.type) {
        case actions.INCREMENT_PAGE_INDEX:
            return state + 1;
        case actions.SELECT_ASSET_INDEX:

            // Protect against unsupported index
            if(assetIndexKeys.indexOf(action.index) < 0) {
                return state;
            }

            if (lastAssetIndex !== action.index) {
                lastAssetIndex = action.index;
                return 1;
            }
    }

    return state || 1;
};
