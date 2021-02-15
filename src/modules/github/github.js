
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, getUser, loadData } from './github.actions';

const Github = ()  =>  {

    const dispatch = useDispatch();
    const { user, repos } = useSelector(state => state);

    useEffect(() => {
      dispatch(loadData());
      }, []);



    const handleSubmit = (e) => {
        e.preventDefault()
        const {value} = this.refs.user
        // let user = await this.api.getUser(value);
        // let repos = await this.api.getRepos(value);
        dispatch(loadData(value))
      }
    


  const renderRepos = (repos)  =>{
      return repos.map(item => {
        return <div key={item.id}>
          <p>
            {item.name}
          </p>
        </div>
      })
  }


  const renderUser = (user) => {
    return (
        <p>
          Username: 
          {user.user}
        </p>

    )
  }

            return (
                <div>
                    <h1>Github User Search </h1>
  
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input   ref='user' type='text' placeholder='username' />
                </form>


                <div>
                    {user && renderUser(user)}
               </div>

                <div>
                    {repos && renderRepos(repos)}
                 </div>

                </div>
        );
  



}

export default Github;

// import React  from 'react';
// import { GitHubAPI } from "./github.api";
// import "regenerator-runtime/runtime.js";


// class Github extends React.Component {
//     api = new GitHubAPI();

//     constructor(props) {
//         super(props)
  

//         this.state = {
//             username: '',
//             repos: '',
//         }
//     }

//     async handleSubmit(e) {
//         e.preventDefault()
//         const {value} = this.refs.username
//         let user = await this.api.getUser(value);
//         let repos = await this.api.getRepos(value);

//         this.setState({
//             user: {
//               avatar_url: user.avatar_url,
//               username: user.login,
//               followers: user.followers,
//               following: user.following,
//               url: user.url,
//             },
//             repos,
//           })
//         }
    


//   renderRepos(repos) {
//       return repos.map(item => {
//         return <div key={item.id}>
//           <p>
//             {item.name}
//           </p>
//         </div>
//       })
//   }

//   renderUser(user) {
//     return (
//       <div>
//         <img src={user.avatar_url} />
//         <p>
//           Username: <br />
//           {user.username}
//         </p>
//         <p>
//           {user.followers} Followers
//          </p>
//         <p>
//           Following {user.following} users
//          </p>
//       </div>
//     )
//   }



//   render() {
//       const {user, repos} = this.state;

//             return (
            
//                 <div>
//                     <h1>Github User Search </h1>
      
//                 <form onSubmit={e => this.handleSubmit(e)}>
//                     <input   ref='username' type='text' placeholder='username' />
//                 </form>

//                 <div>
//                    {user && this.renderUser(user)}
//                 </div>

//                 <div>
//                    {repos && this.renderRepos(repos)}
//                 </div>

//                 </div>
//         );
//   }



// }

// export default Github;