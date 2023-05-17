import React, { Component } from 'react';
import Timer from '../components/Timer';

class TimerContainer extends Component {
	state = {
		time: 0,
	};

	getHours() {
		return Math.floor(this.state.time / 3600);
	}

	getMinutes() {
		return Math.floor(this.state.time / 60);
	}

	getSeconds() {
		return this.state.time % 60;
	}
	render() {
		return (
			<Timer
				time={{
					hours: this.getHours(),
					minutes: this.getMinutes(),
					seconds: this.getSeconds(),
				}}
			/>
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
