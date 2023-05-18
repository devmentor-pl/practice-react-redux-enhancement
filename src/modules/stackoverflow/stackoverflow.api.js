export default class StackOverFlowAPI {
	url = 'https://api.stackexchange.com';

	getThreads(title) {
		return fetch(
			`${this.url}/2.3/similar?pagesize=10&order=desc&sort=creation&title=${title}&site=stackoverflow`
		).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			throw Error(resp.status);
		});
	}
}
