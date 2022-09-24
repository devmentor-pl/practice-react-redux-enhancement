import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from './index'
import GitHubAPI from './github.api'

const Github = () => {
    const [number, setNumber] = React.useState(0)
    const [inputRepoValue, setInputRepoValue] = React.useState('')
    const [inputPhraseValue, setInputPhraseValue] = React.useState('')

    const dispatch = useDispatch()
    const {repos, phrase} = useSelector(state => state.reducer)

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
        console.log( repos )
    }
    
    React.useEffect(() => {
        dispatch(actions.addPhrase(inputPhraseValue))

    }, [inputPhraseValue])

    const testRedux = () => {
        console.log('testRedux')
        setNumber(number => number + 1)
        const name = 'text ' + number
        console.log( name )
        dispatch(actions.add( name ))
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log('onSubmit')

        const repos = new GitHubAPI()
        // console.log( repos.getAllRepos() )
        dispatch(repos.getAllRepos(inputRepoValue))
    }

    return (
        <div>
            <h2>Github</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="user">
                        user login
                        <input type="text" onChange={inputRepo}
                        placeholder='user login'
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="phrase">
                        phrase repo
                        <input type="text" onChange={inputPhrase}
                        />
                    </label>
                </div>
                <button>Pobierz repozytoria</button>
            </form>
            <br />
            <button onClick={testRedux}>test Redux</button>
            <br />
            <ol>
                {showRepos}
            </ol>

        </div>
    )
}

export default Github