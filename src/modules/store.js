import { configureStore } from "@reduxjs/toolkit";
import githubSlice from "./github/githubSlice";

const store = configureStore({
    reducer: {
        github: githubSlice,
    }
});

export default store;