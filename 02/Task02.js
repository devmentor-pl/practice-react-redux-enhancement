import React, { useState } from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup('darkgreen', 0.7)(Welcome);

const Task02 = () => {
    const [isPopUpActive, setIsPopUpActive] = useState(true);
    return (
        <section>
            <h2>Task 02</h2>
            <ComponentWithPopup 
                setIsPopUpActive={setIsPopUpActive}
                isPopUpActive={isPopUpActive}
            />
        </section>
    );
};

export default Task02;
