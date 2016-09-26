/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import App from './components/AssetManagement';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchAssets } from './actions';

require('./styles/app.css');

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

// Fetch the App data from the API layer
store.dispatch(fetchAssets());

const el = window.document.getElementById('app');

// Push the App to the DOM.
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    el
);
