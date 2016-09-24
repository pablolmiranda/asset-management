import appState from '../app_state';
import { actions } from '../../constants';
import { expect } from 'chai';

describe('src/app/reducers/app_state', () => {

    it('handles the initial state', () => {
        expect(appState(undefined, {})).to.include({});
    });

    it('handles ' + actions.APP_LOADING_START, () => {
        expect(appState({ loading: false }, {
            type: actions.APP_LOADING_START
        })).to.include({
            loading: true
        });
    });

    it('handles ' + actions.APP_LOADING_FINISHED, () => {
        expect(appState({}, {
            type: actions.APP_LOADING_FINISHED
        })).to.include({
            loading: false
        });
    });

});
