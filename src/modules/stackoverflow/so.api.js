// /2.2/similar?order=asc&sort=votes&title=query&site=stackoverflow

class StackoverflowAPI {
    url = 'https://api.stackexchange.com';

    getResponse = (query) => {
        const orderSort = 'desc';
        const sortMethod = 'relevance';
        const isAnswered = true;

        const body = `/2.2/search/advanced?order=${orderSort}&=${isAnswered}&sort=${sortMethod}&body=${query}&site=stackoverflow`;

        return fetch(`${this.url}${body}`)
            .then(this.handleErrors)
            .then((resp) => resp.json());
    };

    handleErrors(resp) {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp;
    }
}

export default StackoverflowAPI;
