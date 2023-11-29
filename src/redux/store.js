import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import documentationReducer from "./reducers/documentationSlice"
import playGroundReducer from "./reducers/playgroundSlice"
import tokenReducer from "./reducers/tokenSlice"
import userReducer from "./reducers/userSlice"

export const store = configureStore({
    reducer: {
        documentation : documentationReducer,
        playground : playGroundReducer,
        token : tokenReducer,
        user : userReducer
    },
    middleware: [thunk],
})


