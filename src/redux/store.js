import { configureStore } from '@reduxjs/toolkit'
import documentationReducer from "./reducers/documentationSlice"
import playGroundReducer from "./reducers/playgroundSlice"

export const store = configureStore({
    reducer: {
        documentation : documentationReducer,
        playground : playGroundReducer
    },
})


