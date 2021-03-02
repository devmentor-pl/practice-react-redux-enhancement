// /2.2/similar?order=asc&sort=votes&title=query&site=stackoverflow

class StackoverflowAPI {
    url = 'https://api.stackexchange.com';

    getResponse = (query) => {
        const body = `/2.2/similar?order=asc&sort=votes&title=${query}&site=stackoverflow`;

        return fetch(`${this.url}${body}`)
            .then(this.handleErrors)
            .then((resp) => resp.json());
    };

    handleErrors(resp) {
        !resp.ok ? throw Error(resp.statusText) : resp;
    }
}

export default StackoverflowAPI;
