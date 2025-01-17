import "./index.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className=" justify-items-center border rounded-lg bg-slate-400 mx-96  translate-y-10 border-gray-900/10 ">
        <h1 className="text-4xl text-gray-700 font-bold pt-10">To Do List</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
