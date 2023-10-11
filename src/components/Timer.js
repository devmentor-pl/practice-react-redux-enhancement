import React from 'react';
import PropTypes from 'prop-types';

function Timer({ hours, minutes, seconds }) {
    return (
        <section>
            Dziękujemy, że jesteś z nami już {hours}h {minutes}m {seconds}s.
        </section>
    );
}

Timer.propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
};

export default Timer;
