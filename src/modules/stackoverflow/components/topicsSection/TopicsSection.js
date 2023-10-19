import React from 'react';
import { useSelector } from 'react-redux';
import { UilArrowsVAlt, UilFavorite } from '@iconscout/react-unicons';

import stackLogo from '../../../../images/stacklogo.png';
import forest from '../../../../images/forest-svg-white.svg';

import { StyledTopicsContainer, StyledHeader, StyledImgContainer, StyledButtonContainer } from './TopicsSection.styled';

function TopicsSection() {
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
            <p>Try to rephrase your query</p>
        </>
    );

    if (comments.length > 0) {
        return (
            <StyledTopicsContainer $as='list'>
                <StyledHeader>
                    <h2>Search Results</h2>
                    <p>{comments.length} comments</p>
                    <hr />
                    <StyledButtonContainer>
                        <button className='btn-sort'>
                            <UilArrowsVAlt />
                            By Newest
                        </button>
                        <button className='btn-sort'>
                            <UilFavorite />
                            By Reputation
                        </button>
                    </StyledButtonContainer>
                </StyledHeader>
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

export default TopicsSection;
