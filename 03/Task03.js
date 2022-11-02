import React from 'react';
import { Provider } from 'react-redux';

import store from '../src/modules/github';
import Github from '../src/modules/github/github';

const Task03 = () => {
    return (
        <section>
            <h2>Task 03</h2>
            {/* <Provider store={ store }> */}
                <Github />
            {/* </Provider> */}
        </section>
    );
}

export default Task03;

