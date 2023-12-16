import React from 'react';
import Timer from '../components/Timer';

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }

    getHours() {
        let hours = Math.floor(this.state.time / 60 / 60)
        return hours;
    }

    getMinutes() {
        let minutes = Math.floor(this.state.time / 60)
        minutes = minutes % 60
        return minutes;
    }

    getSeconds() {
        return this.state.time % 60;
    }

    render() {
        return (
            <Timer
            hours={this.getHours()}
            minutes={this.getMinutes()}
            seconds={this.getSeconds()}
            />
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

export default TimerContainer;