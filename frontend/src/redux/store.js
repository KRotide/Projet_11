import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;