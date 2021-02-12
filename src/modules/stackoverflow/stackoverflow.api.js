export default class stackOverflowAPI {
	url = 'https://api.stackexchange.com';

	getResponse(query = 'how to ask questions', sortByDate = 'desc') {
		const sortRule = sortByDate ? 'creation' : 'relevance';
		const order = sortByDate;
		return (
			fetch(
				
				`${this.url}/2.2/similar?order=${order}&sort=${sortRule}&title=${query}&site=stackoverflow`
			
			)
				.then(this.handleErrors)
				.then((resp) => resp.json())
		);
	}

	handleErrors(resp) {
		if (!resp.ok) {
			throw Error(resp.statusText);
		}

		return resp;
	}
}
