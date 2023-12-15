import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, setPhrase, setSort } from './stackoverflow.actions';

const StackOverflow = () => {
    const { sort, phrase, posts } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(phrase, sort));
    }, [phrase, sort])

    return (
        <section>
            <form>
                <input name="phrase" value={phrase}
                    onChange={e => dispatch(setPhrase(e.target.value))}></input>
                <select name="sort" value={sort}
                    onChange={e => dispatch(setSort(e.target.value))}>
                    <option value="activity">activity</option>
                    <option value="votes">votes</option>
                </select>
            </form>
            <ul>
                {posts.map(p => <li key={p.question_id}><a href={p.link}>{p.title}</a></li>)}
            </ul>
        </section>
    )
}

export default StackOverflow;