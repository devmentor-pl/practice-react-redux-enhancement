class StackoverflowAPI {
  url = "https://api.stackexchange.com/2.3/similar";

  getData(title, sort) {
    return fetch(
      `${this.url}?order=desc&sort=${sort}&title=${title}&site=stackoverflow`
    )
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
