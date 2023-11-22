import { configureStore } from '@reduxjs/toolkit'
import documentationReducer from "./reducers/documentationSlice"
import playGroundReducer from "./reducers/playgroundSlice"
import tokenReducer from "./reducers/tokenSlice"


export const store = configureStore({
    reducer: {
        documentation : documentationReducer,
        playground : playGroundReducer,
        token : tokenReducer
    },
})


