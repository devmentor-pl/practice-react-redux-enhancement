import React from 'react'
import { createStore } from 'redux'
import stackoverflowReducer from './stackoverflow.reductor'
import { Provider } from 'react-redux'
import StackoverflowComponent from './stackoverflow'

const store = createStore(stackoverflowReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  


const Stackoverflow = () => {

    return (
        <Provider store={ store } >
            <StackoverflowComponent/>
        </Provider>
    )
}

export default Stackoverflow