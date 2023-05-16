import React from "react";

import Timer from "../components/Timer";

class TimerContainer extends React.Component {
  state = {
    time: 0,
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

  getTime = () => new Date(this.state.time * 1000).toISOString().slice(11, 19);

  getHours = () => this.getTime().slice(0, 2);

  getMinutes = () => this.getTime().slice(3, 5);

  getSeconds = () => this.getTime().slice(6, 8);

  render() {
    return (
      <Timer
        time={{
          hours: this.getHours(),
          minutes: this.getMinutes(),
          seconds: this.getSeconds(),
        }}
      />
    );
  }
}

export default TimerContainer;
