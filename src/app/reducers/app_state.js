import { actions } from '../constants';

/**
 * Save the state of the app.
 * Indicate the app is trying to loading assets from the API layer.
 */
export default (state = {}, action) => {
    switch(action.type){
        case actions.ASSETS_REQUEST_STARTED:
            state = {
                ...state,
                loading: true
            };
            break;
        case actions.ASSETS_REQUEST_FINISHED:
            state = {
                ...state,
                loading: false
            };
            break;
    }

    return state;
};
