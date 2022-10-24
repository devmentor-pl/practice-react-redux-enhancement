import React from "react";
import Timer from "../components/Timer";

class TimerContainer extends React.Component {

    state = {
        seconds: 0,
        minutes: 0,
        hours: 0,
    };

    getTime() {
        const { seconds, minutes, hours } = this.state;
        this.setState(prevState => {
            return {
                ...prevState,
                seconds: prevState.seconds + 1
            };
        });
        seconds === 59 && this.setState(prevState => ({
            ...prevState,
            minutes: prevState.minutes + 1,
            seconds: 0
        }));
        minutes === 59 && this.setState(prevState => ({
            ...prevState,
            minutes: 0,
            hours: prevState + 1,
        }));
        hours === 23 && this.setState({ seconds: 0, minutes: 0, hours: 0 });
    };

    componentDidMount() {
        this.id = setInterval(() => {
            this.getTime();
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.id);
    };

    render() {
        const { seconds, minutes, hours } = this.state;
        return (
            <Timer seconds={seconds} minutes={minutes} hours={hours} />
        );
    };
};

export default TimerContainer;