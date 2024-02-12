import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const modalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
    border: '1px solid black',
    padding: '20px',
}
const closedStyles = {
    position: 'inherit',
}

const ComponentWithPopup = withPopup(Welcome);

const Task02 = () => (
    <section>
        <h2>Task 02</h2>
        <ComponentWithPopup modalStyles={modalStyles} closedStyles={ closedStyles }/>
    </section>
)

export default Task02;

