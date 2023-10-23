import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../../images/github-logo.png';
import RepoItem from './RepoItem';
import Input from '../../../../components/Input';
import Error from '../../../../components/Error';
import List from '../../../../components/List';
import ListSection from '../../../../components/ListSection/ListSection';
import * as h from '../../../../helpers';

import { StyledImgContainer, StyledHeader } from './ReposList.styled';

function ReposList() {
    const [ownerInfo, setOwnerInfo] = useState(null);
    const [isOpenId, setIsOpenId] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const { repos, fetchError, initalFetchDone } = useSelector(state => state.github);
    const filteredRepos = repos.filter(repo => repo.name.includes(inputValue.trim()));
    const headerRef = useRef(null);
    const [listHeight, setLightHeight] = useState(null);

    useEffect(() => {
        if (ownerInfo && headerRef.current) {
            setLightHeight(headerRef.current.clientHeight);
        }
    }, [ownerInfo, headerRef]);

    useEffect(() => {
        if (repos.length > 0) {
            const { owner } = repos[0];
            if (!owner) return;
            setOwnerInfo(owner);
        }
    }, [repos, headerRef]);

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
        const ownerName = h.capitalizeFirstLetter(ownerInfo.login);

        return (
            <ListSection as='list'>
                <StyledHeader ref={headerRef}>
                    <div className='user-bio'>
                        <StyledImgContainer $as='circle'>
                            <img src={ownerInfo.avatar_url} alt='user' />
                        </StyledImgContainer>
                        <div>
                            <h2>{ownerName}</h2>
                            <p>
                                User has <span>{repos.length}</span> repos
                            </p>
                        </div>
                    </div>
                    <Input type='text' placeholder='filter repos' onChange={handleChange} hoverColor='light' />
                </StyledHeader>

                <List height={listHeight}>{renderItems(filteredRepos)}</List>
            </ListSection>
        );
    }

    if (initalFetchDone && (repos.length === 0 || fetchError)) {
        console.log('wpadł error');
        return (
            <ListSection as='centre'>
                <Error renderFetch={fetchError} />
            </ListSection>
        );
    }

    return (
        <ListSection as='centre'>
            <StyledImgContainer>
                <img src={logo} alt='github logo' />
            </StyledImgContainer>
        </ListSection>
    );
}

export default ReposList;
