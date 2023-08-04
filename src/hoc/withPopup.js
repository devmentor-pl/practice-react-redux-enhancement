import React from 'react';

const withPopup = backgroundColor => {
	return WrappedComponent => {
		return class Popup extends React.Component {
			state = {
				isOpen: true,
			};

			setStyle() {
				return {
					position: "relative",
					width: "200px",
					border: "1px solid red",
					margin: "0 auto",
					padding: "10px ",
					borderRadius: "3px",
					backgroundColor: backgroundColor || "#ffffff",
				};
			}

			setButton() {
				return {
					position: "absolute",
					top: "0px",
					right: "0px",
					cursor: "pointer",
				};
			}

			handleClick = () => {
				this.setState({ isOpen: false });
			};

			render() {
				if (this.state.isOpen) {
					return (
						<div style={this.setStyle()}>
							<button style={this.setButton()} onClick={this.handleClick}>
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
};


export default withPopup;