import React from 'react';
import Github from '../src/modules/github'

const Task03 = () => {
    

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

    return (
        <section>
            <h2>Task 03</h2>
            <button onClick={getRepos}>API repos</button>
            <Github />

        </section>
    );
}

export default Task03;

