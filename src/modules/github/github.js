import React from 'react';
import GitHubAPI from './github.api';
import Input from '../../components/Input';
import SearchBar from '../../components/Searchbar';
import StyledGithub from '../../components/styled/Github.styled';
import { Provider } from 'react-redux';
import store from '../../store';
import { setUserName, setRepoQuery, getRepos } from './github.actions';
import GithubAPI from './github.api';
// import  from './github.actions';

const Github = () => {
    const api = new GithubAPI();

    const displayResults = () => {
        console.log('lol displaying');

        return <ul></ul>;
    };

    return (
        <Provider store={store}>
            <StyledGithub>
                <img
                    src='../../../assets/img/GH-mark-logo.png'
                    style={{ height: '60px' }}
                />
                <Input setUserName={setUserName} />
                <SearchBar setRepoQuery={setRepoQuery} />
                <button onClick={displayResults}>clickme</button>
            </StyledGithub>
        </Provider>
    );
};

export default Github;
