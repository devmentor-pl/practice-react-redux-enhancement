export class stackOverflowAPI {

   url = 'https://api.stackexchange.com'

    getData(title) {

        // return fetch( `${this.url}/2.2/similar?fromdate=1586736000&order=asc&sort=${sort}&title=${value}&site=stackoverflow`)


        return fetch( `${this.url}/2.2/similar?fromdate=1586736000&order=asc&sort=activity&title=${title}&site=stackoverflow`)

			  .then(this.handleErrors)
			  .then((resp) => resp.json())
     
	  }
 

    handleErrors(resp) {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
    
        return resp;
    }

}