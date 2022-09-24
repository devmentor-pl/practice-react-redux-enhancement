import React from 'react'
import {useDispatch} from 'react-redux'
import {actions} from './index'

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

    return (
        <div>
            <h2>Github</h2>
            <form>
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
            </form>
            <br />
            <button onClick={testRedux}>test Redux</button>
        </div>
    )
}

export default Github