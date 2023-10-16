import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../../images/github-logo.png';
import RepoItem from './RepoItem';
import { StyledReposWrapper, StyledImgContainer, StyledHeader, StyledReposList } from './ReposList.styled';

function ReposList() {
    const [ownerInfo, setOwnerInfo] = useState(null);
    const [isOpenId, setIsOpenId] = useState(null);
    const { repos, fetchLoading } = useSelector(state => state.github);
    console.log(repos[0]);

    useEffect(() => {
        if (repos.length > 0) {
            const { owner } = repos[0];
            if (!owner) throw new Error('no owner');
            setOwnerInfo(owner);
            console.log(owner);
        }
    }, [repos]);

    const handleOpen = id => {
        if (id === isOpenId) {
            return setIsOpenId(null);
        }
        setIsOpenId(id);
    };

    const renderItems = () => {
        const items = repos.map((item, index) => (
            <RepoItem key={item.id} data={item} index={index} handleClick={handleOpen} isOpen={item.id === isOpenId} />
        ));

        return items;
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
                <input type='text' />
                <StyledReposList>{renderItems()}</StyledReposList>
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
