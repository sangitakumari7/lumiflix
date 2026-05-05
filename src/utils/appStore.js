import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import aiSearchReducer from "./aiSearchSlice";
import configReducer from "./configSlice";
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            aiSearch: aiSearchReducer,
            config : configReducer,
        
    },
});

export default appStore;