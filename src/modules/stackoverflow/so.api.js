// /2.2/similar?order=asc&sort=votes&title=query&site=stackoverflow

class StackoverflowAPI {
    url = 'https://api.stackexchange.com';

    getResponse = ({ userQuery, order, sortMethod }) => {
        // const { userQuery, isAnswered, sortMethod } = requestBody;
        const body = `/2.2/search/advanced?page=1&pagesize=10&order=${order}&sort=${sortMethod}&body=${userQuery}&site=stackoverflow`;

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
