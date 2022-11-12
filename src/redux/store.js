import { configureStore } from '@reduxjs/toolkit'
import tranlateSlice from "./slices/translateSlice";

export const store = configureStore({
    reducer: {
        translate: tranlateSlice,
    },
})