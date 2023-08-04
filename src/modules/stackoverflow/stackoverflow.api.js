class StackOverflowApi {
	url = "https://api.stackexchange.com";

	getItems(query) {
		return fetch(
			`${this.url}/2.3/similar?pagesize=20&order=desc&sort=activity&title=${query}&site=stackoverflow`
		).then(resp => {
			if (resp.ok) {
				console.log(resp);
				return resp.json();
			}
			throw Error(resp.status);
		});
	}
}

export default StackOverflowApi;
