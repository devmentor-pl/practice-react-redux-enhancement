import React from 'react';
import GitHubAPI from './github.api';
import Input from '../../components/Input';
import SearchBar from '../../components/Searchbar';
import StyledGithub from '../../components/styled/Github.styled';
import { Provider } from 'react-redux';
import store from '../../store';

const Github = () => {
    return (
        <Provider store={store}>
            <StyledGithub>
                <img src='../../../assets/img/GH-mark-logo.png' />
                <Input />
                <SearchBar />
            </StyledGithub>
        </Provider>
    );
};

export default Github;
