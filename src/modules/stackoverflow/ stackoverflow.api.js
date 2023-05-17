class StackOverflowAPI {
    url = 'https://api.stackexchange.com'
    
    getThreads(title){
        return fetch(`${this.url}/2.3/similar?pagesize=20&order=desc&sort=activity&title=${title}&site=stackoverflow`)
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

export default StackOverflowAPI