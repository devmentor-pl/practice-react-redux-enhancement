import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import StackOverflow from './stackoverflow';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const StackOverflowBrowser = () => {
	return (
		<Provider store={store}>
			<StackOverflow />
		</Provider>
	);
};

export default StackOverflowBrowser;