import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {

    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();
    const handleDelete = (id)=>{
        dispatch(removeTodo(id))
    }

  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <div key={todo.id} style={{
            display: "flex",
            flexDirection: "rows",
            alignItems: "center"
        }}>
         <div> {todo.text} </div>
         <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    ))}
    </>
  )
}

export default Todos