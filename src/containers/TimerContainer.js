import React from 'react';
import Timer from '../components/Timer';

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }

    getHours() {
        const hours = Math.floor(this.state.time / 3600)
        return hours;
    }

    getMinutes() {
        const min = Math.floor((this.state.time - (this.getHours() * 3600)) / 60)
        return min;
    }

    getSeconds() {
        const seconds = this.state.time - (this.getHours() * 3600) - (this.getMinutes() * 60)
        return seconds;
    }

    render() {
        return (
            <Timer
                hours = {this.getHours()}
                minutes = {this.getMinutes()}
                seconds = {this.getSeconds()}
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