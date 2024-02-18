import React from 'react';


class Timer extends React.Component {
	render() {
		const { data } = this.props

		return (
			<section>
				Dziękujemy, że jesteś z nami już {data.hours}h {data.minutes}m {data.time}s.
			</section>
		)
	}
}

export default Timer;