import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue, getRepos } from './github.actions';

const Github = () => {
    const dispatch = useDispatch();
    const { username, repoQuery } = useSelector((store) => store);

    const handleInputChange = ({ name, value }) => {
        console.log('name and value ', name, value);
        dispatch(setFieldValue(name, value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRepos());
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <img
                    src='../../../assets/img/GH-mark-logo.png'
                    style={{ height: '60px' }}
                />
                <input
                    name='username'
                    placeholder='USERNAME'
                    onChange={(e) => handleInputChange(e.target)}
                    value={username ? username : ''}
                />
                <input
                    name='repoQuery'
                    placeholder='FILTER...'
                    onChange={(e) => handleInputChange(e.target)}
                    value={repoQuery ? repoQuery : ''}
                />
                <button type='submit'>Submit</button>
            </form>
            <ul>list with results</ul>
        </>
    );
};

export default Github;
