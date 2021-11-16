import { searchPostsAction } from "./stack.actions";

export const searchPosts = (keyWord, creationOrder, votesOrder) => {
    const url = "https://api.stackexchange.com";
    return function thunk(dispatch, getState) {
        const cOrder = creationOrder.value;
        const vOrder = votesOrder.value;
        return fetch(
            `${url}/2.3/posts?fromdate=1609459200&todate=1637020800&order=${cOrder}&sort=creation&title=${keyWord}&site=stackoverflow`,
            {
                method: "GET",
                headers: {
                    Accept: "Access-Control-Allow-Origin: http://localhost:8080",
                },
            }
        )
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw Error(resp.statusText);
            })
            .then((resp) => {
                if (vOrder === "asc") {
                    const arr = resp.items.sort((a, b) => {
                        if (a.owner !== undefined && b.owner !== undefined) {
                            return a.owner.reputation - b.owner.reputation;
                        }
                    });
                    dispatch(searchPostsAction(arr));
                } else {
                    const arr = resp.items.sort((a, b) => {
                        if (a.owner !== undefined && b.owner !== undefined) {
                            return b.owner.reputation - a.owner.reputation;
                        }
                    });
                    dispatch(searchPostsAction(arr));
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };
};
