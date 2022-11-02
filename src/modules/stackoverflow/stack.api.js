class StackApi {
    link = 'https://api.stackexchange.com'

    getData(title) {
        return fetch(`${this.link}/2.3/similar?order=desc&sort=creation&title=${title}&site=stackoverflow`)
            .then(this.handleErrors)
            .then(resp => resp.json())
    }

    handleErrors(resp) {
        if(!resp.ok) {
            throw Error(resp.statusText);
        }
        return resp;
    };
};

export default StackApi;