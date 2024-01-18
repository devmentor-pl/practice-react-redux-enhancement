export default class StackOverflow {
  url = 'https://api.stackexchange.com/2.3';

  getQuestions(query, order = 'desc', sort = 'creation') {
    return fetch(
      `${this.url}/similar?order=${order}&sort=${sort}&title=${query}&site=stackoverflow`
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
