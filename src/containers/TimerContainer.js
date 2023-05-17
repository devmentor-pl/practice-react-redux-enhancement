import React from "react";
import Timer from "../components/Timer";

class TimerContainer extends React.Component {
    state = {
        time: 0,
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
   getHours () {
        if(this.state.time >= 3600){
            return Math.floor(this.state.time / 3600)
        }
        return 0;
    }

    getMinutes() {
        if(this.state.time >= 60){
            return Math.floor(this.state.time / 60)
        }
        return 0;
    }

    getSeconds() {
        if(this.state.time >= 60){
            return this.state.time % 60
        }
        return this.state.time;
    }

    render() {
        return (
            <Timer time={{
                hours: this.getHours(),
                minutes: this.getMinutes(),
                seconds: this.getSeconds()
            }}/>
        )
    }
}

export default TimerContainer