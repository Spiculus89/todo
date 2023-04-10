import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <ul className="divide-y divide-gray-300">
      {todos.map((todo, index) => (
        <li key={todo.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
          <TodoItem
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
