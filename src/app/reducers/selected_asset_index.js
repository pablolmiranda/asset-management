import { actions, assetIndexKeys } from '../constants';

export default (state, action) => {
    switch(action.type) {
        case actions.SELECT_ASSET_INDEX:

            if (assetIndexKeys.indexOf(action.index) === -1) {
                break;
            }

            state = action.index;
            break;
    }

    return state || 'movieName';
};
