import React from 'react';
import { Provider } from 'react-redux';
import store from '../modules/store';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Task01 />
          {/* <Task02 /> */}
          <Task03 />
          <Task04 />
          <Task05 />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
