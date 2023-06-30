class StackoverflowApi {
	url = 'https://api.stackexchange.com/2.3/similar';

	getItems(title) {
		return fetch(
			`${this.url}?&order=desc&sort=creation&title=${title}&site=stackoverflow`
		)
			.then(this.handleErrors)
			.then((resp) => resp.json());
	}

	handleErrors(resp) {
		if (!resp.ok) {
			throw Error(resp.status);
		}

		return resp;
	}
}

export default StackoverflowApi;
