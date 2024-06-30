import { createSlice } from '@reduxjs/toolkit';

const initialState = "day"

const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        toggleTime: (state) => {
            return state === "night" ? "day" : "night";
        }
    },
});

export const { toggleTime } = timeSlice.actions;
export default timeSlice.reducer;