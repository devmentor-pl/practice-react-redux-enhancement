import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData, filterList } from './github.actions';
import useMap from './hooks/useMap';

const Github = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.repos);
    const filteredRepos = useSelector(state => state.filteredRepos);

    const formHandler = e => {
        e.preventDefault();
        dispatch(getData(text));
    }

    const inputHandler = e => {
        dispatch(filterList(e.target.value));
    }

    return (
        <>
        <form onSubmit={ formHandler }>
            <input type="text" value={ text } onChange={ e => setText(e.target.value) } />
            <input type="text" placeholder={ "filter "} onChange={ inputHandler } />
            <input type="submit" />
        </form>
        <section>
            { filteredRepos ? useMap(filteredRepos) : useMap(data) }
        </section>
        </>
    );
}

export default Github;
