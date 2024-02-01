class StackOverflowAPI {
    url = 'https://api.stackexchange.com/2.3';
  
    search(query) {
        return fetch(`${this.url}/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`)
            .then(response => response.json())
            .then(data => data.items || []);
    }
}
  
export default StackOverflowAPI;