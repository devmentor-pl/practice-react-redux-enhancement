import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './github.reductor';
import ReposComponent from './github';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const ReposBrowser = () => {
	return (
		<Provider store={store}>
			<ReposComponent />
		</Provider>
	);
};

export default ReposBrowser;