class StackOverflowAPI {
    url = 'https://api.stackexchange.com/2.3';

    getComments(query, order = 'desc', sort = 'relevance') {
        return fetch(`${this.url}/similar?order=${order}&sort=${sort}&title=${query}&site=stackoverflow`)
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
