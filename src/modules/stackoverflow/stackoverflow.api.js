class StackoverflowAPI {

    getUrl(title, sort) {
        return `https://api.stackexchange.com/2.3/similar?sort=${sort}&title=${title}&site=stackoverflow`
    }

    getData(title, sort) {
        return fetch(this.getUrl(title, sort))
            .then(this.handleErrors)
            .then(resp => {
                return resp.json()
            })
    // .catch(err => console.log(err))

    }

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText);
        } return resp
    }
}

export default StackoverflowAPI