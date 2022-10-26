import React from 'react'
import Timer from '../components/Timer'

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }

    getHours() {
        return Math.floor(this.state.time/60/60)
    }

    getMinutes() {
        return this.state.time < 3600 ? Math.floor(this.state.time/60) : (Math.floor(this.state.time/60) - this.getHours()*60*60)
    }

    getSeconds() {
        return this.state.time  < 60 ? this.state.time : (this.state.time-this.getMinutes()*60)
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

    render(){
        return (
            <Timer getHours={this.getHours()} getMinutes={this.getMinutes()} getSeconds={this.getSeconds()}/>
        )
    }
}

export default TimerContainer