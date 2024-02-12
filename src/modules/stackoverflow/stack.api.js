class StackOverflowAPI {
    url = 'https://api.stackexchange.com/2.3/questions?order=desc&sort=creation&site=stackoverflow';

    getPosts() {
        return fetch(this.url)
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


export default StackOverflowAPI;