import React from 'react';

class Timer extends React.Component {
    // state = {
    //     time: 0,
    // }

    state = {
        hours:0,
        minutes:0,
        second:0
    }

    getHours() {
        return this.state.hours;
    }

    getMinutes() {
        return this.state.minutes;
    }

    getSeconds() {
        return this.state.second;
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
                if(state.second < 2){
                    return {
                        ...state,
                        second: state.second + 1
                    }
                }
                if(state.second >= 2){
                    return {
                        ...state,
                        second: state.second = 0,
                        minutes: state.minutes + 1,
                    }
                }
                if (state.minutes >= 3) {
                    return {
                        ...state,
                        minutes:state.minutes = 0,
                        hours:state.hours + 1
                    }
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }
}

export default Timer;