import React from 'react';

const withPopup = (WrappedComponent) => {
	return class extends React.Component {
		state = { isOpen: true };

		handleClick = () => {
			this.setState({ isOpen: false });
		};

		render() {
			if (this.state.isOpen) {
				return (
					<div
						style={{
							position: 'relative',
							width: '300px',
							border: '1px solid tomato',
							margin: '0 auto',
							padding: '10px ',
							borderRadius: '8px',
						}}>
						<button
							style={{
								position: 'absolute',
								top: '0',
								right: '0',
								transform: 'translate(50%, -50%)',
								width: '30px',
								height: '30px',
								borderRadius: '50%',
								border: 'none',
								backgroundColor: 'tomato',
								cursor: 'pointer',
							}}
							onClick={this.handleClick}>
							X
						</button>
						<WrappedComponent />
					</div>
				);
			}
			return <WrappedComponent />;
		}
	};
};


export default withPopup;