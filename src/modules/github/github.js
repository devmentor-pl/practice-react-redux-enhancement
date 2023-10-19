import React from 'react';
import { useSelector } from 'react-redux';

import FormSection from './components/form/FormSection';
import Wrapper from '../../components/Wrapper';
import ReposList from './components/reposSection/ReposList';

function Github() {
    const { repos } = useSelector(state => state.github);
    const isRowLayout = repos.length > 0;

    return (
        <Wrapper as='container' row={isRowLayout}>
            <FormSection />
            <ReposList />
        </Wrapper>
    );
}

export default Github;
