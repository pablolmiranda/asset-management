import { actions, assetIndexKeys } from '../constants';
import sortBy from 'lodash/sortBy';

export default (state = {}, action) => {
    let results,
        searchIndex,
        query,
        searchableCollection;

    switch (action.type) {
        case actions.ASSETS_RECEIVED:
            action.assets.forEach((asset) => {
                assetIndexKeys.forEach((key) => {
                    if (!state[key]) {
                        state[key] = [];
                    }

                    state[key].push(asset);
                });
            });

            assetIndexKeys.forEach((key) => {
                state[key] = sortBy(state[key], [key]);
            });
            break;

        case actions.ASSET_INDEX_QUERY:
            results = [];
            // Cleans the search in case of empty query
            if (action.query !== '') {
                searchIndex = action.assetIndex;
                query = new RegExp(action.query, 'i');

                searchableCollection = state[searchIndex];

                if (searchableCollection) {
                    results = searchableCollection.filter( (asset) => {
                        return query.test(asset[searchIndex]);
                    });
                }
            }

            state = {
                ...state,
                query: results,
                queryString: action.query
            };
            break;
        case actions.SELECT_ASSET_INDEX:
            state = {
                ...state,
                query: [],
                queryString: ''
            };
            break;
        default:
            break;
    }

    return state;
};
