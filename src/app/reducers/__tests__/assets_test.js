import store from '../assets';
import { actions, assetIndexKeys } from '../../constants';

describe('src/app/reducers/assets.js', () => {

    it('handles the initial state', () => {
        const state = store(undefined, {});
        expect(state).to.be.include({});
    });

    it('handles ' + actions.ASSETS_RECEIVED, () => {
        const assets = Factory.buildList('asset', 10);
        const state = store({ assets: []}, {
            type: actions.ASSETS_RECEIVED,
            assets: assets
        });

        assetIndexKeys.forEach((key) => {
            expect(state).to.have.ownProperty(key);
            expect(state[key]).to.have.length(assets.length);
        });
    });

    it('sorts the collection by index key', () => {
        const assets = [
            Factory.build('asset', { languageCode: 'pt', movieName: 'test 2' }),
            Factory.build('asset', { languageCode: 'en', movieName: 'test 1' })
        ];

        const state = store({ assets: []}, {
            type: actions.ASSETS_RECEIVED,
            assets: assets
        });

        expect(state.movieName[0]).to.be.equal(assets[1]);
    });

    it('handles ' + actions.ASSET_INDEX_QUERY, () => {
        const assets = [
            Factory.build('asset', { languageCode: 'en', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'it', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'pt', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'en', movieName: 'House of cards' }),
            Factory.build('asset', { languageCode: 'it', movieName: 'House of cards' }),
            Factory.build('asset', { languageCode: 'pt', movieName: 'House of cards' })
        ];
        let state = store({}, {
            type: actions.ASSETS_RECEIVED,
            assets: assets
        });

        expect(store(state, {
            type: actions.ASSET_INDEX_QUERY,
            assetIndex: 'movieName',
            query: 'orange'
        }).query).to.have.length(3);

        expect(store(state, {
            type: actions.ASSET_INDEX_QUERY,
            assetIndex: 'languageCode',
            query: 'en'
        }).query).to.have.length(2);
    });

    it('cleans search in case of a empty query', () => {
        const assets = [
            Factory.build('asset', { languageCode: 'en', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'it', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'pt', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'en', movieName: 'House of cards' }),
            Factory.build('asset', { languageCode: 'it', movieName: 'House of cards' }),
            Factory.build('asset', { languageCode: 'pt', movieName: 'House of cards' })
        ];

        let state = store({}, {
                type: actions.ASSETS_RECEIVED,
                assets: assets
            }),
            nextState;

        nextState = store(state, {
            type: actions.ASSET_INDEX_QUERY,
            assetIndex: 'movieName',
            query: 'orange'
        });
        expect(nextState.query).to.have.length(3);

        expect(store(nextState, {
            type: actions.ASSET_INDEX_QUERY,
            assetIndex: 'languageCode',
            query: ''
        }).query).to.have.length(0);
    });

    it('cleans the query in case of ' + actions.SELECT_ASSET_INDEX + ' action', () => {
        const assets = [
            Factory.build('asset', { languageCode: 'en', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'it', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'pt', movieName: 'Orange is the new black' }),
            Factory.build('asset', { languageCode: 'en', movieName: 'House of cards' }),
            Factory.build('asset', { languageCode: 'it', movieName: 'House of cards' }),
            Factory.build('asset', { languageCode: 'pt', movieName: 'House of cards' })
        ];

        let state = store({}, {
                type: actions.ASSETS_RECEIVED,
                assets: assets
            }),
            nextState;

        nextState = store(state, {
            type: actions.ASSET_INDEX_QUERY,
            assetIndex: 'movieName',
            query: 'orange'
        });
        expect(nextState.query).to.have.length(3);

        nextState = store(nextState, {
            type: actions.SELECT_ASSET_INDEX,
            index: 'movieName'
        });
        expect(nextState.query).to.have.length(0);
    });

});
