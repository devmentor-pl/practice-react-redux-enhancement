import React from 'react';
import { useSelector } from 'react-redux';

import stackLogo from '../../../../images/stacklogo.png';
import forest from '../../../../images/forest-svg-white.svg';
import { StyledTopicsContainer, StyledHeader, StyledImgContainer } from './TopicList.styled';

function TopicList() {
    const { comments, initalFetchDone, fetchError } = useSelector(state => state.stackOverFlow);
    console.log(comments[0]);
    // console.log('fetchError');
    // console.log(fetchError);
    console.log('comments');
    console.log(comments);

    const errorMessageJSX = (
        <>
            <StyledImgContainer>
                <img src={forest} alt='forest' />
            </StyledImgContainer>
            <h2>You're lost. Try again.</h2>
            <h4>Error! {fetchError}</h4>
        </>
    );

    const noTopicsMessageJSX = (
        <>
            <h2>Found no topics</h2>
            <p>Try to rephrase you sentence</p>
        </>
    );

    if (comments.length > 0) {
        return (
            <StyledTopicsContainer>
                <StyledHeader></StyledHeader>
            </StyledTopicsContainer>
        );
    }

    if (initalFetchDone && (comments.length === 0 || fetchError)) {
        return <StyledTopicsContainer>{fetchError ? errorMessageJSX : noTopicsMessageJSX}</StyledTopicsContainer>;
    }

    return (
        <StyledTopicsContainer>
            <StyledImgContainer>
                <img src={stackLogo} alt='stackoverflow logo' />
            </StyledImgContainer>
        </StyledTopicsContainer>
    );
}

export default TopicList;
