import React from 'react';

import { createStore, applyMiddleware } from'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './stackoverflow.reductor';
import StackOverflow from './stackoverflow';


const store = createStore(reducers, composeWithDevTools( applyMiddleware(thunk) ) )
const StackAPI = () => {
    return(
        <Provider store={store}>
            <StackOverflow />
        </Provider>
    )
}

export default StackAPI;