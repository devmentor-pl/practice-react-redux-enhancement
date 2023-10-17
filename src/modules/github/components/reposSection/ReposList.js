import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../../images/github-logo.png';
import forest from '../../../../images/forest.png';
import RepoItem from './RepoItem';
import {
    StyledReposWrapper,
    StyledImgContainer,
    StyledHeader,
    StyledReposList,
    StyledInputWrapper,
} from './ReposList.styled';

function ReposList() {
    const [ownerInfo, setOwnerInfo] = useState(null);
    const [isOpenId, setIsOpenId] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [initialRender, setInitialRender] = useState(true);
    const { repos, user, fetchError, initalFetchDone } = useSelector(state => state.github);
    const filteredRepos = repos.filter(repo => repo.name.includes(inputValue));

    useEffect(() => {
        if (repos.length > 0) {
            const { owner } = repos[0];
            if (!owner) throw new Error('no owner');
            setOwnerInfo(owner);
        }
    }, [repos]);

    const handleOpen = id => {
        if (id === isOpenId) {
            return setIsOpenId(null);
        }
        setIsOpenId(id);
    };

    const renderItems = repos => {
        const items = repos.map((item, index) => (
            <RepoItem key={item.id} data={item} index={index} handleClick={handleOpen} isOpen={item.id === isOpenId} />
        ));

        return items;
    };

    const handleChange = e => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const errorMessageJSX = (
        <>
            <StyledImgContainer>
                <img src={forest} alt='forest' />
            </StyledImgContainer>
            <h2>You're lost</h2>
            <h4>Error! {fetchError}</h4>
        </>
    );

    const noReposMessageJSX = (
        <StyledReposWrapper>
            <h2>Found no repos</h2>
            <p>Appears that user has public repos</p>
        </StyledReposWrapper>
    );

    if (repos.length > 0 && ownerInfo) {
        const ownerName = ownerInfo.login.charAt(0).toUpperCase() + ownerInfo.login.slice(1);

        return (
            <StyledReposWrapper $as='list'>
                <StyledHeader>
                    <StyledImgContainer $as='circle'>
                        <img src={ownerInfo.avatar_url} alt='user' />
                    </StyledImgContainer>
                    <div>
                        <h2>{ownerName}</h2>
                        <p>
                            User has <span>{repos.length}</span> repos
                        </p>
                    </div>
                </StyledHeader>
                <StyledInputWrapper>
                    <input type='text' placeholder='filter repos' onChange={handleChange} />
                    <StyledReposList>{renderItems(filteredRepos)}</StyledReposList>
                </StyledInputWrapper>
            </StyledReposWrapper>
        );
    }

    if (fetchError) {
        return errorMessageJSX;
    }

    if (initalFetchDone && repos.length === 0) {
        console.log('first');
        return noReposMessageJSX;
    }

    return (
        <StyledReposWrapper>
            <StyledImgContainer>
                <img src={logo} alt='github logo' />
            </StyledImgContainer>
        </StyledReposWrapper>
    );
}

export default ReposList;
