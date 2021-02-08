import React, {useState} from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup('yellow', 0.6)(Welcome);

const Task02 = () => {
    const [isPopupOpen, setPopupVisibility] = useState(true)

	return (<section> 
		<h2>Task 02</h2>
		<ComponentWithPopup onClick={setPopupVisibility} visible={isPopupOpen} extraText = 'Udanego pobytu!'/>
	</section>)
};

export default Task02;

