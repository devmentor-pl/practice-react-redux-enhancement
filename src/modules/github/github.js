import React from 'react';
import { useSelector } from 'react-redux';

import Form from './components/form/Form';
import Wrapper from '../../components/Wrapper';
import ReposList from './components/reposSection/ReposList';

function Github() {
    const { repos } = useSelector(state => state.github);
    const isRowLayout = repos.length > 0;

    return (
        <Wrapper as='section' row={isRowLayout}>
            <Form />
            <ReposList />
        </Wrapper>
    );
}

export default Github;
