import React, { useState } from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(Welcome);

const Task02 = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <section>
            <h2>Task 02</h2>
            {isPopupOpen ? (
                <ComponentWithPopup handleClose={handleClosePopup} />
            ) : (
                <Welcome />
            )}
        </section>
    );
}

export default Task02;

