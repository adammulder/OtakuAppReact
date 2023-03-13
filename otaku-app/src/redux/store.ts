import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './Slices/RootSlices'

export const store = configureStore({
    reducer,
    devTools: true,
})