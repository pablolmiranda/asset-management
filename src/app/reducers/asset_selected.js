import { actions } from '../constants';

export default (state = null, action) => {
    switch(action.type) {
        case actions.ASSET_SELECTED:
            return action.asset;
        default:
            return state;
    }
};
