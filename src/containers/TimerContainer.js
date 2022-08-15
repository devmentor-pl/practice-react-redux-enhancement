import React from "react";
import Timer from "../components/Timer";

class TimerContainer extends React.Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  getHours() {
    return this.state.hours;
  }

  getMinutes() {
    return this.state.minutes;
  }

  getSeconds() {
    return this.state.seconds;
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState((state) => {
        return {
          seconds: state.seconds === 60 ? 0 : state.seconds + 1,
          minutes:
            state.seconds === 60
              ? state.minutes + 1
              : state.minutes === 60
              ? state.minutes === 0
              : state.minutes,
          hours: state.minutes === 60 ? state.hours + 1 : state.hours,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <Timer //
        seconds={this.getSeconds()}
        minutes={this.getMinutes()}
        hours={this.getHours()}
      />
    );
  }
}

export default TimerContainer;
