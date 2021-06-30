class StackoverflowAPI {
    url = 'https://api.stackexchange.com';

    getResponse = ({ userQuery, order, sortMethod }) => {
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
