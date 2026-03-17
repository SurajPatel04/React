// nanoid Provides the unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    // Name is used to identify the slice in the dev tools and also in the actions
    name: "todo",
    // Initial state is the default state of the slice
    initialState,
    // Reducers are the functions that will be called when the action is dispatched
    // We also pass the state and the action as parameters to the reducer function
    // state is the current state of the slice and action is the action that is dispatched
    reducers: {
       // addTodo is reducer function that will be called through the dispatch function
        addTodo: (state, action)=>{
            // Create a new todo object with a unique id and the text from the action payload
            // todo is the new todo object that we will add to the state in the intial state we have an array of todos and we will push the new todo object to that array
            const todo = {
                // nanoid is a function that generates a unique id
                id: nanoid(),
                // text is the payload of the incoming action and payload is object that contains the data that we want to pass to the reducer function when we dispatch an action to the store
                text: action.payload
            }
            // Push the new todo object to the todos array in the state
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            // Filter the todos array in the state to remove the todo with the id that matches the action payload
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        updateTodo: (state, action)=>{
            // Destructure the id and text from the action payload
            const {id, text} = action.payload;
            // Find the todo with the id that matches the action payload and update its text
            const todo = state.todos.find(todo => todo.id === id);
            // If the todo is found, update its text with the new text from the action payload
            if(todo){
                todo.text = text;
            }
        },
    },
});


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer function that will be used to create the store in the store.js file
export default todoSlice.reducer;