

export function Todo({todo,handleDelete,toggleComplete}) {
  return (
    <div className="todo">
      <input style={{textDecoration:todo.completed && "line-through"}}
      value={todo.title} />
      <div>
        <button onClick={()=>toggleComplete(todo)}>Completar</button>
        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}
