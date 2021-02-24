import { createStore } from 'redux';
import reducer from './modules/github/github.reductor';
const initialState = {
    username: '',
    reposFilter: '',
    hits: [],
    filteredHits: [],
};
const store = createStore(reducer, initialState);

export default store;
