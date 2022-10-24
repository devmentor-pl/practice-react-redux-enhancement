import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTitle = createAsyncThunk('stackoverflow/fetchTitle', (_,thunkAPI) => {
    const stack = thunkAPI.getState().stackoverflow;

    const response = fetch(`https://api.stackexchange.com/2.3/similar?order=desc&sort=${stack.sortBy}&title=${stack.title}&site=stackoverflow`)
        .then(resp => {
            if (!resp.ok) throw new Error('Can not fetch data');
            return resp.json();
        })
        .then(data => data)
        .catch(error => {
            return thunkAPI.rejectWithValue(error.message);
        })
    return response;
})

const stackoverflowSlice = createSlice({
    name: 'stackoverflow',
    initialState: {
        title: '',
        sortBy:'',
        data: [],
        error:'',
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    },
    extraReducers: {
        [fetchTitle.fulfilled]: (state, action) => {
            state.data = [...action.payload.items];
        },
        [fetchTitle.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setTitle, setSortBy } = stackoverflowSlice.actions;
export default stackoverflowSlice.reducer;