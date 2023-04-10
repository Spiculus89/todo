import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} />

      {todos.length > 0 ? (
        <div className="mt-4">
          <button
            className="mr-4 hover:text-green-700"
            onClick={() => setShowCompleted(false)}
          >
            All
          </button>
          <button
            className=" hover:text-green-700"
            onClick={() => setShowCompleted(true)}
          >
            Completed
          </button>
          <TodoList
            todos={showCompleted ? completedTodos : todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        </div>
      ) : (
        <h4 className="py-2 my-2 text-center"> Todo List empty, please add a ToDo</h4>
      )}
    </div>
  );
}

export default App;
