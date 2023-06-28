import React from 'react';
import { Github } from '../src/modules/github';
import store from '../src/modules/github/github.store';
import { Provider } from 'react-redux';

const Task03 = () => {
	return (
		<section>
			<h2>Task 03</h2>
			<Provider store={store}>
				<Github />
			</Provider>
		</section>
	);
};

export default Task03;
