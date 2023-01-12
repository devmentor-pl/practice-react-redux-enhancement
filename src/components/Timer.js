import React from 'react';

class Timer extends React.Component {
  render() {
    const { getHours, getMinutes, getSeconds } = this.props;

    return (
      <section>
        Dziękujemy, że jesteś z nami już {getHours()}h {getMinutes()}m
        {getSeconds()}s.
      </section>
    );
  }
  /*state = {
    time: 0,
  };

  getHours() {
    return parseInt(this.state.time / 3600);
  }

  getMinutes() {
    return parseInt(this.state.time / 60) % 60;
  }

  getSeconds() {
    return this.state.time % 60;
  }

  render() {
    return (
      <section>
        Dziękujemy, że jesteś z nami już {this.getHours()}h {this.getMinutes()}m
        {this.getSeconds()}s.
      </section>
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
  }*/
}

export default Timer;