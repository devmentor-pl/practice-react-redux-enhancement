import React from "react";

import { setUserName, setRepoName } from "./githubSlice";
import { fetchUserRepo } from "./githubSlice";
import { useDispatch, useSelector } from "react-redux";

const GithubUI = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.github.user);
    const repositoriesName = useSelector(state => state.github.repositoriesName);
    const filterRepo = useSelector(state => state.github.filterRepo);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUserRepo());
    };

    return (
        <section>
            <header>
                <h1>Get user repositories:</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <input type='text' name="user" placeholder="user" onChange={(e) => dispatch(setUserName({ userName: e.target.value }))} value={user}/>
                <input type='text' name="repositories" placeholder="repositories" onChange={(e) => dispatch(setRepoName({ repoName: e.target.value }))} value={repositoriesName}/>
                <button type="submit">Get repo!</button>
            </form>
            <section>
                <ul>{filterRepo && filterRepo.map(item =>( <li key={item.id}>{item.name}</li>))}</ul>
            </section>
        </section>
    )
}

export default GithubUI;