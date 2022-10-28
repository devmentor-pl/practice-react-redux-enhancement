class StackoverflowAPI {
  url =
    "https://api.stackexchange.com/2.3/questions?order=desc&site=stackoverflow";

  getStack(title, sort) {
    return fetch(`${this.url}&sort=${sort}&title=${title}`)
      .then(this.handleErrors)
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
