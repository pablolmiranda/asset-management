import { actions, assetIndexKeys } from '../constants';
import sortBy from 'lodash/sortBy';

export default (state = {}, action) => {

    switch (action.type) {
        case actions.ASSETS_RECEIVED:
            action.assets.forEach((asset) => {
                assetIndexKeys.forEach((key) => {
                    if (!state[key]) {
                        state[key] = [];
                    }

                    state[key].push(asset);
                });
            });

            assetIndexKeys.forEach((key) => {
                state[key] = sortBy(state[key], [key]);
            });

            break;
        default:
            break;
    }

    return state;
};
