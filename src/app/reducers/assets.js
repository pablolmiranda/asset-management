import { actions } from '../constants';

export default (state = [], action) => {

    switch (action.type) {
        case actions.ASSETS_RECEIVED:
            state = [...state, ...action.assets];
            break;
        default:
            break;
    }

    return state;
};
