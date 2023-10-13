import React from 'react';

import Form from './components/form/Form';
import Wrapper from '../../components/Wrapper';
import ReposList from './components/reposSection/ReposList';

function Github() {
    return (
        <Wrapper as='section'>
            <Form />
            <ReposList />
        </Wrapper>
    );
}

export default Github;
