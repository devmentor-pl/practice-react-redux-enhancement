import React from 'react';
import GitHubAPI from './github.api';
import Input from '../../components/Input';
import SearchBar from '../../components/Searchbar';
import StyledGithub from '../../components/styled/Github.styled';
import { Provider } from 'react-redux';
import store from '../../store';
import setUserName from './github.actions';
import setRepoQuery from './github.actions';

const Github = () => {
    return (
        <Provider store={store}>
            <StyledGithub>
                <img src='../../../assets/img/GH-mark-logo.png' />
                <Input setUserName={setUserName} />
                <SearchBar />
            </StyledGithub>
        </Provider>
    );
};

export default Github;
