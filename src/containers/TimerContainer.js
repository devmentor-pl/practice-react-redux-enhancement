import React, { useEffect, useState } from "react";

import Timer from "../components/Timer";

const TimerContainer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const getTime = () => new Date(time * 1000).toISOString().slice(11, 19);

  const getHours = () => getTime().slice(0, 2);

  const getMinutes = () => getTime().slice(3, 5);

  const getSeconds = () => getTime().slice(6, 8);

  return (
    <Timer
      time={{
        hours: getHours(),
        minutes: getMinutes(),
        seconds: getSeconds(),
      }}
    />
  );
};

export default TimerContainer;
