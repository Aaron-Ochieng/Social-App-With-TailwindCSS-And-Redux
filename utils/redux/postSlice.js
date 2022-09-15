import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        allPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },
        deletePost: (state, action) => {
            const index = state.posts.findIndex((post) => post.id === action.payload.id)


            let postToBeDeleted = [...state.posts]


            if (index >= 0) {
                postToBeDeleted.splice(index, 1);
            } else {
                console.log('you cannot delete the post since you do not own it.')
            }


            state.posts = postToBeDeleted
        },

    }
})


export const { allPosts, addPost, deletePost } = postSlice.actions;
export const selectPosts = (state) => state.posts.posts;
export default postSlice.reducer;