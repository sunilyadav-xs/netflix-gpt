import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerClip: null
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerClip: (state, action) => {
            state.trailerClip = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerClip} = moviesSlice.actions;

export default moviesSlice.reducer;