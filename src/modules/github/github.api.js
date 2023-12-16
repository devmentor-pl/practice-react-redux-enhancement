class GitHubAPI {
    url = 'https://api.github.com';
    // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
    getRepos = async (userName, dispatch) => {
        try {
            const response = await fetch(`${this.url}/users/${userName}/repos`);
            this.handleErrors(response);

            const repos = await response.json();
            dispatch(setRepositoriesAction(repos));
        } catch (error) {
            console.error('Error occurred:', error.message);
        }
    }

    handleErrors(response) {
        if (!response.ok) {
            throw new Error('Error occurred!');
        }
    }
}
