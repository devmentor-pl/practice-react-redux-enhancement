import React, { useState } from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(Welcome)('#d1ccc0')('0.9');

const Task02 = () => {
    const [isOpen, setIsOpen] = useState(true)

    const closeWindow = () => {
        return setIsOpen(!isOpen)
    }

    return (
        <section>
            <h2>Task 02</h2>
            <ComponentWithPopup
                isOpen = {isOpen}
                closeWindow = {closeWindow}
            />
        </section>
    )
}

export default Task02;

