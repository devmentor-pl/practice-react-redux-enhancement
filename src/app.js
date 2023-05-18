// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore, applyMiddleware } from 'redux';
import reducers from './modules/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './components/App';

const store = legacy_createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

const root = createRoot(document.querySelector('#root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
