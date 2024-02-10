import React from 'react';

class Timer extends React.Component {
    state = {
     time: 0,
    }
    
    addZero(time) {
        return time < 10 ? '0' + time : time
    }

    renderTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${this.addZero(hours)}:${this.addZero(minutes)}:${this.addZero(remainingSeconds)}`
    }

    render() {
        return (
            <section>
                Dziękujemy, że jesteś z nami już {this.renderTime(this.state.time)}.
            </section>
        )
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState(state => {
                return {time: state.time + 1}
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }
}

export default Timer;