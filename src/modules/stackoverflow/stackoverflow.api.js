class StackoverflowAPI {
    url = 'https://api.stackexchange.com/2.3/questions?order=desc&sort=votes';

    getStacks(title) {
        return fetch(`${this.url}&title=${title}&site=stackoverflow`)
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
