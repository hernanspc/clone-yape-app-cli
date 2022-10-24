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
            state.theme = "dark";
        },
        setLightTheme: (state, action) => {
            state.theme = "light";
        },
    },
});

export const {
    setDarkTheme,
    setLightTheme,
} = themeSlice.actions;
export default themeSlice.reducer;
