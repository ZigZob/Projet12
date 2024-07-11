import { createSlice } from '@reduxjs/toolkit';

const initialState = "en"

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        toggleLang: (state) => {
            return state === "fr" ? "en" : "fr";
        }
    },
});

export const { toggleLang } = langSlice.actions;
export default langSlice.reducer;