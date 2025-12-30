import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_task, delete_task, edit_task } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.todo.value);

  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();

  const handleAddBtn = () => {
    if (text.trim() !== "") {
      dispatch(add_task(text));
      setText("");
    }
  };

  const handleEdit = (index, task) => {
    setEditIndex(index);
    setEditText(task);
  };

  const handleEditSave = () => {
    dispatch(edit_task({ index: editIndex, text: editText }));
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Todo List
        </h1>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAddBtn}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg
                       hover:bg-indigo-600 transition-all active:scale-95"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-center text-gray-400">No tasks yet</p>
          )}

          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100
                         px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 border px-2 py-1 rounded"
                  />
                  <button
                    onClick={handleEditSave}
                    className="ml-2 text-green-700"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-800">{task}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(index, task)}
                      className="text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(delete_task(index))}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
