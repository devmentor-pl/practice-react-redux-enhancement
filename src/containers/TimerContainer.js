import React from 'react';
import Timer from '../components/Timer';

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }
    
    getHours() {
        return 0;
    }
    
    getMinutes() {
        return 0;
    }
    
    getSeconds() {
        return this.state.time;
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

   render () {
       return (
           <Timer hours ={this.getHours()} minutes ={this.getMinutes()} seconds={this.getSeconds()}/>
       )
   }
}
 
export default TimerContainer;