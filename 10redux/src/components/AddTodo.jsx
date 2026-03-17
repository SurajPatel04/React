import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

// In this i want to store todo
// For adding todo in the redux we need to dispatch an action to the store and that action will be handled by the reducer function in the slice and that reducer function will update the state of the store

function AddTodo() {

    const [input, setInput] = useState("");

    // dispatch use -> reducers to update -> state in the store
    const dispatch = useDispatch();
    const addTodoHandler = (e)=>{
        e.preventDefault();
        // Dispatch the addTodo action to the store with the input value as the payload
        dispatch(addTodo(input));
        setInput("");
    }
    return (
        <form action="" onSubmit={addTodoHandler}>
        <input type="text" value={input} placeholder="Add a todo..." onChange={(e)=>setInput(e.target.value)} />
        <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo