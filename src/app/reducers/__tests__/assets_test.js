import store, { actions } from '../assets';

describe('src/app/reducers/assets.js', () => {

    it('handles the initial state', () => {
        const state = store(undefined, {});
        expect(state.assets).to.be.empty;
        expect(state.selectedAsset).to.be.null;
    });

    it('handles ' + actions.ASSETS_RECEIVED, () => {
        const assets = Factory.buildList('asset', 10);
        const state = store({ assets: []}, {
            type: actions.ASSETS_RECEIVED,
            assets: assets
        });

        expect(state).to.have.ownProperty('assets');
        expect(state.assets).to.have.length(assets.length);
        state.assets.forEach( (asset) => {
            expect(assets.indexOf(asset)).to.not.be.equal(-1);
        });
    });

    it('handles ' + actions.ASSET_SELECTED, () => {
        const asset = Factory.build('asset');
        const state = store({}, {
            type: actions.ASSET_SELECTED,
            asset: asset
        });
        expect(state.selectedAsset).to.be.equal(asset);
    });

});
