export default class StackOverflow {
  url = 'https://api.stackexchange.com/2.3';

  getQuestions(query, order = 'desc', sort = 'activity') {
    const encodedQuery = encodeURIComponent(query);
    return fetch(
      `${this.url}/search?order=${order}&sort=${sort}&intitle=${encodedQuery}&site=stackoverflow`
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
