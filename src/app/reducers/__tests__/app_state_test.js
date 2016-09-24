import appState, { actions } from '../app_state';
import { expect } from 'chai';

describe('src/app/reducers/app_state', () => {

    it('handles the initial state', () => {
        expect(appState(undefined, {})).to.include({});
    });

    it('handles APP_LOADING_START', () => {
        expect(appState({ loading: false }, {
            type: actions.APP_LOADING_START,
            loading: true
        })).to.include({
            loading: true
        });
    });

    it('handles APP_LOADING_FINISHED', () => {
        expect(appState({}, {
            type: actions.APP_LOADING_FINISHED,
            loading: false
        })).to.include({
            loading: false
        });
    });

});
