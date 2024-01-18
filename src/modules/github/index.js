import GitHubAPI from "./github.api";
import { getRepos, setLogin, setPhrase } from "./github.actions";
import Github from "./github";
import reducers from "./github.reducer";
import types from './github.types'

export { GitHubAPI,getRepos, setLogin, setPhrase,  Github, reducers, types }