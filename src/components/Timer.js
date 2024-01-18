import React from 'react';

class Timer extends React.Component {
    render() {
        return (
            <section>
                Dziękujemy, że jesteś z nami już {this.props.getHours()}h {this.props.getMinutes()}m {this.props.getSeconds()}s.
            </section>
        )
    }
}

export default Timer