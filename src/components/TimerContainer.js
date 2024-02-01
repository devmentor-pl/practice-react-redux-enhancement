import React from "react";
import Timer from "./Timer";

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }

    increment = () => {
        this.setState({ time: this.state.time + 1 });
    }

    componentDidMount() {
        this.intervalId = setInterval(this.increment, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const hours = Math.floor(this.state.time / 3600);
        const minutes = Math.floor((this.state.time % 3600) / 60);
        const seconds = this.state.time % 60;

        return <Timer hours={hours} minutes={minutes} seconds={seconds} />;
    }
}

export default TimerContainer;