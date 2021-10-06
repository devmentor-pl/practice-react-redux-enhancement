// Twoim zadaniem będzie refaktoryzacja komponentu <Timer>, w taki sposób, aby rozdzielić prezentację od logiki. Oznacza to, że powinieneś przekazać zadządzanie state kontenerowi tj. <TimerContainer>, natomiast samą formę prezentacyjną pozostawić w <Timer>, a dane przekazywać przez props.

// Zanim jednak to zrobisz napraw błędy związane z prezentowaniem informacji. Obecnie godziny i minuty nie są poprawnie pokazywane. Postaraj się poprawić ten błąd.


//LOGIKA

import React from "react";
import Timer from "./Timer";

class TimerCounter extends React.Component {

state = {
    time: 0,
}

getHours() {
    return Math.floor(this.state.time / 3600);;
}

getMinutes() {
    return Math.floor(this.state.time / 60);
}

getSeconds() {
    return this.state.time % 60;
}

render() {
    return(
        <>
            <Timer hours={this.getHours()} minutes={this.getMinutes()} seconds={this.getSeconds()} />
        </>
    );
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
};


export default TimerCounter;