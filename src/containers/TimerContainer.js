import React from 'react';
import Timer from '../components/Timer'

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }

    getHours() {
        return Math.floor(this.state.time / 3600);
    }

    getMinutes() {
        return Math.floor(this.state.time / 60);
    }

    getSeconds() {
        return this.state.time % 60;
    }

    render() {
        return (
            <section>
                <Timer getHours={ this.getHours.bind(this) }
                        getMinutes={ this.getMinutes.bind(this) }
                        getSeconds={ this.getSeconds.bind(this) } />
            </section>
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