import React from 'react';
import { Provider } from 'react-redux';

import store from './../src/modules/stackoverflow';
import StackContainer from '../src/modules/stackoverflow/containers/stack';

const Task04 = () => {
    return (
        <section>
            <h2>Task 04</h2>
            <Provider store={ store }>
                <StackContainer />
            </Provider>
        </section>
    );
}

export default Task04;

