export class StackOverflowAPI {
  url = "https://api.stackexchange.com";

  getQuestions(title, sort = "creation", order = "desc") {
    return fetch(
      `${this.url}/2.2/similar?site=stackoverflow&title=${encodeURIComponent(
        title
      )}&order=${order}&sort=${sort}`
    )
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
