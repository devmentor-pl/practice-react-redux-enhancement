import React, {useState} from 'react'
import Welcome from './../src/components/Welcome'
import withPopup from './../src/hoc/withPopup'

const ComponentWithPopup = withPopup('red', 0.5)(Welcome);

const Task02 = () => {
    const [isOpen, open] = useState( true )

	return (
        <section> 
            <h2>Task 02</h2>
            <ComponentWithPopup onClick={ open } visible={ isOpen }/>
        </section>
    )
}

export default Task02