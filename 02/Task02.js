import React, { useState } from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup({
	backgroundColor: 'yellow',
	color: 'blue',
})(Welcome);

const Task02 = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClick = () => {
		setIsOpen(false);
	};

	return (
		<section>
			<h2>Task 02</h2>
			<ComponentWithPopup
				isOpen={isOpen}
				onClick={handleClick}
			/>
		</section>
	);
};

export default Task02;
