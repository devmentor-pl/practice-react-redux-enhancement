import React from 'react';

class Timer extends React.Component {
	render() {
		const [getSeconds, getMinutes, getHours] = this.props.timeHandler;
		return (
		    <section>
		        Dziękujemy, że jesteś z nami już {getHours()}h {getMinutes()}m {getSeconds()}s.
		    </section>
		)
	}
}

export default Timer;