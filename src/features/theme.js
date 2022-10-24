import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from 'react';

const initialState = {
    theme: 'default',
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLightTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const {
    setDarkTheme,
    setLightTheme,
} = themeSlice.actions;
export default themeSlice.reducer;
