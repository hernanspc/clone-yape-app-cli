import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme'
import userReducer from '../features/user';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer
    },
});
