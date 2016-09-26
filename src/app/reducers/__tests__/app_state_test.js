import appState from '../app_state';
import { actions } from '../../constants';
import { expect } from 'chai';

describe('src/app/reducers/app_state', () => {

    it('handles the initial state', () => {
        expect(appState(undefined, {})).to.include({});
    });

    it('handles ' + actions.ASSETS_REQUEST_STARTED, () => {
        expect(appState({ loading: false }, {
            type: actions.ASSETS_REQUEST_STARTED
        })).to.include({
            loading: true
        });
    });

    it('handles ' + actions.ASSETS_REQUEST_FINISHED, () => {
        expect(appState({}, {
            type: actions.ASSETS_REQUEST_FINISHED
        })).to.include({
            loading: false
        });
    });

});
