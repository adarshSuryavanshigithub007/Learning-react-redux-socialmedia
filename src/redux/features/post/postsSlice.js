import { createSlice } from "@reduxjs/toolkit"



const initialState = []
export const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost(state,action){
            // Redux Toolkit automatically 
            // returns the new state based on the mutations made in the reducer functions.
            state.push(action.payload)
        }
    }
})

export const {addPost} = postsSlice.actions