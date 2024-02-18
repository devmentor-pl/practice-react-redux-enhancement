import React from 'react'
import Timer from '../components/Timer'

class TimerContainer extends React.Component {
	state = {
		time: 0,
		minutes: 0,
		hours: 0,
	}

	componentDidMount() {
		this.id = setInterval(() => {
			this.setState(state => {
				if (this.state.time === 60) {
					return { time: 0, minutes: state.minutes + 1 }
				} else if (this.state.minutes === 60) {
					return { minutes: 0, hours: state.hours + 1 }
				} else {
					return { time: state.time + 1 }
				}
			})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.id)
	}

	render() {
		return <Timer data={this.state} />
	}
}

export default TimerContainer
