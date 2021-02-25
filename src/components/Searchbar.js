import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StyledInput from './styled/Input.styled';
import { setRepoQuery } from '../modules/github/github.actions';

const Searchbar = (props) => {
    const dispatch = useDispatch();
    const repoQuery = useSelector((store) => store.repoQuery);
    return (
        <StyledInput
            placeholder='FILTER...'
            onChange={(e) => dispatch(setRepoQuery(e.target.value))}
            value={repoQuery}
            // onKeyUp={(e) => dispatch(getRepos())}
        />
    );
};

export default Searchbar;
