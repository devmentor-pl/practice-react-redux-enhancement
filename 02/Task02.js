import React, {useState} from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup()(Welcome);

const Task02 = () => {
	const [isOpen, setClose] = useState(true);

	const closePopup = () => {
		setClose(false);
	}
	return (
		<section>
			<h2>Task 02</h2>
			<ComponentWithPopup close={closePopup} isVisible={isOpen}/>
		</section>
	)
}

export default Task02;

