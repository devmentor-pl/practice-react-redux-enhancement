import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './stackoverflow.reductor';
import StackOverflowBrowserComponent from './stackoverflow';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const StackOverflowBrowser = () => {
	return (
		<Provider store={store}>
			<StackOverflowBrowserComponent />
		</Provider>
	);
};

export default StackOverflowBrowser;
