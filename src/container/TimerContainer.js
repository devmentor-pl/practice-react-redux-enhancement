import React from "react";
import Timer from "../components/Timer";

class TimerContainer extends React.Component {
  state = {
    time: 0,
  }

  getHours = () => {
    if (this.state.time < 3600) return 0
    return Math.floor((this.state.time) / 3600);
  }

  getMinutes = () => {
    if (this.state.time < 60) return 0
    return Math.floor((this.state.time) / 60) - (this.getHours() * 60);
  }

  getSeconds = () => {
    return this.state.time - (this.getMinutes() * 60) - (this.getHours() * 3600);
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
      <Timer
        getHours={this.getHours}
        getMinutes={this.getMinutes}
        getSeconds={this.getSeconds}
      />
    )
  }
}

export default TimerContainer