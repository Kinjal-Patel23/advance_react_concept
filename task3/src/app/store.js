// import { configureStore } from "@reduxjs/toolkit";
// import  counterSlice  from "../features/counter/counterSlice";

// export const store = configureStore({
//     reducer: {
//         counter: counterSlice,
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todo/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
})