class StackoverflowAPI {
  url = "https://api.stackexchange.com/2.3/similar?order=desc";

  getStacks(title, sort) {
    return fetch(`${this.url}&sort=${sort}&title=${title}&site=stackoverflow`)
      .then((resp) => this.handleErrors(resp))
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  }
}

export default StackoverflowAPI;
