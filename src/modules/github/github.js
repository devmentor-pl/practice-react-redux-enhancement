import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue, getRepos, setFilteredRepos } from './github.actions';

const Github = () => {
    const dispatch = useDispatch();
    const { username, repoQuery } = useSelector((store) => store);

    const handleInputChange = ({ name, value }) => {
        dispatch(setFieldValue(name, value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setFilteredRepos());
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
                    value={username}
                    onBlur={(e) => dispatch(getRepos())}
                />
                <input
                    name='repoQuery'
                    placeholder='FILTER...'
                    onChange={(e) => handleInputChange(e.target)}
                    value={repoQuery}
                />
                <button type='submit'>Filter</button>
            </form>
            <ul>list with results</ul>
        </>
    );
};

export default Github;
