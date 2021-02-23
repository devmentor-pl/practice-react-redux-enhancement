import React from 'react';

class Timer extends React.Component {
    render() {
        const { getSeconds, getMinutes, getHours } = this.props;
        return (
            <section>
                Dziękujemy, że jesteś z nami juz
                <p>{getHours()} hours</p>
                <p>{getMinutes()} minutes</p>
                <p>{getSeconds()} seconds</p>
            </section>
        );
    }
}

export default Timer;
