class StackoverflowbAPI {
    url = 'https://api.stackexchange.com';

    getQuestions(query) {
        return fetch(`${this.url}/2.2/search?order=desc&intitle=${query}&site=stackoverflow`)
            .then(this.handleErrors)
            .then(resp => resp.json())
    }

    handleErrors(resp) {
        if(!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
    }
}

export default StackoverflowbAPI