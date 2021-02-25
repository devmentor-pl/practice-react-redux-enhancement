import { createStore } from 'redux';
import reducer from './modules/github/github.reductor';

const initialState = {
    username: '',
    repoQuery: '',
    hits: [],
    filteredHits: [],
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
