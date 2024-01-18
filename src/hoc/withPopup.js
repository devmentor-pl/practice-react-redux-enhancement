import React, { useState } from 'react';

const absoluteCenter = {
	position: 'absolute',
	left: '50%',
	top: '40%',
	border: '1px solid black',
	padding: '20px',
};

const withPopup = color => WrappedComponent => {
	return () => {
		const [isOpen, setIsOpen] = useState(true);

		const handleClose = () => {
			setIsOpen(false);
		};

		return isOpen ? (
			<section style={{ color: color }}>
				<div style={absoluteCenter}>
					<WrappedComponent />
					<button onClick={handleClose}>x</button>
				</div>
			</section>
		) : (
			<section>
				<WrappedComponent />
			</section>
		);
	};
};

export default withPopup;
