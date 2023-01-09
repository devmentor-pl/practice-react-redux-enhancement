import { setRepos, setError } from "./github.actions";

class GitHubAPI {
  //url = "https://api.github.com/";
  constructor() {
    this.url = "https://api.github.com/";
  }
  getRepos(userName) {
    console.log("getRepos");
    return function thunk(dispatch, getState) {
      // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
      console.log("thunk");
      return (
        fetch(`${url}/users/${userName}/repos`)
          //.then(handleErrors)
          .then(console.log("fetch"))
          .then((resp) => resp.json())
        //.then((resp) => dispatch(this.props.onSetRepos(resp)))
        //.catch((err) => dispatch(setError(err)))
      );
    };
  }

  handleErrors = (resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  };
}

export default GitHubAPI;
