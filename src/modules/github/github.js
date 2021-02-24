import React from 'react';
import GitHubAPI from './github.api';
import Input from '../../components/Input';
import SearchBar from '../../components/Searchbar';

const Github = () => {
    const githubPanelStyle = {
        display: 'flex',
        width: '500px',
        height: '60px',
        padding: '2em',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: '2em',
    };
    return (
        <div style={githubPanelStyle}>
            <img src='../../../assets/img/GH-mark-logo.png' />
            <Input />
            <SearchBar />
        </div>
    );
};

export default Github;
