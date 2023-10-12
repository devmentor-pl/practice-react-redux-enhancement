import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';
import usePopup from '../src/hooks/usePopup';

const ComponentWithPopup = withPopup('dark')(Welcome);

const Task02 = () => {
    const { isPopupOpen, togglePopup } = usePopup();

    return (
        <section>
            <h2>Task 02</h2>
            <ComponentWithPopup isOpen={isPopupOpen} togglePopup={togglePopup} />
        </section>
    );
};

export default Task02;
