

export function Todo({todo,handleDelete}) {
  return (
    <div className="todo">
      <input style={{textDecoration:todo.completed && "line-through"}}
      value={todo.title} />
      <div>
        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}
