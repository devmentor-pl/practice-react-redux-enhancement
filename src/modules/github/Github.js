import React from 'react'
import {useDispatch} from 'react-redux'
import {actions} from './index'
import GitHubAPI from './github.api'

const Github = () => {
    const [number, setNumber] = React.useState(0)

    const dispatch = useDispatch()
    
    const getRepos = e => {
        console.log('APi repos')
        fetch('https://api.github.com/users/andrzej-stasinski/repos')
            .then(resp => resp.json())
            .then(repos => {
                console.log(repos)
                repos.map(repo => {
                    console.log(repo.name)
                })
            })
    }

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
        dispatch(repos.getAllRepos())
    }

    return (
        <div>
            <h2>Github</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="user">
                        <input type="text" onChange={getRepos} />
                    </label>
                </div>
                <div>
                    <label htmlFor="phrase">
                        <input type="text" />
                    </label>
                </div>
                <button>Pobierz repozytoria</button>
            </form>
            <br />
            <button onClick={testRedux}>test Redux</button>
        </div>
    )
}

export default Github