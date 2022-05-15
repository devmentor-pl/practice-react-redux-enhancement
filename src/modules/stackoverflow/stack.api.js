class StackAPI {
    url = 'https://api.stackexchange.com/';

    getTopics(topicTitle) {
        return fetch(`${this.url}2.3/similar?order=desc&sort=activity&title=${topicTitle}&site=stackoverflow`)
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
export default StackAPI;