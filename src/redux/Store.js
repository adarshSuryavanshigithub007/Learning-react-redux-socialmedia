import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./features/post/postsSlice";

export default configureStore({
    reducer:{
        posts:postsSlice.reducer
    }
})  