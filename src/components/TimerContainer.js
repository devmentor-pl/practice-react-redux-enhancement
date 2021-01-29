import React, { Component } from "react";
import Timer from "./Timer";

class TimerContainer extends Component {
  state = {
    time: 0,
  };

  getHours() {
    return ~~(this.state.time / 3600);
  }

  getMinutes() {
    return ~~((this.state.time % 3600) / 60);
  }

  getSeconds() {
    return ~~this.state.time % 60;
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState(state => {
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
        seconds={this.getSeconds()}
        minutes={this.getMinutes()}
        hours={this.getHours()}
      />
    );
  }
}

export default TimerContainer;
