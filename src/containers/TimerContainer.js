import React, { useState, useEffect } from 'react';

import Timer from '../components/Timer';

function TimerContaienr() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const hours = () => Math.floor(time / 3600);
  const minutes = () => Math.floor((time % 3600) / 60);
  const seconds = () => time % 60;

  return <Timer hours={hours()} minutes={minutes()} seconds={seconds()} />;
}

export default TimerContaienr;
