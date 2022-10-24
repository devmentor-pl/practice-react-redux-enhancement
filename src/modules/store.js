import { configureStore } from "@reduxjs/toolkit";
import githubSlice from "./github/githubSlice";
import stackoverflowSlice from "./stackoverflow/stackoverflowSlice";

const store = configureStore({
    reducer: {
        github: githubSlice,
        stackoverflow: stackoverflowSlice,
    }
});

export default store;