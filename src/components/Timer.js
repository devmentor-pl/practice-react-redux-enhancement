import React from 'react';

class Timer extends React.Component {
    state = {
        time: 0,
    }

    // Naprawiam godziny
    getHours() {
        return Math.floor(this.state.time / 3600);
    }

    // Naprawiam minuty
    getMinutes() {
        return Math.floor((this.state.time % 3600) / 60);
    }

    // Poprawiam sekundy
    getSeconds() {
        return this.state.time % 60;
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