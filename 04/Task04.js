import React from 'react';
import StackoverFlow from '../src/modules/stackoverflow/stackoverflow';
import { store } from '../src/modules/stackoverflow';
import { Provider } from 'react-redux';

const Task04 = () => {
	return (
		<section>
			<h2>Task 04</h2>
			<Provider store={store}>
				<StackoverFlow />
			</Provider>
		</section>
	);
};

export default Task04;

