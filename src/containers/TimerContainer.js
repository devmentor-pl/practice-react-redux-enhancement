import React, { Component } from 'react';
import Timer from '../components/Timer';

export class TimerContainer extends React.Component {
    state = {
        time: 3830,
    };

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

    getHours = () => Math.floor(this.state.time / 3600);

    getMinutes = () => Math.floor((this.state.time % 3600) / 60);

    getSeconds = () => (this.state.time % 3600) % 60;

    render() {
        return (
            <Timer
                getSeconds={this.getSeconds}
                getMinutes={this.getMinutes}
                getHours={this.getHours}
            ></Timer>
        );
    }
}

export default TimerContainer;
