import React from 'react';

const Timer2 = props => {
    const {hours,minutes,seconds} = props.state;

    return (
        <section>
                Dziękujemy, że jesteś z nami już {hours}h {minutes}m {seconds}s.
        </section>
    )
}

export default Timer2;