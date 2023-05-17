// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import reducers from './modules/reducers';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const root = createRoot(document.querySelector('#root'));
root.render(
<Provider store={store}>
    <App />
</Provider>
);
