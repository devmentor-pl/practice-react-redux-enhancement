// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))
import App from './components/App'

const root = createRoot(document.querySelector('#root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
