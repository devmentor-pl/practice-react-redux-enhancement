import React from 'react';

class Timer extends React.Component {
    render() {
        const { time } = this.props;
        return (
            <section>
                Dziękujemy, że jesteś z nami już { time }
            </section>
        )
    }
}

export default Timer;