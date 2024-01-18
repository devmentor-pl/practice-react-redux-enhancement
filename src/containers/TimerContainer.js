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

  const formatTime = (timeValue) => timeValue.toString().padStart(2, '0');

  const hours = () => Math.floor(time / 3600);
  const minutes = () => formatTime(Math.floor((time % 3600) / 60));
  const seconds = () => formatTime(time % 60);

  return <Timer hours={hours()} minutes={minutes()} seconds={seconds()} />;
}

export default TimerContaienr;
