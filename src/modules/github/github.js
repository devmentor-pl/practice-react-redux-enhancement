import React, { useState } from "react";
import useInputState from "../../hooks/useInputState";
import { loadRepos, searchRepos } from "./github.api";
import { clearReposAction } from "./github.actions";
import { useSelector, useDispatch } from "react-redux";

const GitHub = () => {
    const [username, handleUsername, resetUsername] = useInputState("");
    const [keyWord, handleKeyWord, resetKeyWord] = useInputState("");

    const [activeUsername, setActiveUsername] = useState("");

    const { repos } = useSelector((state) => state.github);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handling submit");
        setActiveUsername(username);
        dispatch(loadRepos(username));
        resetUsername();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("handling search");
        dispatch(searchRepos(activeUsername, keyWord));
        resetKeyWord();
    };

    const clear = () => {
        setActiveUsername("");
        dispatch(clearReposAction());
    };

    return (
        <div>
            <h3>GitHub API </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:{" "}
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsername}
                    ></input>
                </label>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleSearch}>
                <label>
                    Search for:{" "}
                    <input
                        type="text"
                        name="keyWord"
                        placeholder="Please type key word"
                        value={keyWord}
                        onChange={handleKeyWord}
                    ></input>
                </label>
                <button type="submit">Search</button>
            </form>
            <div>
                <h3>Results: </h3>{" "}
                <ul>
                    {repos.map((repo) => (
                        <li key={repo.id}>{repo.name}</li>
                    ))}
                </ul>
                <button type="button" onClick={clear}>
                    Clear searches
                </button>
            </div>
        </div>
    );
};

export default GitHub;
