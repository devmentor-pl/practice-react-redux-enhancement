class StackOverflowAPI {
    url = 'https://api.stackexchange.com/2.3/similar?order=desc&sort=votes&site=stackoverflow';

    getComments(query) {
        return fetch(`${this.url}&title=${query}`)
            .then(this.handleErrors)
            .then(resp => resp.json());
    }

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error('Problem fetching data');
        }

        return resp;
    }
}

export default StackOverflowAPI;
