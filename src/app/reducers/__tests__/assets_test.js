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

});
