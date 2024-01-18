import React from 'react';

const Timer = ({ getHours, getMinutes, getSeconds }) => {
	return (
		<section>
			Dziękujemy, że jesteś z nami już {getHours()}h {getMinutes()}m {getSeconds()}s.
		</section>
	);
};

export default Timer;