import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./features/post/postsSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { usersSlice } from "./userSlice";

const rootReducer = combineReducers({
    posts: postsSlice.reducer,
    users: usersSlice.reducer
});
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;