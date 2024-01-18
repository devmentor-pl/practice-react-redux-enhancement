class StackOverflowAPI {
	url = 'https://api.stackexchange.com';

	getAnswers(question, sortingFlag) {
		//  https://api.stackexchange.com/docs/similar
		return fetch(`${this.url}/2.3/similar?order=desc&sort=${sortingFlag}&title=${question}&site=stackoverflow`)
			.then(this.handleErros)
			.then(resp => resp.json());
	}

	handleErros(resp) {
		if (!resp.ok) {
			throw new Error(resp.statusText);
		}
		return resp;
	}
}
export default StackOverflowAPI;
