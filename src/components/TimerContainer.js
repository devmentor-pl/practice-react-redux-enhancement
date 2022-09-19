import React from 'react';
import Timer from './Timer'

class TimeContainer extends React.Component {
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

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState(state => {
                return {time: state.time + 1}
            });
        }, 1);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        return (
            <div>
                {/* solurion 1 */}
                {/* ---------- */}
                {/* <Timer 
                    getSeconds={() => this.getSeconds()}
                    getMinutes={() => this.getMinutes()}
                    getHours={() => this.getHours()}
                /> */}

                {/* solurion 1 */}
                {/* ---------- */}
                <Timer 
                    getSeconds={this.getSeconds()}
                    getMinutes={this.getMinutes()}
                    getHours={this.getHours()}
                />
            </div>
        )
    }
}

export default TimeContainer