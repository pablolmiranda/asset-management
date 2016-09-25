import { actions } from '../../constants';
import store from '../asset_selected';

describe('src/app/reducers/asset_selected.js', () => {

    it('handles initial state', () => {
        expect(store(undefined, {})).to.be.null;
    });

    it('handles ' + actions.ASSET_SELECTED, () => {
        const asset = Factory.build('asset');
        expect(store(null, {
            type: actions.ASSET_SELECTED,
            asset: asset
        })).to.be.equal(asset);
    });

});
