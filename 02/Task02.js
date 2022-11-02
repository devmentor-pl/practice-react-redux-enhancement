import React from 'react';

import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';
import PopUpContainer from '../src/containers/PopUpContainer';

const ComponentWithPopup = withPopup(/*Welcome*/)(PopUpContainer);

const outerStyles = {
    cursor: 'pointer'
}

const Task02 = () => (
    <section>
        <h2>Task 02</h2>
        <ComponentWithPopup { ...outerStyles } />
    </section>
)

export default Task02;

