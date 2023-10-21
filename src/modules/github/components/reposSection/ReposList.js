import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../../images/github-logo.png';
import RepoItem from './RepoItem';
import Input from '../../../../components/Input';
import Error from '../../../../components/Error';
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
            if (!owner) return;
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
        setInputValue(e.target.value);
    };

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

    if (initalFetchDone && (repos.length === 0 || fetchError)) {
        return (
            <StyledReposWrapper>
                <Error renderFetch={fetchError} />
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
