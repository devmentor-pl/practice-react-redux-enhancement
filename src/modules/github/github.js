import React  from 'react';
import { GitHubAPI } from "./github.api";
import regeneratorRuntime from "regenerator-runtime";
import "regenerator-runtime/runtime.js";


class Github extends React.Component {
    api = new GitHubAPI();


    constructor(props) {
        super(props)
        this.input = React.createRef();

        this.state = {
            username: '',
            userrepo: '',
        }
    }


   async handleSubmit(e) {
        e.preventDefault();
        let user = await this.api.getUser(this.input.current.value);
        this.setState({ 
            username: user.login,
            url: user.url,
        })

        let repo = await this.api.getRepos(this.input.current.value);
        this.setState({
            name: repo.name,
            description: repo.description,
          

     })
    }



  render() {
      let user;
      if(this.state.username) {
        user = 
        <div className="resultBadge">
          <p className="userInfo">
           Username: <br/>
           {this.state.username} 
          </p> 
        </div>
    }

    let repo;
      if(this.state.userrepo) {
         repo =
           <div className="repoResults">
              <p>
                {this.state.userrepo}
             </p>
           </div>
       }

            return (
              

                <div className="GitHubSearch">
                    <h1>Github User Search </h1>
        
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input   ref={this.input} type='text' placeholder='username' />
                </form>

                <div className="Search-intro">
                    {user}
                    {repo}
                </div>

                </div>
        );
  }



}

export default Github;