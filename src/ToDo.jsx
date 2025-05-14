import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setTodos([...todos, { text: trimmed, completed: false }]);
    setInput('');
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const removeTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...todos];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTodos(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...todos];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTodos(updatedTasks);
    }
  }

  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="todo-left">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
            </div>
            <button className="btn btn-danger" onClick={() => removeTodo(index)}>
              Delete
            </button>
            <button className='btn btn-primary' onClick={() => moveTaskUp(index)}>Up</button>
            <button className='btn btn-primary' onClick={() => moveTaskDown(index)}>Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
