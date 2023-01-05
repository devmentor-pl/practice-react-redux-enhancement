class StackoverflowAPI {
  url = "https://api.stackexchange.com/2.3/similar";
  //       https://api.stackexchange.com/docs/similar#order=desc&sort=activity&title=What%20is%20boolean&filter=default&site=stackoverflow

  getData(title) {
    return fetch(
      `${this.url}?order=desc&sort=activity&title=${title}&site=stackoverflow`
    )
      .then(this.handleErrors)
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  }
  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }
}
export default StackoverflowAPI;
