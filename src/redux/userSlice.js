import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Tianna Jenkins' },
    { id: '1', name: 'Kevin Grant' },
    { id: '2', name: 'Madison Price' }
]

export const usersSlice  = createSlice({
    name:"user",
    initialState,
    reducers:{}

})

export default usersSlice.actions