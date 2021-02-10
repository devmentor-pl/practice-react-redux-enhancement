export default class stackOverflowAPI {
	url = 'https://api.stackexchange.com';

	getResponse(sort = 'reputation') {
		// 'creation'
		return fetch(
			`${this.url}/2.2/users?order=desc&sort=${sort}&site=stackoverflow`
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
