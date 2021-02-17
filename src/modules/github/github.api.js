export class GitHubAPI {

  url = "https://api.github.com";


     getRepos(userValue) {
       return fetch(`${this.url}/users/${userValue}/repos`)
         .then(this.handleErrors)
         .then(resp => resp.json());
     }
 
     getUser(userValue) {
       return fetch(`${this.url}/users/${userValue}`)
       .then(this.handleErrors)
       .then(resp => resp.json());
   }
   
     handleErrors(resp) {
       if (!resp.ok) {
         throw Error(resp.statusText);
       }
   
       return resp;
     }
    }