import React from 'react';
import Timer from '../components/Timer';

class TimerContainer extends React.Component {
    state = {
        time: 0,
    }
    

    getHours() {
        const hours = Math.floor(this.state.time /3600);
        return hours ;
    }
    
    getMinutes() {
        const minutes =  Math.floor(this.state.time /60)%60
        return minutes <10 ? `0${minutes}` : minutes;
    }
    
    getSeconds() {
        const seconds = this.state.time%60
        return seconds <10 ?`0${seconds}`:seconds;
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