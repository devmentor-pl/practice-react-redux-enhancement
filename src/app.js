// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';
// import store from './modules/github/github.store';
import store from './modules/stackoverflow/stackoverflow.store';

const root = createRoot(document.querySelector('#root'));
root.render(
	<Provider store={store}>
		<App />
	 </Provider>
);
