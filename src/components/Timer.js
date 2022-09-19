import React from 'react';

class Timer extends React.Component {
    state = {
        hour: 0,
        minute: 0,
        time: 0,
    }

    getHours() {
        if(this.state.hour > 23) {
            this.setState({ hour: 0 });
        }
        return this.state.hour;
    }

    getMinutes() {
        if(this.state.minute > 59) {
            this.setState({ 
                minute: 0,
                hour: this.state.hour + 1
            });
        }
        return this.state.minute;
    }

    getSeconds() {
        if(this.state.time > 59) {
            this.setState({ 
                time: 0,
                minute: this.state.minute + 1
            });
        }
        return this.state.time;
    }

    render() {
        return (
            <section>
                Dziękujemy, że jesteś z nami już {this.getHours()}h {this.getMinutes()}m {this.getSeconds()}s.
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

export default Timer;