import { actions } from '../../constants';
import store from '../page_index.js';

const INCREMENT_ACTION = { type: actions.INCREMENT_PAGE_INDEX};

describe('src/app/reducers/page_index.js', () => {

    it('handles the initial state', function() {
        expect(store(null, {})).to.be.equal(1);
    });

    it('handles ' + actions.INCREMENT_PAGE_INDEX + ' action', () => {
        expect(store(1, INCREMENT_ACTION)).to.be.equal(2);
    });

    it('handles ' + actions.SELECT_ASSET_INDEX + ' action', () => {
        var selectIndexAction = {
                type: actions.SELECT_ASSET_INDEX,
                index: 'movieName'
            },
            state = store(2, selectIndexAction);

        expect(state).to.be.equal(1);

        state = store(state, INCREMENT_ACTION);
        expect(state).to.be.equal(2);

        selectIndexAction.index = 'languageCode';
        state = store(state, selectIndexAction);
        expect(state).to.be.equal(1);
    });

    it('resets the page on ' + actions.ASSET_INDEX_QUERY + ' action', () => {
        expect(store(10, {
            type: actions.ASSET_INDEX_QUERY,
            query: 'marco',
            assetIndex: 'movieName'
        }));
    });

    it('doesnt reset page index in case of invalid asset index', () => {
        expect(store(2, {
            type: actions.SELECT_ASSET_INDEX,
            index: 'invalidIndex'
        })).to.not.equal(1);
    });

});
