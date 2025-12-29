import { useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const Todo = () => {

  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAddBtn = () => {
    if (!text) return;

    setTodo([...todo, text]);
    setText("");
  };

  const handleDelete = (index) => {
    const filteredTodo = todo.filter((_, i) => i !== index);
    setTodo(filteredTodo);
  };

  return (
    <>
      <div className="flex justify-center items-start pt-10">
        <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Todo App
          </h1>

          <div className="flex gap-2 mb-5">
            <input
              type="text"
              placeholder="Enter task"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAddBtn}
              className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {todo.map((t, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
              >
                <span className="text-gray-700">{t}</span>

                <div className="flex gap-3">
                  <span className="cursor-pointer"><FaEdit /></span>

                  <button onClick={() => handleDelete(i)}><FaTrash /></button>
                </div>
              </li>
            ))}
          </ul>

          {todo.length === 0 && (
            <p className="text-center text-gray-400 mt-4">
              No tasks added yet
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
