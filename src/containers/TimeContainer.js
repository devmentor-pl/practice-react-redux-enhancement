import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';

const TimerContainer = () => {
	const [time, setTime] = useState(0);

	const getHours = () => {
		return Math.floor(time / 3600);
	};

	const getMinutes = () => {
		return Math.floor((time % 3600) / 60);
	};

	const getSeconds = () => {
		return time % 60;
	};

	useEffect(() => {
		const id = setInterval(() => {
			setTime(time => time + 1);
		}, 1000);
		return () => clearInterval(id);
	}, []);

	return <Timer getHours={getHours} getMinutes={getMinutes} getSeconds={getSeconds} />;
};
export default TimerContainer;
