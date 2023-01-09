import React from "react";
import Timer from "../components/Timer";

class TimerContainer extends React.Component {
  state = { time: 0 };

  getHours() {
    const minutes = this.getMinutes();
    const hours = Math.floor(minutes / 60) % 24;
    return hours;
  }

  getMinutes() {
    const { time } = this.state;
    const minutes = Math.floor(time / 60) % 60;
    return minutes;
  }

  getSeconds() {
    return this.state.time % 60;
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
  render() {
    return (
      <Timer
        getSeconds={this.getSeconds()}
        getMinutes={this.getMinutes()}
        getHours={this.getHours()}
      />
    );
  }
}
export default TimerContainer;
