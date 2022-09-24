import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(Welcome);

const Task02 = () => (
    <section>
        <h2>Task 02</h2>
        {/* <ComponentWithPopup pop={true} textPop='Witaj w oknie PopUp' /> */}
    </section>
)

export default Task02;

