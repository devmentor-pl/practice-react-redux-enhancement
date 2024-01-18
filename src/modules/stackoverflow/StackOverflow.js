import React from 'react';
import Wrapper from '../../components/Wrapper';

import FormSection from './components/formSection';
import TopicsSection from './components/topicsSection';

function StackOverflow() {
    return (
        <Wrapper as='container'>
            <FormSection />
            <TopicsSection />
        </Wrapper>
    );
}

export default StackOverflow;
