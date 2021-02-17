export class stackOverflowAPI {

   url = 'https://api.stackexchange.com'

    getData(value) {

        return fetch( `${this.url}/2.2/similar?fromdate=1586736000&order=asc&sort=creation&title=${value}&site=stackoverflow`)


        // return fetch( `${this.url}/2.2/search/advanced?order=desc&sort=activity&user=${value}&site=stackoverflow`)

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