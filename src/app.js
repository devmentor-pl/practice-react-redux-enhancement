// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import store from './modules/github';
import { Provider } from 'react-redux';
const root = createRoot(document.querySelector('#root'));

root.render(
<Provider store={store}>
    <App />
</Provider>);

