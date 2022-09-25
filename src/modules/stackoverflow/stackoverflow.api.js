class StackAPI {
    URL = "https://api.stackexchange.com/2.3/questions?order=desc&site=stackoverflow";

    getStacks(sort = '', title = '') {
        // test params
        console.log(`${this.URL}&sort=${sort}&title=${title}`)

        // return fetch(`https://api.stackexchange.com/2.3/questions?order=desc&site=stackoverflow&sort=&title=`)
        return fetch(`${this.URL}&sort=${sort}&title=${title}`)
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
export default StackAPI