import React from 'react';
import GitHub from '../src/modules/github/github';
import { store } from '../src/modules/github';
import { Provider } from 'react-redux';
const Task03 = () => {


    return (
        <section>
            <h2>Task 03</h2>
            <Provider store={store}>
                <GitHub/>
            </Provider>
        </section>
    );
}

export default Task03;

