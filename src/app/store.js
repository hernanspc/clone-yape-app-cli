import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});
