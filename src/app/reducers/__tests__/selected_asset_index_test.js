import store from '../selected_asset_index';
import { actions } from '../../constants';

describe('src/app/reducers/selected_asset_index.js', () => {

    it('handles initial state', () => {
        const state = store(null, {});
        expect(state).to.be.equal('movieName');
    });

    it('handles ' + actions.SELECT_ASSET_INDEX, () => {
        const state = store(null, {
            type: actions.SELECT_ASSET_INDEX,
            index: 'languageCode'
        });
        expect(state).to.be.equal('languageCode');
    });

    it('accepts only white listened keys', function() {
        const state = store(null, {
            type: actions.SELECT_ASSET_INDEX,
            index: 'strangeIndex'
        });
        expect(state).to.be.equal('movieName');
    });

});
