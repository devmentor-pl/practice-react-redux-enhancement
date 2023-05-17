import React, { useState } from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(0.1, 15)(Welcome);

const Task02 = () => {
    const [popUp, setPopUp] = useState(true)
    return (
        <section>
            <h2>Task 02</h2>
            <ComponentWithPopup active={popUp} onClose={setPopUp}/>
        </section>
    )

}


export default Task02;

