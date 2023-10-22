import { types } from './'

const updateReposArr = arr => {
    return {
        type: types.LOAD_REPOS,
        payload: { arr: arr }
    }
}

export default updateReposArr