import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { UilArrowsVAlt, UilFavorite, UilCreateDashboard } from '@iconscout/react-unicons';

import stackLogo from '../../../../images/stacklogo.png';
import List from '../../../../components/List/List';
import TopicItem from '../topicItem';
import Error from '../../../../components/Error';

import useSort from '../../../../hooks/useSort';
import useCalculateListHeight from '../../../../hooks/useCalculateListHeight';

import { StyledTopicsContainer, StyledHeader, StyledImgContainer, StyledButtonContainer } from './TopicsSection.styled';

function TopicsSection() {
    const { query, comments, initalFetchDone, fetchError } = useSelector(state => state.stackOverFlow);
    const { data, handleSort, sortByProperty } = useSort(query, comments);
    const headerRef = useRef(null);
    const { listHeight } = useCalculateListHeight(headerRef);

    const renderItems = itemsArr => {
        return itemsArr.map((item, index) => {
            return <TopicItem key={index} data={item} />;
        });
    };

    if (comments.length > 0) {
        return (
            <StyledTopicsContainer $as='list'>
                <StyledHeader ref={headerRef}>
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
                <List height={listHeight}>{renderItems(data)}</List>
            </StyledTopicsContainer>
        );
    }

    if (initalFetchDone && (comments.length === 0 || fetchError)) {
        return (
            <StyledTopicsContainer>
                <Error renderFetch={fetchError} variant='dark' />
            </StyledTopicsContainer>
        );
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
