import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
// importing {reducers} from "../features/todo/todoSlice"

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    // dispatch(reducer());   => uses a reducer to make changes in the store
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="px-20 py-5 bg-slate-50 border rounded-full"
        placeholder="Enter A To Do..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-slate-900 text-slate-100 rounded-full px-10 py-5"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
