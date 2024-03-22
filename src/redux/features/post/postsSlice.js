import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = []
export const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
    
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    user: userId
                }
            }
        },
    },
        updatePost(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const { postAdded, updatePost } = postsSlice.actions