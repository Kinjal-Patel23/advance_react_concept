import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add_task: (state, action) => {
      state.value.push(action.payload)
    },
    delete_task: (state, action) => {
      state.value = state.value.filter((_, i) => i !== action.payload)
    },
    edit_task: (state, action) => {
      const { index, text } = action.payload
      state.value[index] = text
    },
  },
})

export const { add_task, delete_task, edit_task } = todoSlice.actions

export default todoSlice.reducer
