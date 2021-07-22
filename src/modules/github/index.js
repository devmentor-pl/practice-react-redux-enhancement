import React from 'react';

import { createStore, applyMiddleware } from'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './github.reductor';
import Github from './github';

const store = createStore(reducers, composeWithDevTools( applyMiddleware(thunk) ) )
const GithubAPI = () => {
    return(
        <Provider store={store}>
            <Github />
        </Provider>
    )
}

export default GithubAPI;