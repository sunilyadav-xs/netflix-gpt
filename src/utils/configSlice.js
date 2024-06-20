import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        selectedLanguage:'en',
    },
    reducers: {
        languageChange: (state, action) => {
            state.selectedLanguage = action.payload;
        },
    }
});

export const {languageChange} = configSlice.actions;

export default configSlice.reducer;