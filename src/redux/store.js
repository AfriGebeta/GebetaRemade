import { configureStore } from '@reduxjs/toolkit'
import documentationReducer from "./reducers/documentationSlice"

export const store = configureStore({
    reducer: {
        documentation : documentationReducer
    },
})