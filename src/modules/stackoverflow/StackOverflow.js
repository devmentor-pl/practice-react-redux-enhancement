import React from 'react';
import Wrapper from '../../components/Wrapper';

import Form from './components/form';
import Header from '../../components/Header';

function StackOverflow() {
    return (
        <Wrapper as='section'>
            <Form>
                <Header>
                    <h2>Look for topics</h2>
                    <p>Find questions on Stack Overflow</p>
                </Header>
            </Form>
        </Wrapper>
    );
}

export default StackOverflow;
