import { actions } from '../../constants';
import {
    fetchAssets,
    incrementPageIndex,
    searchAssetByIndex,
    selectAsset,
    selectAssetIndex
} from '..';
import { Response } from 'node-fetch';
import sinon from 'sinon';

describe('src/app/actions/index.js', () => {

    describe('selectAsset', () => {

        it('returns a ' + actions.ASSET_SELECTED + ' action', () => {
            const asset = Factory.build('asset');
            expect(selectAsset(asset)).to.include({
                type: actions.ASSET_SELECTED,
                asset: asset
            });
        });

    });

    describe('selectAssetIndex', () => {

        it('returns a ' + actions.SELECT_ASSET_INDEX + ' action', () => {
            expect(selectAssetIndex('movieName')).to.include({
                type: actions.SELECT_ASSET_INDEX,
                index: 'movieName'
            });
        });

    });

    describe('incrementPageIndex', () => {

        it('returns a ' + actions.INCREMENT_PAGE_INDEX + ' action', () => {
            expect(incrementPageIndex()).to.include({
                type: actions.INCREMENT_PAGE_INDEX
            });
        });

    });

    describe('searchAssetByIndex', () => {

        it('returns a ' + actions.ASSET_INDEX_QUERY + ' action', () => {
            expect(searchAssetByIndex('movieName', 'marco')).to.include({
                type: actions.ASSET_INDEX_QUERY,
                assetIndex: 'movieName',
                query: 'marco'
            });
        });

    });

    describe('fetchAssets', () => {

        let assets, fetchMock, responseMock;

        beforeEach(() => {
            assets = Factory.buildList('asset', 2);
            responseMock = new Response(JSON.stringify(assets), {
                status: 200,
                headers: {
                    'Content-type': 'application/json'
                }
            });
            fetchMock = sinon.stub().returns(Promise.resolve(responseMock));
            global.fetch = fetchMock;
        });

        it('dispatchs actions related to request lifecycle before fetch assets', () => {
            const dispatch = sinon.spy();
            const invoker = fetchAssets();

            return invoker(dispatch).then(() => {
                expect(dispatch.callCount).to.be.equal(3);

                // First action ASSETS_REQUEST_STARTED
                expect(dispatch.getCall(0).args[0]).to.include({
                    type: actions.ASSETS_REQUEST_STARTED
                });

                // Second action ASSETS_RECEIVED with the request data
                expect(dispatch.getCall(1).args[0]).to.include({
                    type: actions.ASSETS_RECEIVED,
                });
                dispatch.getCall(1).args[0].assets.forEach(asset => {
                    expect(assets).to.be.contain(asset);
                });

                expect(dispatch.getCall(2).args[0]).to.include({
                    type: actions.ASSETS_REQUEST_FINISHED
                });

            });

        });

    });

});
