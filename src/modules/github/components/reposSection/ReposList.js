import React from 'react';
import { useSelector } from 'react-redux';

import { StyledReposWrapper } from './ReposList.styled';

function ReposList() {
    return <StyledReposWrapper><h2>Repos list</h2></StyledReposWrapper>;
}

export default ReposList;
