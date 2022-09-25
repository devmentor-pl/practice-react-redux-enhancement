import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index'
import GitHubAPI from './github.api'

const styles = {
    form: { padding: '10px', border: '1px dotted gray' },
    wrapDiv: { color: 'gray', paddingBottom: '10px' },
    label: { width: '100px', display: 'inline-block' }
}

const Github = () => {
    const [number, setNumber] = React.useState(0)
    const [inputRepoValue, setInputRepoValue] = React.useState('')
    const [inputPhraseValue, setInputPhraseValue] = React.useState('')

    const dispatch = useDispatch()
    const { repos, phrase } = useSelector(state => state.reducer)

    const showRepos = repos
        .filter(repo => repo.toUpperCase().includes(phrase.toUpperCase()))
        .map(repo => {
            return (
                <li>{repo}</li>
            )
        })

    const inputRepo = e => {
        setInputRepoValue(e.target.value)
    }

    const inputPhrase = e => {
        setInputPhraseValue(e.target.value)
        console.log(repos)
    }

    React.useEffect(() => {
        dispatch(actions.addPhrase(inputPhraseValue))

    }, [inputPhraseValue])


    const onSubmit = e => {
        e.preventDefault()
        dispatch(actions.resetRepo())

        const repos = new GitHubAPI()
        dispatch(repos.getAllRepos(inputRepoValue))
    }

    const testRedux = () => {
        console.log('testRedux')
        setNumber(number => number + 1)
        const name = 'text ' + number
        console.log(name)
        dispatch(actions.add(name))
    }

    return (
        <div>
            <form onSubmit={onSubmit} style={styles.form}>
                <div style={styles.wrapDiv}>
                    <label htmlFor="user" style={styles.label}>
                        user login
                    </label>
                    <input type="text" onChange={inputRepo}
                        placeholder='user login'
                    />
                </div>
                <div style={styles.wrapDiv}>
                    <label style={styles.label} />
                    <button>Pobierz repozytoria</button>
                </div>
                <div style={styles.wrapDiv}>
                    <label htmlFor="phrase" style={styles.label}>
                        phrase repo
                    </label>
                    <input type="text" onChange={inputPhrase}
                    />
                </div>
            </form>
            <br />
                <div style={styles.wrapDiv}>
                    <label htmlFor="phrase" style={styles.label} />
                    <button onClick={testRedux}>test Redux</button>
                </div>
            <ol>
                {showRepos}
            </ol>

        </div>
    )
}

export default Github