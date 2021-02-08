import React from 'react';
import Timer from './Timer';

class TimerContainer extends React.Component {
	state = {
		time: 0,
	};

	getHours = () => {
		if (this.state.time >= 3600) {
			return Math.floor(this.state.time / 3600);
		}
		return 0;
	};

	getMinutes = () => {
		if (this.state.time < 3600) {
			return Math.floor(this.state.time / 60);
		}
		return Math.floor((this.state.time % 3600) / 60);
	};

	getSeconds = () => {
		if (this.state.time < 60) {
			return this.state.time;
		}
		return this.state.time % 60;
	};

	render() {
		return (
			<Timer
				timeHandler={[this.getSeconds, this.getMinutes, this.getHours]}
			></Timer>
		);
	}

	componentDidMount() {
		this.id = setInterval(() => {
			this.setState((state) => {
				return { time: state.time + 1 };
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.id);
	}
}

export default TimerContainer;
