class StackOverflow {
  url = 'https://api.stackexchange.com';

  getAnswers(question, sortingFlag) {
    return fetch(
      `${this.url}/2.3/similar?order=desc&sort=${sortingFlag}&title=${question}&site=stackoverflow`
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

export default StackOverflow;
