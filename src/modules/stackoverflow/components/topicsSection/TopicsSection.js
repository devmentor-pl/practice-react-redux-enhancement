import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UilArrowsVAlt, UilFavorite, UilCreateDashboard } from '@iconscout/react-unicons';

import stackLogo from '../../../../images/stacklogo.png';
import forest from '../../../../images/forest-svg-white.svg';
import List from '../../../../components/List/List';
import TopicItem from '../topicItem';
import * as h from '../../../../helpers';

import { StyledTopicsContainer, StyledHeader, StyledImgContainer, StyledButtonContainer } from './TopicsSection.styled';
import { getCommentsAction } from '../../stackoverflow.actions';

function TopicsSection() {
    const { query, comments, initalFetchDone, fetchError } = useSelector(state => state.stackOverFlow);
    const [data, setData] = useState(comments);
    const [prevSearchQuery, setPrevSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sorting, setSorting] = useState('asc');
    const dispatch = useDispatch();
    // console.log(comments)

    useEffect(() => {
        if (query !== '') {
            setPrevSearchQuery(query);
            // console.log('query:');
            // console.log(searchQuery);
        }

        setData(comments);
        // console.log('data');
        // console.log(data[0]);
    }, [query, comments]);

    const handleSort = option => {
        console.log(prevSearchQuery);
        // console.log(sorting);

        if (option === 'relevance') return dispatch(getCommentsAction(prevSearchQuery));

        dispatch(getCommentsAction(prevSearchQuery, sorting, 'creation'));
        if (sorting === 'desc') {
            setSorting('asc');
        } else {
            setSorting('desc');
        }
    };

    const sortByProperty = property => {
        if (sortBy === property && property === 'date') {
            const sortedData = [...data].reverse();
            setData(sortedData);
        } else {
            const sortedData = [...data].sort((a, b) => {
                if (property === 'reputation') {
                    return b.owner.reputation - a.owner.reputation;
                } else if (property === 'date') {
                    return b.creation_date - a.creation_date;
                }
            });
            setData([...sortedData]);
        }
        setSortBy(property);
    };

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
                        <button
                            className='btn-sort'
                            onClick={() => {
                                // sortByProperty('date');
                                handleSort();
                            }}
                        >
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
