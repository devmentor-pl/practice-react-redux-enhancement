import React, { useState, useEffect } from 'react';

import Timer from '../components/Timer';

function TimerContainer() {
    const [time, setTime] = useState(0);

    const hours =  Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevState => prevState + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <Timer hours={hours} minutes={minutes} seconds={seconds} />;
}

export default TimerContainer;
