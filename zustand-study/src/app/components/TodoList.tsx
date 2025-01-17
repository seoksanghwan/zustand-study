'use client';

import React, { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

const TodoList = () => {
  const [todoValue, setTodoValue] = useState('');

  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoValue);
    setTodoValue('');
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-[20px]">Todo APP</h3>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={e => setTodoValue(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Add
        </button>
      </form>
      <ul className="flex flex-col gap-2 mt-[20px]">
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            {!todo.isCompleted && (
              <button onClick={() => completeTodo(todo.id)}>✅</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
