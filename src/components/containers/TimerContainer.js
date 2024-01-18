import React from "react";
import Timer from "../Timer";

class TimerContainer extends React.Component {
    state = {
        time: 0
    }

    getHours = () => {
        const { time } = this.state
        const hours = (time - time % 3600) / 3600

        return hours >= 10 ? hours : '0' + hours
    }

    getMinutes = () => {
        const { time } = this.state
        const minutes = (time - time % 60) / 60 % 60

        return minutes >= 10 ? minutes : '0' + minutes
    }

    getSeconds = () => {
        const { time } = this.state
        const seconds = time % 60

        return seconds >= 10 ? seconds : '0' + seconds
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState(state => {
                return { time: state.time + 1 }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }


    render() {
        return (
            <Timer getHours={this.getHours} getMinutes={this.getMinutes} getSeconds={this.getSeconds} />
        )
    }
}

export default TimerContainer