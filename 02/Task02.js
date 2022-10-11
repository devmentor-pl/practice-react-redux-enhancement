import React,{useState, useEffect} from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup('Siema')(Welcome);

const Task02 = () => {
    const [popupIsOpen, setPopup] = useState(true);

    const closePopup = () => {
        return setPopup(!popupIsOpen);
    };

    return (
    <section>
        <h2>Task 02</h2>
        <ComponentWithPopup popupIsOpen={popupIsOpen} closePopup={closePopup} />
    </section>
    )
}


export default Task02;

