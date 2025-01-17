import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null); // To track the todo being edited
  const [newText, setNewText] = useState(""); // To store the new text

  const startEdit = (id, currentText) => {
    setEditId(id); // Set the current editing todo's id
    setNewText(currentText); // Pre-fill with the current text
  };

  const updateHandler = () => {
    dispatch(updateTodo({ id: editId, text: newText })); // Dispatch updateTodo action
    setEditId(null); // Reset editing state
    setNewText(""); // Clear input
  };

  return (
    <>
      <div className="text-slate-800 py-5 text-2xl">My To Do List</div>
      <ul className="list-inside list-decimal">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center my-2 pb-10  text-2xl space-x-1"
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className=""
                />

                <button onClick={updateHandler}>Save</button>
              </>
            ) : (
              <>
                <div className="text-slate-800 ">{todo.text} </div>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-slate-900 text-slate-100 rounded-full px-10 py-1"
                >
                  🗑️
                </button>
                <button
                  onClick={() => startEdit(todo.id, todo.text)}
                  className="bg-slate-900 text-slate-100 rounded-full px-10 py-1"
                >
                  ✏️
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
