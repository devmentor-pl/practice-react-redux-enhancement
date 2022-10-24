import React from "react";
import { setTitle, setSortBy } from "./stackoverflowSlice";
import { fetchTitle } from "./stackoverflowSlice";
import { useDispatch, useSelector } from "react-redux";



const StackoverflowUI = () => {

    const dispatch = useDispatch();
    const title = useSelector(state => state.stackoverflow.title);
    const data = useSelector(state => state.stackoverflow.data);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchTitle());
    };

    return (
        <section>
            <header>
                <h1>Get question stackoverflow</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <input type='text' name="title" placeholder="title" value={title} onChange={(e) => dispatch(setTitle(e.target.value))} />
                <select name="sort" onChange={(e)=> dispatch(setSortBy(e.target.value))}>
                    <option value='creation'>Creation</option>
                    <option value='votes'>Vote</option>
                </select>
                <button type="submit">Search!</button>
            </form>
            <section>
                {data && (
                    <ol>
                        {data.map((item, id) => (
                            <li key={id}>
                                <header>{item.title}</header>
                                <ul>
                                    <li>Link: <a href={item.link}>{item.link}</a></li>
                                    <li>Score: {item.score}</li>
                                </ul>
                            </li>
                        ))}
                    </ol>
                )}
            </section>
        </section>
    )
}

export default StackoverflowUI;