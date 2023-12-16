import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReposPhraseAction, setUserAction, getReposPhraseAction } from './github.actions';
const GitHub = () => {
    const { login, phrase, repos } = useSelector(state => state)
    const { log, phr, rep } = useSelector(state => state.github)
    const dispatch = useDispatch();

    function handleLoginChange(e) {
        const login = e.target.value;
        dispatch(setUserAction(login));
        dispatch(getReposPhraseAction(login));
    }

    return (
        <section>
            <form>
                <input name="login" value={login}
                    onChange={handleLoginChange}></input>
                <input name="phrase" value={phrase}
                    onChange={e => dispatch(setReposPhraseAction(e.target.value))}></input>
            </form>
            <ul>
                {repos.filter(r => r.name.includes(phrase)).map(r => <li key={r.id}><a href={r.url}>{r.name}</a></li>)}
            </ul>
        </section>
    )
}

export default GitHub;