import React from 'react';

const withPopup = (styles) => (WrappedComponent) => {
	const defaultStyles = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '8px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '10px 20px',
		boxShadow: '0 0 15px black',
		backgroundColor: '#b3f6fe',
		width: '400px',
		height: '200px',
	};

	const buttonStyles = {
		position: 'absolute',
		top: '15px',
		right: '15px',
		cursor: 'pointer',
	};

	return class Popup extends React.Component {
		render() {
			const { isOpen, onClick } = this.props;

			if (isOpen) {
				return (
					<div style={{ ...defaultStyles, ...styles }}>
						<button
							onClick={onClick}
							style={buttonStyles}>
							X
						</button>
						<WrappedComponent {...this.props} />
					</div>
				);
			}

			return <WrappedComponent />;
		}
	};
};

export default withPopup;
