import React, { useState } from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup('hotpink', 0.8)(Welcome);

const Task02 = () => {
    const [isPopUpActive, setIsPopUpActive] = useState(false);
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
