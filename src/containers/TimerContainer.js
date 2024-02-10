import Timer from "../components/Timer";
import React from "react";
class TimerContainer extends React.Component {
    state = {
        time: 0,
       }
       
       addZero(time) {
           return time < 10 ? '0' + time : time
       }
   
       renderTime(seconds) {
           const hours = Math.floor(seconds / 3600);
           const minutes = Math.floor((seconds % 3600) / 60);
           const remainingSeconds = seconds % 60;
           return `${this.addZero(hours)}:${this.addZero(minutes)}:${this.addZero(remainingSeconds)}`
       }
   
       render() {
           return (
               <Timer time={ this.renderTime(this.state.time) }/>
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