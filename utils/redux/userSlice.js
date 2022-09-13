import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userId: null,
    success: false
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers
})