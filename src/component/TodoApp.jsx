import React, { useState } from 'react'

const TodoApp = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAdd = ()=>{
        if(!text.trim()) return;
        const newTodo = {
            id:Date.now(),
            text:text
        };
        setTodos((prev)=> [...prev, newTodo]);
        setText("");
    }
    const handleDelete = (id)=>{
        setTodos((prev)=> prev.filter((todo)=> todo.id !== id));
    }
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add Todo</button>
      <div className="flex">
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.text}</span>

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp