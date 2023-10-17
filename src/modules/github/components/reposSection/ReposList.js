import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../../images/github-logo.png';
import forest from '../../../../images/forest.png';
import RepoItem from './RepoItem';
import Input from '../../../../components/Input';
import { StyledReposWrapper, StyledImgContainer, StyledHeader, StyledReposList } from './ReposList.styled';

function ReposList() {
    const [ownerInfo, setOwnerInfo] = useState(null);
    const [isOpenId, setIsOpenId] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const { repos, fetchError, initalFetchDone } = useSelector(state => state.github);
    const filteredRepos = repos.filter(repo => repo.name.includes(inputValue.trim()));

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
            <h2>You're lost. Try again.</h2>
            <h4>Error! {fetchError}</h4>
        </>
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
                <Input type='text' placeholder='filter repos' onChange={handleChange} hoverColor='light' />
                <StyledReposList>{renderItems(filteredRepos)}</StyledReposList>
            </StyledReposWrapper>
        );
    }

    if (fetchError) {
        return <StyledReposWrapper>{errorMessageJSX}</StyledReposWrapper>;
    }

    if (initalFetchDone && repos.length === 0) {
        return (
            <StyledReposWrapper>
                <h2>Found no repos</h2>
                <p>Appears that user has public repos</p>
            </StyledReposWrapper>
        );
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
