/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import App from './components/AssetManagement';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const el = window.document.getElementById('app');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    el
);
