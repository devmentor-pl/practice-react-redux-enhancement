import React from 'react';
import Timer from '../components/Timer'

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }

    getHours() {
        const hour = Math.floor(this.state.time / 1000)
        return hour
    }

    getMinutes() {
        const hour = this.getHours() 
        const minute = Math.floor((this.state.time - hour*3600)/60)
        return minute

    }

    getSeconds() {
        const hour = this.getHours()
        const minute = this.getMinutes()
        const seconds = this.state.time - (hour*3600 + minute * 60)
        return seconds
    }

    render() {
        return (
            <Timer getHours = {this.getHours()} getMinutes = {this.getMinutes()} getSeconds ={this.getSeconds()}/>
        )
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState(state => {
                return {time: state.time + 1}
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }
}

export default TimerContainer;