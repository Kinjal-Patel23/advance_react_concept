import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add_task: (state, action) => {
            state.value.push(action.payload);
        },
        delete_task: (state, action) => {
            state.value = state.value.filter(
                (t, i) => i !== action.payload
            );
        }
    }
})

export const {add_task, delete_task} = todoSlice.actions

export default todoSlice.reducer