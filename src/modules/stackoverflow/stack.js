import React, { useState } from "react";
import useInputState from "../../hooks/useInputState";
import useSelectState from "../../hooks/useSelectState";
import { searchPosts } from "./stack.api";
import { clearPostsAction } from "./stack.actions";
import { useSelector, useDispatch } from "react-redux";

const Stackoverflow = () => {
    const [keyWord, handleKeyWord, resetKeyWord] = useInputState("");
    const [creationOrder, setCreationOrder] = useSelectState({});
    const [votesOrder, setVotesOrder] = useSelectState({});

    const { posts } = useSelector((state) => state.stackoverflow);

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("handling search");
        dispatch(searchPosts(keyWord, creationOrder, votesOrder));
        resetKeyWord();
    };

    const clear = () => {
        resetKeyWord();
        dispatch(clearPostsAction());
    };

    return (
        <div>
            <h3>Stackoverflow</h3>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "400px",
                }}
                onSubmit={handleSearch}
            >
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
                <label>
                    Sort by date:
                    <select name="creation" onChange={setCreationOrder}>
                        <option disabled selected defaultValue>
                            {" "}
                            -- select an option --{" "}
                        </option>
                        <option value="asc">Newer first</option>
                        <option value="desc">Older first</option>
                    </select>
                </label>
                <label>
                    Sort by owner's reputation:
                    <select name="votes" onChange={setVotesOrder}>
                        <option disabled selected defaultValue>
                            {" "}
                            -- select an option --{" "}
                        </option>
                        <option value="asc">Highest upvote first</option>
                        <option value="desc">Lowest upvote first</option>
                    </select>
                </label>
                <button type="submit">Search</button>
            </form>
            <div>
                <h3>Results: </h3>
                <ul>
                    <ul>
                        {posts.map((post, index) => {
                            const href = post.link;
                            const date = new Date(post.creation_date * 1000);
                            const convertedDate = date
                                .toString()
                                .slice(4, 15)
                                .replaceAll(" ", "/");
                            return (
                                <li key={index + 1}>
                                    {index + 1}. Created: {convertedDate}, by:{" "}
                                    {post.owner !== undefined
                                        ? post.owner.display_name
                                        : "NN"}{" "}
                                    (
                                    {post.owner !== undefined
                                        ? post.owner.reputation
                                        : ""}
                                    ). <a href={`${href}`}>See post.</a>
                                </li>
                            );
                        })}
                    </ul>
                </ul>
                <button type="button" onClick={clear}>
                    Clear searches
                </button>
            </div>
        </div>
    );
};

export default Stackoverflow;
