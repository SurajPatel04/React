import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    // reducer: {
    //     // We can have multiple reducers in the store and we can combine them using the combineReducers function from redux toolkit but here we have only one reducer so we can directly pass it to the configureStore function
    //     todo: todoReducer
    // }

    reducer: todoReducer

});