import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim() !== "") {
      addTodo(todoText.trim());
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        placeholder="Add new task"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        className="w-full rounded-l-lg px-4 py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none focus:border-black"
      />
      <button
        type="submit"
        className="px-4 rounded-r-lg bg-green-500 text-white font-bold p-2 uppercase border-green-600 hover:bg-green-700 border-t border-b border-r focus:outline-none"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
