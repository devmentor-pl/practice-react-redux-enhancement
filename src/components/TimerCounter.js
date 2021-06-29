import React from 'react';
import Timer from './Timer'

class TimerCounter extends React.Component  {

  state = {
        time: 0,
    }
  

    getHours() {
        if (this.state.time >= 3600) {
            Math.floor((0 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		}
		return 0;
    }

    getMinutes() {
        if (this.state.time < 3600) {
			Math.floor((0% (1000 * 60 * 60)) / (1000 * 60));
		}
		return Math.floor((this.state.time % 3600) / 60)
    }
    

   getSeconds() {
        if(this.state.time === 59) {
           return  Math.floor((0 % (1000 * 60)) / 1000);
        }    
        return this.state.time % 60
    }


    addZero(i) {
        if (i < 10) {
          i = "0:" + i;
        } 
        return i;
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
                <Timer
                seconds={this.addZero(this.getSeconds())}
                minutes={this.addZero(this.getMinutes())}
                hours={this.addZero(this.getHours())}
                />
            )
        }

}

export default  TimerCounter;
