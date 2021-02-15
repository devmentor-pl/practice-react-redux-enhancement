import React  from 'react';
import { GitHubAPI } from "./github.api";
import regeneratorRuntime from "regenerator-runtime";
import "regenerator-runtime/runtime.js";


class Github extends React.Component {
    api = new GitHubAPI();


    constructor(props) {
        super(props)
    

        this.state = {
            username: '',
            repos: '',
        }
    }



    async handleSubmit(e) {
        e.preventDefault()
        const {value} = this.refs.username
        let user = await this.api.getUser(value);
        let repos = await this.api.getRepos(value);

        this.setState({
            user: {
              avatar_url: user.avatar_url,
              username: user.login,
              followers: user.followers,
              following: user.following,
              url: user.url,
            },
            repos,
          })
        }
    


  renderRepos(repos) {
    return repos.map(item => {
      return <div key={item.id} className="repoResults">
        <p>
          {item.name}
        </p>
      </div>
    })
  }

  renderUser(user) {
    return (
      <div className="resultBadge">
        <img src={user.avatar_url} />
        <p className="userInfo">
          Username: <br />
          {user.username}
        </p>
        <p className="followerInfo">
          {user.followers} Followers
                </p>
        <p className="followingInfo">
          Following {user.following} users
                </p>
      </div>
    )
  }



  render() {
      const {user, repos} = this.state;

            return (
              

                <div className="GitHubSearch">
                    <h1>Github User Search </h1>
        
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input   ref='username' type='text' placeholder='username' />
                </form>

                <div className="Search-intro">
                {user && this.renderUser(user)}
                </div>
                <div>
                {repos && this.renderRepos(repos)}
                </div>

                </div>
        );
  }



}

export default Github;