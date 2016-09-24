import zipObject from 'lodash/zipObject';

let actions = [
    'APP_LOADING_FINISHED'
];

actions = zipObject(actions, actions);

export {actions};

export default (state = {}, action) => {
    switch(action.type){
        case actions.APP_LOADING_FINISHED:
            state = {
                ...state,
                loading: action.loading
            };
            break;
        case actions.APP_LOADING_START:
            state = {
                ...state,
                loading: action.loading
            };
        default:
            break;
    }

    return state;
};
