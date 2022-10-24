import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserRepo = createAsyncThunk('github/fetchUserRepo',
    (_,thunkAPI) => {
        const state = thunkAPI.getState();
        const response = fetch(`https://api.github.com/users/${state.github.user}/repos`).then(resp => {
            if (!resp.ok) throw new Error('Can not get data from githubAPI');
            return resp.json();
        }).then(data => {
            return data;
        }).catch(error => {
            return thunkAPI.rejectWithValue(error.message);
        });
        return response;
    });

const githubSlice = createSlice({
    name: 'github',
    initialState: {
        user:'',
        repositoriesName: '',
        filterRepo:'',
        allUserRepo: [],
        error:'',
    },
    reducers: {
        setUserName: (state, action) => {
            state.user = action.payload.userName;
        },
        setRepoName: (state, action) => {
            state.repositoriesName = action.payload.repoName;
        },
    },
    extraReducers: {
        [fetchUserRepo.fulfilled]: (state, action) => {
            state.allUserRepo = action.payload;
            const getFilterRepo = state.allUserRepo.filter(repo => repo.name === state.repositoriesName);
            getFilterRepo ? state.filterRepo = getFilterRepo : '';
        },
        [fetchUserRepo.rejected]: (state, action) => {
            state.error = action.payload;
        }

    }
});

export const { setUserName, setRepoName } = githubSlice.actions;
export default githubSlice.reducer;