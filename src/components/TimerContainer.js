import React from "react";
import Timer from "./Timer";

class TimerContainer extends React.Component {
  state = {
    time: 0,
  };

  getHours = () => {
    const hours = Math.floor(this.state.time / 3600) % 24;
    return hours;
  };

  getMinutes = () => {
    const hours = this.getHours();
    const minutes = Math.floor(this.state.time / 60) % 60;
    return minutes;
  };

  getSeconds = () => {
    const seconds = this.state.time % 60;
    return seconds;
  };

  render() {
    return (
      <Timer
        getHours={this.getHours}
        getMinutes={this.getMinutes}
        getSeconds={this.getSeconds}
      />
    );
  }

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
}

export default TimerContainer;
