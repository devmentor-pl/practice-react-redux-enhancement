import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThreadsAction, setTitleAction } from "./stackoverflow.actions";

const StackOverflow = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(setTitleAction(title));
        dispatch(getThreadsAction());
    } 
    const handleChange = event => {
        setFilterMethod(event.target.value)
    }
    const threads = useSelector(state => state.stackoverflow.threads) 
    const [filterMethod, setFilterMethod] = useState('creation_date');
    
    const filteredThreads = () => {
    return threads.map(element => element).sort(function(a,b){ return b[filterMethod]-a[filterMethod]})
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)}></input>
                <input type="submit"></input>
            </form>
            <div>
                <h1>Similar threads:</h1>
                <label>Filter by:</label>
                <select value={filterMethod} onChange={handleChange}>
                    <option value="creation_date">date</option>
                    <option value="owner.reputation">user's reputation</option>
                </select>
                <ul>{threads.length > 0
                    ? filteredThreads().map(element => <li key={element.link}>
                    <a href={element.link}>{element.title}</a></li>)
                    : null}
                </ul>
            </div>
        </section>
    )
}

export default StackOverflow