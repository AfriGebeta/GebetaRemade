// src/redux/store.js
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import documentationReducer from "./reducers/documentationSlice"
import playGroundReducer from "./reducers/playgroundSlice"
import tokenReducer from "./reducers/tokenSlice"
import userReducer from "./reducers/userSlice"

const rootReducer = combineReducers({
   documentation : documentationReducer,
   playground : playGroundReducer,
   token : tokenReducer,
   user : userReducer
})

// const persistConfig = {
//  key: 'root',
//  storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: rootReducer,
   middleware: [thunk],
})

// export const persistor = persistStore(store)
