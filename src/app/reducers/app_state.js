import { actions } from '../constants';

export default (state = [], action) => {
    switch(action.type){
        case actions.APP_LOADING_FINISHED:
            state = {
                ...state,
                loading: false
            };
            break;
        case actions.APP_LOADING_START:
            state = {
                ...state,
                loading: true
            };
        default:
            break;
    }

    return state;
};
