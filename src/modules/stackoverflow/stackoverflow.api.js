class StackoverflowAPI {
    // constructor(textValue) {
    //     this.url = 'https://api.stackexchange.com/2.3/search/advanced?site=stackoverflow&q='
    //     // this.url=`https://api.stackexchange.com/2.3/similar?&title=${textValue}&site=stackoverflow` // nie wiem czemu ta opcja nie działa, znalazłam alternatywę (chociaż teraz szuka po jakichś tagach, nie tytule
    // }

    // load(title) {
    //     return fetch(this.url + title)
    //         .then(this.handleErrors)
    //         .then(resp => resp.json())
    // }

    getUrl(textValue) {
        // usunąłem też & który jest niepotrzebny
        return `https://api.stackexchange.com/2.3/similar?title=${textValue}&site=stackoverflow`
    }

    load(title) {
        return fetch(this.getUrl(title))
            .then(this.handleErrors)
            .then(resp => resp.json())
    }

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
    }
}

export default StackoverflowAPI