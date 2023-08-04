class StackOverflowApi {
	url = "https://api.stackexchange.com";

	getItems(title) {
		return fetch(
			`${this.url}/2.3/similar?pagesize=20&order=desc&sort=activity&title=${title}&site=stackoverflow`
		).then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			throw Error(resp.status);
		});
	}
}

export default StackOverflowApi;
