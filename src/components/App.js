import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

import { Provider } from 'react-redux';
//import store from '../modules/github';
import store from '../modules/stackoverflow';


const App = () => {
    return (
        <Provider store={store}>
            <Task01 />
            {/* <Task02 /> */}
            {/* <Task03 /> */}
            <Task04 />
            <Task05 />
        </Provider>
    )
}

export default App;