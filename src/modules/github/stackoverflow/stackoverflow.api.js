import { setRepos, setError } from "./github.actions";

class StackOverflowAPI {
  constructor() {
    this.url = "https://api.stackexchange.com/2.3/similar";
  }
  getData(topic) {
    // https://api.stackexchange.com/2.3/similar?order=desc&sort=creation&title=javascript%20react&site=stackoverflow
    return fetch(
      `${this.url}?order=desc&sort=creation&title=${topic}&site=stackoverflow`
    ).then((resp) => resp.json());
  }

  handleErrors = (resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  };
}

export default StackOverflowAPI;
