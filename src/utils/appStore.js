import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice";
import GptReducer from "../utils/gptSlice";

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:GptReducer
        },
    }
);

export default appStore;