import React from 'react';

function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className="flex justify-between items-center py-2 px-4">
      <label className="flex-1 cursor-pointer">
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.text}</span>
      </label>
      <button className="text-red-500" onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
