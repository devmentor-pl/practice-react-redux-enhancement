// const url = 'https://api.stackexchange.com/2.3/similar?order=desc&sort=creation&title=java%20babel&site=stackoverflow';

const url = 'https://api.stackexchange.com/2.3/similar?order=desc'

export const handleErrors = (resp) => {
    if(!resp.ok) {
        if (resp.status === 429) {
            return Promise.reject('LIMIT EXCEEDED');
            }
        return Promise.reject(resp.status);
    }   
    return resp;
}

export const getStack = (title, sort) => {
    return fetch(`${url}&sort=${sort}&title=${title}&site=stackoverflow`)
        .then(resp => handleErrors(resp))
        .then(resp=> resp.json())
}



