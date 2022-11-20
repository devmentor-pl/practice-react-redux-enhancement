class StackoverflowAPI {
    url = 'https://api.stackexchange.com';

    getStacks(title, sort) {
        return fetch(`${this.url}/2.3/questions?order=desc&sort=${sort}&title=${title}&site=stackoverflow`)
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

export default StackoverflowAPI
