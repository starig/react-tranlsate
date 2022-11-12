import { configureStore } from '@reduxjs/toolkit'
import tranlateSlice from "./slices/tranlateSlice";

export const store = configureStore({
    reducer: {
        translate: tranlateSlice,
    },
})