class StackOverFlowAPI {
    url = 'https://api.stackexchange.com';

    getQueryQuestion(query, order, votes) {
        return fetch(`${this.url}/2.3/similar?order=${order}&sort=${votes}&title=${query}&site=stackoverflow`)
            .then(this.handleError)
            .then(resp => resp.json())
    }

    handleError(resp) {
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }

        return resp;
    }
}

export default StackOverFlowAPI;