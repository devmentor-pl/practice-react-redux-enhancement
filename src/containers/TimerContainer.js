import React from 'react'
import Timer from '../components/Timer'

class TimerContainer extends React.Component {
  state = {
    time: 3580,
  }

  getHours() {
    return Math.floor((this.state.time / 3600) % 60)
  }

  getMinutes() {
    return Math.floor((this.state.time / 60) % 60)
  }

  getSeconds() {
    return this.state.time % 60
  }

  render() {
    return (
      <Timer
        hours={this.getHours()}
        minutes={this.getMinutes()}
        seconds={this.getSeconds()}
      />
    )
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState((state) => {
        return { time: state.time + 1 }
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.id)
  }
}

export default TimerContainer
