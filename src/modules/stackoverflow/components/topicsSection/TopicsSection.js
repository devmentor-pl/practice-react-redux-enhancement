import React from 'react';
import { useSelector } from 'react-redux';
import { UilArrowsVAlt, UilFavorite, UilCreateDashboard } from '@iconscout/react-unicons';

import stackLogo from '../../../../images/stacklogo.png';
import forest from '../../../../images/forest-svg-white.svg';
import List from '../../../../components/List/List';
import TopicItem from '../topicItem';

import useSort from '../../../../hooks/useSort';

import { StyledTopicsContainer, StyledHeader, StyledImgContainer, StyledButtonContainer } from './TopicsSection.styled';

function TopicsSection() {
    const { query, comments, initalFetchDone, fetchError } = useSelector(state => state.stackOverFlow);
    const { data, handleSort, sortByProperty } = useSort(query, comments);

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
        <div>
            <h2>Found no topics</h2>
            <p>Try to rephrase your query</p>
        </div>
    );

    const renderItems = itemsArr => {
        return itemsArr.map((item, index) => {
            return <TopicItem key={index} data={item} />;
        });
    };

    if (comments.length > 0) {
        return (
            <StyledTopicsContainer $as='list'>
                <StyledHeader>
                    <h2>Search Results</h2>
                    <p>{comments.length} comments</p>
                    <hr />
                    <StyledButtonContainer>
                        <button className='btn-sort' onClick={handleSort}>
                            <UilArrowsVAlt />
                            By Newest
                        </button>
                        <button className='btn-sort' onClick={() => sortByProperty('reputation')}>
                            <UilFavorite />
                            By Reputation
                        </button>
                        <button className='btn-sort' onClick={() => handleSort('relevance')}>
                            <UilCreateDashboard />
                            By Relevance
                        </button>
                    </StyledButtonContainer>
                </StyledHeader>
                <List>{renderItems(data)}</List>
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
